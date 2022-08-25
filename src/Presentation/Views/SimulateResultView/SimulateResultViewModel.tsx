import React, { Component } from "react";
import { inject, observer } from 'mobx-react';
import RootStore from "../../../Data/RootStore";
import SimulateReultView from "./SimulateResultView";
import RefineRangeStore from "../../../Data/Store/RefineRangeStore";
import EquipmentStore from "../../../Data/Store/EquipmentStore";
import RefineProcessStore from "../../../Data/Store/RefineProcessStore";
import SimulateResultStore from "../../../Data/Store/SimulateResultStore";
import MaterialStore from "../../../Data/Store/MaterialStore";

interface IProps {
  equipmentStore: EquipmentStore
  materialStore: MaterialStore
  refineRangeStore: RefineRangeStore
  refineProcessStore: RefineProcessStore
  simulateResultStore: SimulateResultStore
}

@inject(
  RootStore.type.EQUIPMENT, 
  RootStore.type.MATERIAL,
  RootStore.type.REFINE_RANGE, 
  RootStore.type.REFINE_PROCESS,
  RootStore.type.SIMULATE_RESULT,
)
@observer
class SimulateReultViewModel extends Component<IProps> {
  static defaultProps = {} as IProps;

  getEquipmentCost(numSuccess: number) {
    const { numSamples } = this.props.simulateResultStore;
    const { price }  = this.props.equipmentStore;
    return Math.round(price * (numSamples / numSuccess));
  }

  getCosts() {
    const { results } = this.props.simulateResultStore;
    const materialStore = this.props.materialStore;
    const numBlessings = this.getNumBlessings();

    const costs = Array(results.length);
    const materialCost = Array(results.length);
    for (let i = 0; i < results.length; i++) {
      const { refineTimes, material, numSuccess } = results[i];
      materialCost[i] = 0;
      if (refineTimes !== 0) {
        if (numSuccess === 0) {
          costs[i] = Infinity;
          continue;
        }
        const materialPrice = materialStore.getPrice(material);
        const blessingPrice = materialStore.blessing;
        materialCost[i] += materialPrice * (refineTimes / numSuccess);
        materialCost[i] += blessingPrice * (numBlessings[i] / numSuccess);
        if (i > 0) {
          materialCost[i] += materialCost[i - 1] * results[i - 1].numSuccess / numSuccess;
        }
        materialCost[i] = Math.round(materialCost[i]);
        costs[i] = materialCost[i] + this.getEquipmentCost(numSuccess);
      }
    }
    return costs;
  }

  getNumBlessings = () => {
    const blessingDemand = [0, 0, 0, 0,  0,
                            0, 0, 1, 2,  3,
                            4, 4, 9, 15, 0,
                            0, 0, 0, 0,  0];

    const { category, level } = this.props.equipmentStore;
    const { enableBlessings } = this.props.refineProcessStore;
    const blessings = enableBlessings[category][level];
    const results = this.props.simulateResultStore.results;
    const numBlessings = Array(results.length);
    for (let i = 0; i < results.length; i++) {
      const { refineLevel, refineTimes } = results[i];
      if (blessings[refineLevel]) {
        numBlessings[i] = blessingDemand[refineLevel] * refineTimes;
      } else {
        numBlessings[i] = 0;
      }
    }
    return numBlessings;
  };

  render() {
    return (
      <SimulateReultView
        results={this.props.simulateResultStore.results}
        costs={this.getCosts()}
        numBlessings={this.getNumBlessings()}
      />
    );
  }
}

export default SimulateReultViewModel;
