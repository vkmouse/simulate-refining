import { EquipmentCategory, EquipmentLevel } from "../../../Core/Core";
import { RefineMaterial } from "../../../Core/Refinement";
import EquipmentSafe from "../../Refinement/FailurePenalty/EquipmentSafe";
import { query as queryRefineProbability } from "../../Table/RefineProbabilityTable/RefineProbabilityTableQuerier";
import RefineResult from "../RefineResult";
import SingleStageRefiner from "./SingleStageRefiner";

interface IProps {
  blessingEnabledList: boolean[]
  equipmentCategory: EquipmentCategory
  equipmentLevel: EquipmentLevel
  materials: RefineMaterial[]
  start: number
  end: number
  weaponRefineEnabled: boolean
}

class SingleSampleRefiner {
  private readonly start: number;
  private readonly end: number;
  private readonly blessingDemand: number[];
  private readonly refiners: SingleStageRefiner[];
  private readonly results: RefineResult[];
  private previousRefineLevel: number;
  private currentRefineLevel: number;

  constructor(props: IProps) {
    const initializer = new SingleSampleRefinerInitializer(props);
    this.start = props.start;
    this.end = props.end;
    this.blessingDemand = initializer.createBlessingDemand();
    this.refiners = initializer.createRefiners();
    this.results = RefineResult.createResults(props);

    this.previousRefineLevel = 0;
    this.currentRefineLevel = 0;
  }

  refine(): RefineResult[] {
    this.initialize();
    while (!this.isBroken() && !this.hasBeenReached()) {
      this.beforeRefine();
      this.refineOnce();
      this.afterRefine();
    }
    return this.results.filter(p => p.refineTimes !== 0);
  }

  private initialize() {
    this.previousRefineLevel = this.start;
    this.currentRefineLevel = this.start;
    for (let i = 0; i < 20; i++) {
      this.results[i].numBlessings = 0;
      this.results[i].numSuccess = 0;
      this.results[i].refineTimes = 0;
    }
  }

  private beforeRefine() {
    this.previousRefineLevel = this.currentRefineLevel;
  }

  private refineOnce() {
    this.currentRefineLevel = this.refiners[this.currentRefineLevel].refine();
  }

  private afterRefine() {
    const result = this.results[this.previousRefineLevel];
    result.refineTimes++;
    result.numBlessings += this.blessingDemand[this.previousRefineLevel];
    if (this.isSuccess()) {
      result.numSuccess = 1;
    }
  }

  private isBroken() {
    return this.currentRefineLevel === -1;
  }

  private isSuccess() {
    return this.currentRefineLevel > this.previousRefineLevel;
  }

  private hasBeenReached() {
    return this.currentRefineLevel === this.end;
  }
}

class SingleSampleRefinerInitializer {
  protected props: IProps;

  constructor(props: IProps) {
    this.props = props;
  }

  createBlessingDemand() {
    const blessingDemand: number[] = [];
    for (let refineLevel = 0; refineLevel < 20; refineLevel++) {
      blessingDemand.push(this.getBlessingDemand(refineLevel));
    }
    return blessingDemand;
  }

  createRefiners() {
    const refiners: SingleStageRefiner[] = [];
    for (let refineLevel = 0; refineLevel < 20; refineLevel++) {
      refiners.push(this.createRefiner(refineLevel));
    }
    return refiners;
  }

  private createRefiner(refineLevel: number) {
    const refiner = new SingleStageRefiner({
      failurePenalty: this.getFailurePenalty(refineLevel),
      probability: this.getProbability(refineLevel),
      refineLevel
    });
    return refiner;
  }

  private getBlessingDemand(refineLevel: number) {
    const blessingDemand = [0, 0, 0, 0,  0,
                            0, 0, 1, 2,  3,
                            4, 4, 9, 15, 0,
                            0, 0, 0, 0,  0];
    return this.getBlessingEnabled(refineLevel) ? blessingDemand[refineLevel] : 0;
  }

  private getProbability(refineLevel: number) {
    return queryRefineProbability({
      ...this.props,
      probabilityCategory: this.props.materials[refineLevel].probabilityCategory,
      refineLevel,
    });
  }

  private getFailurePenalty(refineLevel: number) {
    const { materials } = this.props;
    if (this.getBlessingEnabled(refineLevel)) {
      return new EquipmentSafe();
    } else {
      return materials[refineLevel].failurePenalty;
    }
  }

  private getBlessingEnabled(refineLevel: number) {
    const { blessingEnabledList, weaponRefineEnabled } = this.props;
    return 7 <= refineLevel && refineLevel < 14 && !weaponRefineEnabled && blessingEnabledList[refineLevel];
  }
}

export default SingleSampleRefiner;