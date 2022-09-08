import RefinePricePropsStore from "./Store/RefinePricePropsStore";
import RefineStatsPropsStore from "./Store/RefineStatsPropsStore";
import RefineUserPropsStore from "./Store/RefineUserPropsStore";

export default class RootStore {
  private refinePricePropsStore =  new RefinePricePropsStore();
  private refineStatsPropsStore = new RefineStatsPropsStore();
  private refineUserPropsStore = new RefineUserPropsStore();
}