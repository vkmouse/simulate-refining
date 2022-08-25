import { action, makeObservable, observable } from "mobx";
import SimulateResult from "../../Domain/Model/SimulateResult";

export default class SimulateResultStore {
  @observable results: SimulateResult[] = [];
  @observable numSamples = 1000;

  constructor() {
    makeObservable(this);
  }

  @action setResults(value: SimulateResult[]) {
    this.results = value;
  }

  @action setNumSamples(value: number) {
    this.numSamples = value;
  }
}
