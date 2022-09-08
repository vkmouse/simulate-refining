import { inject, observer } from "mobx-react";
import React from "react";
import RefineUserPropsStore from "../../../Data/Store/RefineUserPropsStore";
import RefineRangeController from "./RefineRangeController";
import RefineRangeView from "./RefineRangeView";

interface IProps {
  refineUserPropsStore: RefineUserPropsStore
}

interface EventProps {
  onRangeChange?: (start: number, end: number) => void
}

@inject('refineUserPropsStore')
@observer
class RefineRangeViewModel extends React.Component<IProps> {
  static defaultProps = {} as IProps;
  controller: RefineRangeController;
  eventProps: EventProps;
  
  constructor(props: IProps) {
    super(props);
    this.controller = new RefineRangeController(props);
    this.eventProps = {
      onRangeChange: (start: number, end: number) => 
        this.controller.setRange(start, end)
    };
  }
  
  render() {
    return (
      <RefineRangeView 
        {...this.props.refineUserPropsStore}
        {...this.eventProps}
        min={this.controller.getMin()}
        max={this.controller.getMax()}
      />
    );
  }
}

export default RefineRangeViewModel;