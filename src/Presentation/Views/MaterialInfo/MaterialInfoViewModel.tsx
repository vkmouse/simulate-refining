import { inject, observer } from "mobx-react";
import React from "react";
import RefinePricePropsStore from "../../../Data/Store/RefinePricePropsStore";
import RefineUserPropsStore from "../../../Data/Store/RefineUserPropsStore";
import MaterialInfoController from "./MaterialInfoController";
import MaterialInfoView from "./MaterialInfoView";

interface IProps {
  refineUserPropsStore: RefineUserPropsStore
  refinePricePropsStore: RefinePricePropsStore
}

@inject('refineUserPropsStore', 'refinePricePropsStore')
@observer
class MaterialInfoViewModel extends React.Component<IProps> {
  static defaultProps = {} as IProps;
  controller: MaterialInfoController;
  
  constructor(props: IProps) {
    super(props);
    this.controller = new MaterialInfoController(props);
  }

  getData() {
    return this.controller.getMaterials().map(p => {
      return { 
        label: p.label, 
        value: p.getPrice(),
        onChange: p.setPrice,
        maxValue: 999999999999
      };
    });
  }
  
  render() {
    return <MaterialInfoView data={this.getData()} />;
  }
}

export default MaterialInfoViewModel;