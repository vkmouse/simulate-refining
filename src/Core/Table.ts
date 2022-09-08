import { EquipmentCategory, EquipmentLevel, ProbabilityCategory } from "./Core";

export interface RefineMaterialQueryProps {
  equipmentCategory: EquipmentCategory
  equipmentLevel: EquipmentLevel
}

export interface RefineProbabilityQueryProps {
  equipmentCategory: EquipmentCategory
  equipmentLevel: EquipmentLevel
  probabilityCategory: ProbabilityCategory
  refineLevel: number
  weaponRefineEnabled?: boolean
}
