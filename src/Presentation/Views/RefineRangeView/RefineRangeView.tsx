import React, { Component } from "react";
import RefineRangeSlider from "../../Components/RefineRangeSlider";

interface IProps {
  handleChange: (
    event: Event,
    newValue: number[],
    activeThumb: number
  ) => void
  value: number[]
  min?: number
  max?: number
}

class RefineRangeView extends Component<IProps> {
  render() {
    const { handleChange, value, min, max } = this.props;
    return (
      <div className='block'>
        <div className="title">精煉範圍</div>
        <div className='input-group'>
          <RefineRangeSlider 
            onChange={handleChange}
            value={value}
            min={min}
            max={max}
          />
        </div>
      </div>
    );
  }
}

export default RefineRangeView;