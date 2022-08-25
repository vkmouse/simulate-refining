export enum EquipmentCategory {
  Weapon = 'Weapon',
  Armor = 'Armor',
}

export enum EquipmentLevel {
  Level1 = 'Level1',
  Level2 = 'Level2',
  Level3 = 'Level3',
  Level4 = 'Level4',
  Level5 = 'Level5',
}

export enum ProbabilityCategory {
  Normal = 'Normal',
  Special = 'Special',
}

export type EquipmentLevelTable<Type> = { [key in EquipmentLevel]: Type };
export type EquipmentCategoryTable<Type> = { [key in EquipmentCategory]: Type };
export type RefineQueryTable<Type> = EquipmentCategoryTable<EquipmentLevelTable<Type>>
