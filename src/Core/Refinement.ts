import { EquipmentCategory, EquipmentLevel, ProbabilityCategory } from "./Core";

export interface FailurePenalty {
  execute(refiningLevel: number): number;
}

export interface RefineMaterial {
  readonly name: string
  readonly chineseName: string
  readonly failurePenalty: FailurePenalty
  readonly probabilityCategory: ProbabilityCategory
}

export interface RefineMaterialProps extends RefineMaterial  {
  readonly refinableLevel: number[]
  readonly refinableEquipmentCategory: EquipmentCategory[]
  readonly refinableEquipmentLevel: EquipmentLevel[]
}
