import RefinePricePropsStore from "../../../Data/Store/RefinePricePropsStore";
import RefineStatsPropsStore from "../../../Data/Store/RefineStatsPropsStore";
import RefineUserPropsStore from "../../../Data/Store/RefineUserPropsStore";
import { calculateStats as calculateStatsAPI } from "../../../Domain/API";

interface IProps {
  refineUserPropsStore: RefineUserPropsStore
  refinePricePropsStore: RefinePricePropsStore
  refineStatsPropsStore: RefineStatsPropsStore
}

class RefineSimulationController {
  props: IProps;

  constructor(props: IProps) {
    this.props = props;
  }

  setNumSamples(value: number) {
    this.props.refineUserPropsStore.setNumSamples(value);
  }

  calculateStats() {
    const stats = calculateStatsAPI(this.props.refineUserPropsStore, this.props.refinePricePropsStore);
    this.props.refineStatsPropsStore.setStats(stats);
  }
}

export default RefineSimulationController;