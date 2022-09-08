import React from "react";
import Button from "../../Components/CustomButton";
import TextField from "../../Components/NumberTextField";

interface IProps {
  numSamples: number
  onNumSamplesChange?: (value: number) => void
  onStartSimulationClick?: () => void
}

class RefineSimulationView extends React.Component<IProps> {
  render() {
    const { numSamples, onNumSamplesChange, onStartSimulationClick } = this.props;
    return (
      <div className='block'>
        <div className="title">模擬精煉</div>
        <div className='input-group'>
          <TextField 
            label='樣本數量'
            value={numSamples}
            maxValue={999999}
            onChange={onNumSamplesChange}
          />
          <Button 
            label='開始模擬'
            onClick={onStartSimulationClick}
          />
        </div>
      </div>
    );
  }
}

export default RefineSimulationView;