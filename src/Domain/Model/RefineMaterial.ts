import { EquipmentCategory, EquipmentLevelTable, ProbabilityCategory } from "../../Core/Core";
import FailurePenalty from "./FailurePenalty";

interface RefineMaterial {
  readonly name: string
  readonly chineseName: string
  readonly probabilityCategory: ProbabilityCategory
  readonly refinableEquipmentCategory: EquipmentCategory
  readonly refinableEquipmentLevel: EquipmentLevelTable<boolean>
  readonly refinableLevel: boolean[]
  readonly failurePenalty: FailurePenalty
}

export default RefineMaterial;