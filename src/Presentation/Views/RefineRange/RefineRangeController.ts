import { autorun } from "mobx";
import RefineUserPropsStore from "../../../Data/Store/RefineUserPropsStore";

interface IProps {
  refineUserPropsStore: RefineUserPropsStore
}

class RefineRangeController {
  props: IProps;

  constructor(props: IProps) {
    this.props = props;
    autorun(() => {
      const { start, end } = this.props.refineUserPropsStore;
      this.setRange(start, end);
    });
  }

  setRange(start: number, end: number) {
    if (start > end) {
      [start, end] = [end, start];
    }

    end = Math.min(end, this.getMax());
    start = Math.max(start, this.getMin());
    start = Math.min(start, this.getMax());

    const minDistance = 1;
    if (start == this.props.refineUserPropsStore.start) {
      end = Math.max(start + minDistance, end);
    } else if (end == this.props.refineUserPropsStore.end) {
      start = Math.min(start, end - minDistance);
    }

    if (start == end) {
      start = start - minDistance;
    }

    this.props.refineUserPropsStore.setRange(start, end);
  }

  getMin() {
    return 0;
  }

  getMax() {
    const { refineUserPropsStore } = this.props;
    if (refineUserPropsStore.weaponRefineEnabled) {
      return 10;
    } else {
      return 20;
    }
  }
}

export default RefineRangeController;