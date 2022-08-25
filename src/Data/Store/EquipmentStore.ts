import { action, makeObservable, observable } from "mobx";
import { EquipmentCategory, EquipmentLevel } from "../../Core/Core";
import Equipment from "../../Domain/Model/Equipment";

export default class EquipmentStore implements Equipment {
  @observable category = EquipmentCategory.Weapon;
  @observable level = EquipmentLevel.Level1;
  @observable price = 0;

  constructor() {
    makeObservable(this);
  }

  @action setCategory(value: EquipmentCategory) {
    this.category = value;
  }

  @action setLevel(value: EquipmentLevel) {
    this.level = value;
  }

  @action setPrice(value: number) {
    this.price = value;
  }
}
