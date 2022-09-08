import { inject, observer } from "mobx-react";
import React from "react";
import { RefineMaterial } from "../../../Core/Refinement";
import RefineUserPropsStore from "../../../Data/Store/RefineUserPropsStore";
import RefineProcessController from "./RefineProcessController";
import RefineProcessView from "./RefineProcessView";

interface IProps {
  refineUserPropsStore: RefineUserPropsStore
}

@inject('refineUserPropsStore')
@observer
class RefineProcessViewModel extends React.Component<IProps> {
  static defaultProps = {} as IProps;
  controller: RefineProcessController;
  
  constructor(props: IProps) {
    super(props);
    this.controller = new RefineProcessController(props);
  }

  getData() {
    return this.controller.getMaterials().map(p => {
      return {
        blessing: p.getBlessingEnabled(),
        blessingAvialable: p.getBlessingAvialable(),
        blessingVisible: p.blessingVisible,
        refineLevel: p.refineLevel,
        successRate: p.getSelectedProbability(),
        selectableMaterials: p.selectableMaterials,
        selectedMaterial: p.getSelectedMaterial(),
        onMaterialChange: (value: NonNullable<unknown>) =>
          p.setSelectedMaterial(value as RefineMaterial),
        onBlessingChange: p.setBlesssingEnabled
      };
    });
  }
  
  render() {
    return (
      <RefineProcessView
        data={this.getData()}
      />
    );
  }
}

export default RefineProcessViewModel;