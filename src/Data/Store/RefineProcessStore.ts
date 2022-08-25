import { action, makeObservable, observable } from "mobx";
import { EquipmentCategory, EquipmentLevel } from "../../Core/Core";
import RefineMaterial from "../../Domain/Model/RefineMaterial";
import RefineProcess from "../../Domain/Model/RefineProcess";
import RefineMaterialTable from "../../Domain/Refiner/RefineMaterialTable";
import Oridecon from "../../Domain/Refiner/RefiningMaterial/Oridecon";

export default class RefineProcessStore implements RefineProcess {
  @observable selectedMaterials = {
    [EquipmentCategory.Weapon]: {
      [EquipmentLevel.Level1]: [] as RefineMaterial[],
      [EquipmentLevel.Level2]: [] as RefineMaterial[],
      [EquipmentLevel.Level3]: [] as RefineMaterial[],
      [EquipmentLevel.Level4]: [] as RefineMaterial[],
      [EquipmentLevel.Level5]: [] as RefineMaterial[],
    },
    [EquipmentCategory.Armor]: {
      [EquipmentLevel.Level1]: [] as RefineMaterial[],
      [EquipmentLevel.Level2]: [] as RefineMaterial[],
      [EquipmentLevel.Level3]: [] as RefineMaterial[],
      [EquipmentLevel.Level4]: [] as RefineMaterial[],
      [EquipmentLevel.Level5]: [] as RefineMaterial[],
    }
  };

  @observable enableBlessings = {
    [EquipmentCategory.Weapon]: {
      [EquipmentLevel.Level1]: [] as boolean[],
      [EquipmentLevel.Level2]: [] as boolean[],
      [EquipmentLevel.Level3]: [] as boolean[],
      [EquipmentLevel.Level4]: [] as boolean[],
      [EquipmentLevel.Level5]: [] as boolean[],
    },
    [EquipmentCategory.Armor]: {
      [EquipmentLevel.Level1]: [] as boolean[],
      [EquipmentLevel.Level2]: [] as boolean[],
      [EquipmentLevel.Level3]: [] as boolean[],
      [EquipmentLevel.Level4]: [] as boolean[],
      [EquipmentLevel.Level5]: [] as boolean[],
    }
  };

  constructor() {
    const table = RefineMaterialTable.getTable();

    for (const category in EquipmentCategory) {
      const i = category as EquipmentCategory;
      for (const level in EquipmentLevel) {
        const j = level as EquipmentLevel;
        for (let refineLevel = 0; refineLevel < 20; refineLevel++) {
          const m = table.get(i)?.get(j)?.get(refineLevel)?.at(0) ?? new Oridecon();
          this.selectedMaterials[i][j].push(m);
          this.enableBlessings[i][j].push(false);
        }
      }
    }
    makeObservable(this);
  }

  @action setSelectedMaterials(category: EquipmentCategory, level: EquipmentLevel, refineLevel: number, material: RefineMaterial) {
    this.selectedMaterials[category][level][refineLevel] = material;
  }

  @action setEnableBlessing(category: EquipmentCategory, level: EquipmentLevel, refineLevel: number, enable: boolean) {
    this.enableBlessings[category][level][refineLevel] = enable;
  }
}
