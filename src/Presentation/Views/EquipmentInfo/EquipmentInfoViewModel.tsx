import { inject, observer } from "mobx-react";
import React from "react";
import { EquipmentCategory, EquipmentLevel } from "../../../Core/Core";
import RefinePricePropsStore from "../../../Data/Store/RefinePricePropsStore";
import RefineUserPropsStore from "../../../Data/Store/RefineUserPropsStore";
import EquipmentInfoController from "./EquipmentInfoController";
import EquipmentInfoView from "./EquipmentInfoView";

interface IProps {
  refineUserPropsStore: RefineUserPropsStore
  refinePricePropsStore: RefinePricePropsStore
}

interface EventProps {
  onEquipmentCategoryChange?: (value: NonNullable<unknown>) => void
  onEquipmentLevelChange?: (value: NonNullable<unknown>) => void
  onEquipmentPriceChange?: (value: number) => void
}

@inject('refineUserPropsStore', 'refinePricePropsStore')
@observer
class EquipmentInfoViewModel extends React.Component<IProps> {
  static defaultProps = {} as IProps;
  controller: EquipmentInfoController;
  eventProps: EventProps;
  
  constructor(props: IProps) {
    super(props);
    this.controller = new EquipmentInfoController(props);
    this.eventProps = {
      onEquipmentCategoryChange: (value: NonNullable<unknown>) =>
        this.controller.setCategory(value as EquipmentCategory),
      onEquipmentLevelChange: (value: NonNullable<unknown>) =>
        this.controller.setLevel(value as EquipmentLevel),
      onEquipmentPriceChange: (value: number) => 
        this.controller.setPrice(value),
    };
  }
  
  render() {
    return (      
      <EquipmentInfoView
        {...this.props.refineUserPropsStore}
        {...this.props.refinePricePropsStore}
        {...this.eventProps}
        equipmentCategoryData={this.controller.getEquipmentCategoryData()}
        equipmentLevelData={this.controller.getEquipmentLevelData()}
      />
    );    
  }
}

export default EquipmentInfoViewModel;