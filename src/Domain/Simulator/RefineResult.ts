import { RefineMaterial } from "../../Core/Refinement";

interface IProps { 
  material: RefineMaterial, 
  refineLevel: number,
  numBlessings?: number,
  numSuccess?: number,
  refineTimes?: number,
}

class RefineResult {
  readonly material: RefineMaterial;
  readonly refineLevel: number;
  numBlessings: number;
  numSuccess: number;
  refineTimes: number;

  constructor(props: IProps) {
    this.material = props.material;
    this.refineLevel = props.refineLevel;
    this.numBlessings = props.numBlessings ?? 0;
    this.numSuccess = props.numSuccess ?? 0;
    this.refineTimes = props.refineTimes ?? 0;
  }

  static createResults(props: { materials: RefineMaterial[] }): RefineResult[] {
    return props.materials.map((material, refineLevel) => new RefineResult({ material, refineLevel, ...props }));
  }
}

export default RefineResult;
