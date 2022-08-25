import { EquipmentCategory, EquipmentLevel } from "../../Core/Core";
import FailurePenalty from "../Model/FailurePenalty";
import RefineMaterial from "../Model/RefineMaterial";
import RefineProbability from "./RefineProbability";

class Refiner {
  prob: number;
  refineLevel: number;
  failurePenalty: FailurePenalty;

  constructor(equipmentCategory: EquipmentCategory,
    equipmentLevel: EquipmentLevel,
    refineMaterial: RefineMaterial, 
    refineLevel: number) {
    this.refineLevel = refineLevel;
    this.prob = RefineProbability[refineMaterial.probabilityCategory][equipmentCategory][equipmentLevel][refineLevel];
    this.failurePenalty = refineMaterial.failurePenalty;
  }

  refineSuccess(): boolean {
    return Math.random() < this.prob;
  }

  refine() {
    if (this.refineSuccess()) {
      return this.refineLevel + 1;
    }
    return this.failurePenalty.execute(this.refineLevel);
  }
}

export default Refiner;