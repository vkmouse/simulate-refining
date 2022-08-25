import { EquipmentCategory, EquipmentLevel } from "../../Core/Core";
import RefineMaterial from "../Model/RefineMaterial";
import SimulateResult from "../Model/SimulateResult";
import { EquipmentSafe } from "./FailurePenalty";
import Refiner from "./Refiner";

class RefineUser {
  refiners: Refiner[] = Array(20);
  results: SimulateResult[] = Array(20);
  start: number;
  end: number;
  refineLevel: number;

  constructor(category: EquipmentCategory, 
    level: EquipmentLevel,
    materials: RefineMaterial[],
    enableBlessings: boolean[],
    start: number,
    end: number) {
    this.start = start;
    this.end = end;
    this.refineLevel = 0;
    for (let i = 0; i < 20; i++) {
      this.refiners[i] = new Refiner(category, level, materials[i], i);
      this.results[i] = new SimulateResult(i, materials[i]);
      if (enableBlessings[i]) {
        this.refiners[i].failurePenalty = new EquipmentSafe();
      }
    }
  }

  refine(numSamples: number) {
    for (let i = 0; i < numSamples; i++) {
      this.initReineLevel();
      let min = this.refineLevel;
      let max = this.refineLevel;

      while (this.refineOnce()) {
        min = Math.min(min, this.refineLevel);
        max = Math.max(max, this.refineLevel);
      }
      max = Math.max(max, this.refineLevel);

      for (let j = min; j < max; j++) {
        this.results[j].numSuccess++;
      }
    }
    return this.results;
  }

  refineOnce() {
    this.results[this.refineLevel].refineTimes++;
    this.refineLevel = this.refiners[this.refineLevel].refine();
    return !this.isBroken() && !this.hasBeenReached();
  }

  isBroken() {
    return this.refineLevel == -1;
  }

  hasBeenReached() {
    return this.refineLevel == this.end;
  }

  initReineLevel() {
    this.refineLevel = this.start;
  }
}

export default RefineUser;