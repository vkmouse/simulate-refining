import { inject, observer } from "mobx-react";
import React, { ChangeEvent, Component } from "react";
import RootStore from "../../../Data/RootStore";
import EquipmentStore from "../../../Data/Store/EquipmentStore";
import RefineProcessStore from "../../../Data/Store/RefineProcessStore";
import RefineRangeStore from "../../../Data/Store/RefineRangeStore";
import SimulateResultStore from "../../../Data/Store/SimulateResultStore";
import RefineUser from "../../../Domain/Refiner/RefineUser";
import SimulateView from "./SimulateView";

interface IProps {
  equipmentStore: EquipmentStore
  refineRangeStore: RefineRangeStore
  refineProcessStore: RefineProcessStore
  simulateResultStore: SimulateResultStore
}

@inject(
  RootStore.type.EQUIPMENT, 
  RootStore.type.REFINE_RANGE, 
  RootStore.type.REFINE_PROCESS,
  RootStore.type.SIMULATE_RESULT,
)
@observer
class SimulateViewModel extends Component<IProps> {
  static defaultProps = {} as IProps;

  constructor(props: IProps) {
    super(props);
  }

  handleNumSamplesChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = parseInt(e.target.value.replace(/\D/g, ''));
    if (isNaN(value)) { 
      value = 0;
    }
    value = Math.min(value, 999999);
    this.props.simulateResultStore.setNumSamples(value);
  };

  startSimulate = (): void => {
    const { start, end } = this.props.refineRangeStore;
    const { category, level } = this.props.equipmentStore;
    const { selectedMaterials, enableBlessings } = this.props.refineProcessStore;
    const materials = selectedMaterials[category][level];
    const blessings = enableBlessings[category][level];
    const user = new RefineUser(category, level, materials, blessings, start, end);
    const results = user.refine(this.props.simulateResultStore.numSamples);
    this.props.simulateResultStore.setResults(results.filter((res) => res.refineTimes != 0));
  };

  render() {
    return (
      <SimulateView 
        onClick={this.startSimulate} 
        onChange={this.handleNumSamplesChange}
        numSamples={this.props.simulateResultStore.numSamples}
      />
    );
  }
}

export default SimulateViewModel;