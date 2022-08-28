import { action, makeObservable, observable } from "mobx";

export default class RefineStore {
  @observable refinePriceBeforeTen = 0
  @observable refinePriceAfterTen = 0
  @observable enabledWeaponRefine = false

  constructor() {
    makeObservable(this);
  }

  @action setRefinePriceBeforeTen(value: number) {
    this.refinePriceBeforeTen = value;
  }

  @action setRefinePriceAfterTen(value: number) {
    this.refinePriceAfterTen = value;
  }

  @action setEnabledWeaponRefine(value: boolean) {
    this.enabledWeaponRefine = value;
  }
}
