import React from "react";
import { Box, FormControlLabel, Switch, Typography } from '@mui/material';

interface IProps {
  label?: string
  checked?: boolean
  disabled?: boolean
  onChange?: (value: boolean) => void
}

function CustomToggleButton(props: IProps) {
  const { label, checked, disabled, onChange } = props;

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>, 
    checked: boolean): void => {
    if (onChange !== undefined) {
      onChange(checked);
    }
  };

  return (
    <Box sx={{ marginLeft: 0.5, marginRight: 0.5, width: "31%" }}>
    <FormControlLabel
      control={
        <Switch 
          onChange={handleChange}
          checked={checked}
          disabled={disabled}
        />
      }
      label={<Typography sx={{ fontSize: 14 }}>{label}</Typography>}
    />
  </Box>
  );
}

export default CustomToggleButton;