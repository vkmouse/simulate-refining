import { ProbabilityCategory } from "../../../../Core/Core";
import { RefineMaterial } from "../../../../Core/Refinement";
import RefineUserPropsStore from "../../../../Data/Store/RefineUserPropsStore";
import { queryRefineMaterial } from "../../../../Domain/API";
import ComponentData from "../../../Components/ComponentData";

interface IProps {
  refineUserPropsStore: RefineUserPropsStore
}

class RefineProcessSelectableMaterialController {
  props: IProps;

  constructor(props: IProps) {
    this.props = props;
  }

  getSelectableMaterials(refineLevel: number): ComponentData[] {
    const materials = queryRefineMaterial({...this.props.refineUserPropsStore})[refineLevel];
    return materials.map(p => {
      return {
        name: p.chineseName,
        value: p,
        disabled: !this.getMaterialAvialable(p)
      };
    });
  }

  private getMaterialAvialable(material: RefineMaterial) {
    return (
      !this.props.refineUserPropsStore.weaponRefineEnabled ||
      material.probabilityCategory === ProbabilityCategory.Normal
    );
  }
}

export default RefineProcessSelectableMaterialController;
