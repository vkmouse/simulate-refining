import RefineMaterial from "./RefineMaterial";

class SimulateResult {
  refineLevel: number;
  refineTimes: number;
  material: RefineMaterial;
  numSuccess: number;

  constructor(refineLevel: number, material: RefineMaterial) {
    this.refineLevel = refineLevel;
    this.refineTimes = 0;
    this.material = material;
    this.numSuccess = 0;
  }
}

export default SimulateResult;