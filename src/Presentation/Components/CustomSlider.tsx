import React from "react";
import { Box, Slider, styled } from "@mui/material";

interface IProps {
  onChange?: (start: number, end: number) => void
  value?: number[]
  min?: number
  max?: number
}

const _CustomSlider = styled(Slider)(() => ({
  height: 7,
  color: "#3B5998",
  "& .MuiSlider-thumb": {
    height: 28,
    width: 28,
    // backgroundColor: "#3B5998",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)"
    }
  },
  "& .MuiSlider-valueLabel": {
    top: 30,
    backgroundColor: "unset",
    "& *": {
      background: "transparent",
      color: "#fff"
    }
  },
}));

function CustomSlider(props: IProps) {
  const { onChange, value, min, max } = props;

  const handleChange = (
    event: Event,
    newValue: number | number[]) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (onChange !== undefined) {
      onChange(newValue[0], newValue[1]);
    }
  };
  
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
      <Box sx={{ width: '97%' }}>
        <_CustomSlider
          valueLabelDisplay="on"
          getAriaLabel={() => "Minimum distance"}
          value={value}
          onChange={handleChange}
          disableSwap
          min={min}
          max={max}
          marks={true}
        />
      </Box>
    </Box>
  );
}

export default CustomSlider;