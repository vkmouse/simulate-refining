import { action, makeObservable, observable } from "mobx";
import { RefineStatsProps } from "../../Core/Simulator";

class RefineStatsPropsStore {
  @observable stats: RefineStatsProps[];

  constructor() {
    this.stats = [];
    makeObservable(this);
  }

  @action setStats(value: RefineStatsProps[]) {
    this.stats = value;
  }
}

export default RefineStatsPropsStore;