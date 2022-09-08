import React from "react";
import CustomSlider from "../../Components/CustomSlider";

interface IProps {
  start: number
  end: number
  min: number
  max: number
  onRangeChange?: (start: number, end: number) => void
}

class RefineRangeView extends React.Component<IProps> {
  render() {
    const { start, end, min, max, onRangeChange } = this.props;
    return (
      <div className='block'>
        <div className="title">精煉範圍</div>
        <div className='input-group'>
          <CustomSlider 
            value={[start, end]}
            min={min}
            max={max}
            onChange={onRangeChange}
          />
        </div>
      </div>
    );    
  }
}

export default RefineRangeView;