import { action, makeObservable, observable } from "mobx";
import RefineRange from "../../Domain/Model/RefineRange";

export default class RefineRangeStore implements RefineRange {
  @observable start = 4;
  @observable end = 11;

  constructor() {
    makeObservable(this);
  }

  @action setRange(start: number, end: number) {
    this.start = start;
    this.end = end;
  }
}
