import { inject, observer } from "mobx-react";
import React from "react";
import RefinePricePropsStore from "../../../Data/Store/RefinePricePropsStore";
import RefineUserPropsStore from "../../../Data/Store/RefineUserPropsStore";
import RefineInfoController from "./RefineInfoController";
import RefineInfoView from "./RefineInfoView";

interface IProps {
  refineUserPropsStore: RefineUserPropsStore
  refinePricePropsStore: RefinePricePropsStore
}

interface EventProps {
  onRefinePriceBeforeTenChange?: (value: number) => void
  onRefinePriceAfterTenChange?: (value: number) => void
  onWeaponRefineEnabledChange?: (value: boolean) => void
}

@inject('refineUserPropsStore', 'refinePricePropsStore')
@observer
class RefineInfoViewModel extends React.Component<IProps> {
  static defaultProps = {} as IProps;
  controller: RefineInfoController;
  eventProps: EventProps;
  
  constructor(props: IProps) {
    super(props);
    this.controller = new RefineInfoController(props);
    this.eventProps = {
      onRefinePriceBeforeTenChange: (value: number) => 
        this.controller.setRefinePriceBeforeTen(value),
      onRefinePriceAfterTenChange: (value: number) => 
        this.controller.setRefinePriceAfterTen(value),
      onWeaponRefineEnabledChange: (value: boolean) =>
        this.controller.setWeaponRefineEnabled(value)
    };
  }
  
  render() {
    return (
      <RefineInfoView 
        {...this.props.refineUserPropsStore} 
        {...this.props.refinePricePropsStore} 
        {...this.eventProps}
        weaponRefineEnabledAvailable={this.controller.getWeaponRefineEnabledAvailable()}
      />
    );
  }
}

export default RefineInfoViewModel;