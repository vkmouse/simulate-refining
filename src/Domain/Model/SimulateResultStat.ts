import MaterialStore from "../../Data/Store/MaterialStore";
import SimulateResult from "./SimulateResult";

class SimulateResultStatCalculator {
  results: SimulateResult[];
  materialStore: MaterialStore;
  enableBlessings: boolean[];
  equipmentPrice: number;
  numSamples: number;
  stat: SimulateResultStat[];

  constructor(props: {
      results: SimulateResult[], 
      materialStore: MaterialStore, 
      enableBlessings: boolean[],
      equipmentPrice: number,
      numSamples: number}) {
    this.results = props.results;
    this.materialStore = props.materialStore;
    this.enableBlessings = props.enableBlessings;
    this.equipmentPrice = props.equipmentPrice;
    this.numSamples = props.numSamples;
    this.stat = [];
  }

  calculate() {
    this.stat = [];
    const blessingPrice = this.materialStore.blessing;
    for (let i = 0; i < this.results.length; i++) {
      const result = this.results[i];
      const { material, refineLevel } = result;
      const materialPrice = this.materialStore.getPrice(material);
      const enableBlessing = this.enableBlessings[refineLevel];
      if (result.refineTimes > 0) {
        this.pushStat(result, materialPrice, enableBlessing, blessingPrice);
      }
    }
    this.addEquipmentPrice();
    
    return this.stat;
  }

  private pushStat(result: SimulateResult, 
      materialPrice: number, 
      enableBlessing: boolean, 
      blessingPrice: number) {
    const currStat = new SimulateResultStat(result, materialPrice, enableBlessing, blessingPrice);
    currStat.calculate();
    if (this.hasItems()) {
      const previous = this.lastItem();
      const mul = currStat.numSuccess == 0 ? Infinity : (previous.numSuccess / currStat.numSuccess);
      currStat.cost += previous.cost * mul;
      currStat.cost = Math.round(currStat.cost);
    }
    this.stat.push(currStat);
  }

  private addEquipmentPrice() {
    for (let i = 0; i < this.stat.length; i++) {
      this.stat[i].cost += Math.round(this.numSamples / this.stat[i].numSuccess * this.equipmentPrice);
    }
  }

  private hasItems() {
    return this.stat.length != 0;
  }

  private lastItem() {
    return this.stat[this.stat.length - 1];
  }
}

class SimulateResultStat {
  refineLevel: number;
  refineTimes: number;
  numSuccess: number;
  numBlessings: number;
  cost: number;
  materialPrice: number;
  enableBlessing: boolean;
  blessingPrice: number;
  blessingDemand = [0, 0, 0, 0,  0,
                    0, 0, 1, 2,  3,
                    4, 4, 9, 15, 0,
                    0, 0, 0, 0,  0];

  constructor(result: SimulateResult, 
      materialPrice: number, 
      enableBlessing: boolean, 
      blessingPrice: number) {
    this.refineLevel = result.refineLevel;
    this.refineTimes = result.refineTimes;
    this.numSuccess = result.numSuccess;
    this.numBlessings = 0;
    this.cost = 0;
    this.materialPrice = materialPrice;
    this.enableBlessing = enableBlessing;
    this.blessingPrice = blessingPrice;
  }

  calculate() {
    this.cost = this.getCost();
    if (this.enableBlessing) {
      this.cost += this.getBlessingCost();
    }
    this.cost = Math.round(this.cost);
  }

  private getCost() {
    if (this.isInfinity()) {
      return Infinity;
    }
    return this.materialPrice * (this.refineTimes / this.numSuccess);
  }

  private getBlessingCost() {
    if (this.isInfinity()) {
      return Infinity;
    }
    return this.blessingPrice * (this.refineTimes / this.numSuccess) * this.blessingDemand[this.refineLevel];
  }

  private isInfinity() {
    return this.refineTimes > 0 && this.numSuccess == 0;
  }
}

export { SimulateResultStat, SimulateResultStatCalculator };