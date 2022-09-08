import { RefineMaterial } from "../../../Core/Refinement";
import RefineUserPropsStore from "../../../Data/Store/RefineUserPropsStore";
import RefineProcessBlessingEnabledController from "./SubController/RefineProcessBlessingEnabledController";
import RefineProcessSelectableMaterialController from "./SubController/RefineProcessSelectableMaterialController";
import RefineProcessSelectedMaterialController from "./SubController/RefineProcessSelectedMaterialController";

interface IProps {
  refineUserPropsStore: RefineUserPropsStore
}

class RefineProcessController {
  props: IProps;
  selectedController: RefineProcessSelectedMaterialController;
  selectableController: RefineProcessSelectableMaterialController;
  blessingController: RefineProcessBlessingEnabledController;
  
  constructor(props: IProps) {
    this.props = props;
    this.selectedController = new RefineProcessSelectedMaterialController(props);
    this.selectableController = new RefineProcessSelectableMaterialController(props);
    this.blessingController = new RefineProcessBlessingEnabledController(props);
  }

  getMaterials() {
    const { start, end } = this.props.refineUserPropsStore;
    const output = [];
    for(let i = start; i < end; i++) {
      output.push({
        refineLevel: i,
        blessingVisible: this.blessingController.getVisiable(i),
        selectableMaterials: this.selectableController.getSelectableMaterials(i),
        getBlessingAvialable: this.blessingController.getAvialable,
        getBlessingEnabled: (): boolean =>
          this.blessingController.getBlessingEnabled(i),
        setBlesssingEnabled: (value: boolean) =>  
          this.blessingController.setBlessingEnabled(i, value),
        getSelectedProbability: (): number => 
          this.selectedController.getSelectedMaterialProbability(i),
        getSelectedMaterial: (): RefineMaterial => 
          this.selectedController.getSelectedMaterial(i),
        setSelectedMaterial: (value: RefineMaterial) => 
          this.selectedController.setSelectedMaterial(i, value),
      });
    }
    return output;
  }
}

export default RefineProcessController;
