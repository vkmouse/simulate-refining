import React, { Component } from "react";
import { inject, observer } from 'mobx-react';
import RootStore from "../../../Data/RootStore";
import SimulateReultView from "./SimulateResultView";
import RefineRangeStore from "../../../Data/Store/RefineRangeStore";
import EquipmentStore from "../../../Data/Store/EquipmentStore";
import RefineProcessStore from "../../../Data/Store/RefineProcessStore";
import SimulateResultStore from "../../../Data/Store/SimulateResultStore";
import MaterialStore from "../../../Data/Store/MaterialStore";
import { SimulateResultStatCalculator } from "../../../Domain/Model/SimulateResultStat";

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

  getResults() {
    const { results } = this.props.simulateResultStore;
    const materialStore = this.props.materialStore;
    const { category, level } = this.props.equipmentStore;
    const enableBlessings = this.props.refineProcessStore.enableBlessings[category][level];
    const { numSamples } = this.props.simulateResultStore;
    const equipmentPrice  = this.props.equipmentStore.price;
    const calculator = new SimulateResultStatCalculator({
      results, 
      materialStore, 
      enableBlessings, 
      numSamples,
      equipmentPrice});
    return calculator.calculate();
  }

  render() {
    return (
      <SimulateReultView
        results={this.getResults()}
      />
    );
  }
}

export default SimulateReultViewModel;
