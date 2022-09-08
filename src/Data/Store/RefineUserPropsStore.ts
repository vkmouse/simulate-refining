import { action, makeObservable, observable } from "mobx";
import { EquipmentCategory, EquipmentLevel } from "../../Core/Core";
import { RefineMaterial } from "../../Core/Refinement";
import { RefineUserProps } from "../../Core/Simulator";
import { queryRefineMaterial } from "../../Domain/API";

class RefineUserPropsStore implements RefineUserProps {
  @observable blessingEnabledList: boolean[];
  @observable equipmentCategory: EquipmentCategory;
  @observable equipmentLevel: EquipmentLevel;
  @observable materials: RefineMaterial[];
  @observable numSamples: number;
  @observable start: number;
  @observable end: number;
  @observable weaponRefineEnabled: boolean;

  constructor() {
    makeObservable(this);
    this.blessingEnabledList = Array(20).fill(false);
    this.equipmentCategory = EquipmentCategory.Weapon;
    this.equipmentLevel = EquipmentLevel.Level1;
    this.materials = queryRefineMaterial({...this}).map(p => p[0]);
    this.numSamples = 1000; 
    this.start = 4;
    this.end = 11;
    this.weaponRefineEnabled = false;
  }

  @action setEquipmentCategory(value: EquipmentCategory) {
    this.equipmentCategory = value;
  }

  @action setEquipmentLevel(value: EquipmentLevel) {
    this.equipmentLevel = value;
  }

  @action setWeaponRefineEnabled(value: boolean) {
    this.weaponRefineEnabled = value;
  }

  @action setRange(start: number, end: number) {
    this.start = start;
    this.end = end;
  }

  @action setMaterial(refineLevel: number, value: RefineMaterial) {
    this.materials[refineLevel] = value;
  }

  @action setBlessingEnabled(refineLevel: number, value: boolean) {
    this.blessingEnabledList[refineLevel] = value;
  }

  @action setNumSamples(value: number) {
    this.numSamples = value;
  }
}

export default RefineUserPropsStore;