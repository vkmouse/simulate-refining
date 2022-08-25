import React, { Component } from "react";
import { inject, observer } from 'mobx-react';
import RootStore from "../../../Data/RootStore";
import RefineRangeView from "./RefineRangeView";
import RefineRangeStore from "../../../Data/Store/RefineRangeStore";

interface IProps {
  refineRangeStore: RefineRangeStore;
}

@inject(RootStore.type.REFINE_RANGE)
@observer
class RefineRangeViewModel extends Component<IProps> {
  static defaultProps = {} as IProps;
  private store: RefineRangeStore;

  constructor(props: IProps) {
    super(props);
    this.store = props.refineRangeStore;
  }
  
  handleChange = (
    event: Event,
    newValue: number[],
    activeThumb: number
  ): void => {
    const minDistance = 1;
    if (activeThumb === 0) {
      newValue[0] = Math.min(newValue[0], this.store.end - minDistance);
      newValue[1] = this.store.end;
    } else {
      newValue[0] = this.store.start;
      newValue[1] = Math.max(newValue[1], this.store.start + minDistance);
    }

    if (newValue[0] !== this.store.start || newValue[1] !== this.store.end) {
      this.store.setRange(newValue[0], newValue[1]);
    }
  };

  render() {
    return (
      <RefineRangeView
        handleChange={this.handleChange}
        value={[this.store.start, this.store.end]}
        min={0}
        max={20}
      />
    );
  }
}

export default RefineRangeViewModel;
