import React, { ChangeEvent, Component } from "react";
import { Button, TextField } from "@mui/material";

interface IProps {
  numSamples: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onClick: () => void
}

class SimulateView extends Component<IProps> {
  render() {
    const { numSamples, onChange, onClick } = this.props;
    return (
      <div className='block'>
        <div className="title">模擬精煉</div>
        <div className='input-group'>

          <TextField
            label={'樣本數量'}
            type="number"
            size='small'
            value={numSamples}
            onChange={onChange}
            InputLabelProps={{
              shrink: true
            }}
          />
          <Button sx={{ backgroundColor: "#3B5998" }} variant="contained" onClick={onClick}>開始模擬</Button>
 
        </div>
      </div>
    );
  }
}

export default SimulateView;