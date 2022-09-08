import { inject, observer } from "mobx-react";
import React from "react";
import RefineStatsPropsStore from "../../../Data/Store/RefineStatsPropsStore";
import RefineStatsView from "./RefineStatsView";

interface IProps {
  refineStatsPropsStore: RefineStatsPropsStore
}

@inject('refineStatsPropsStore')
@observer
class RefineStatsViewModel extends React.Component<IProps> {
  static defaultProps = {} as IProps;
  render() {
    return <RefineStatsView {...this.props.refineStatsPropsStore} />;
  }
}

export default RefineStatsViewModel;