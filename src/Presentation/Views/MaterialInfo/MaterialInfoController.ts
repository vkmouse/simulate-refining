import RefinePricePropsStore from "../../../Data/Store/RefinePricePropsStore";
import RefineUserPropsStore from "../../../Data/Store/RefineUserPropsStore";
import { queryRefineMaterialDistinct } from "../../../Domain/API";

interface IProps {
  refineUserPropsStore: RefineUserPropsStore
  refinePricePropsStore: RefinePricePropsStore
}

class MaterialInfoController {
  props: IProps;

  constructor(props: IProps) {
    this.props = props;
  }

  getMaterials = () => {
    const output = queryRefineMaterialDistinct({
      ...this.props.refineUserPropsStore
    }).map(p => { 
      return { 
        label: p.chineseName,
        getPrice: (): number => this.getPrice(p.name),
        setPrice: (value: number) => this.setPrice(p.name, value),
      };
    });
    output.push({
      label: '鐵匠的祝福',
      getPrice: (): number => this.getPrice('blessingPrice'),
      setPrice: (value: number) => this.setPrice('blessingPrice', value),
    });
    return output;
  };

  private setPrice(name: string, value: number) {
    this.props.refinePricePropsStore.setPrice(name, value);
  }

  private getPrice(name: string) {
    return this.props.refinePricePropsStore.getPrice(name);
  }
}

export default MaterialInfoController;