import { inject, observer } from "mobx-react";
import React from "react";
import RefinePricePropsStore from "../../../Data/Store/RefinePricePropsStore";
import RefineStatsPropsStore from "../../../Data/Store/RefineStatsPropsStore";
import RefineUserPropsStore from "../../../Data/Store/RefineUserPropsStore";
import RefineSimulationController from "./RefineSimulationController";
import RefineSimulationView from "./RefineSimulationView";

interface IProps {
  refineUserPropsStore: RefineUserPropsStore
  refinePricePropsStore: RefinePricePropsStore
  refineStatsPropsStore: RefineStatsPropsStore
}

interface EventProps {
  onNumSamplesChange?: (value: number) => void
  onStartSimulationClick?: () => void
}

@inject('refineUserPropsStore', 'refinePricePropsStore', 'refineStatsPropsStore')
@observer
class RefineSimulationViewModel extends React.Component<IProps> {
  static defaultProps = {} as IProps;
  controller: RefineSimulationController;
  eventProps: EventProps;

  constructor(props: IProps) {
    super(props);
    this.controller = new RefineSimulationController(props);
    this.eventProps = {
      onNumSamplesChange: (value: number) => 
        this.controller.setNumSamples(value),
      onStartSimulationClick: () => 
        this.controller.calculateStats()
    };
  }

  render() {
    return (
      <RefineSimulationView
        {...this.props.refineUserPropsStore}
        {...this.eventProps}
      />
    );
  }
}

export default RefineSimulationViewModel;