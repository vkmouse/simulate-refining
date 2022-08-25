import React from "react";
import { TextField } from "@mui/material";
import { ChangeEvent } from "react";

interface IProps {
  label: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function PriceTextField(props: IProps) {
  const { label, value, onChange } = props;
  return (
    <TextField
      label={label}
      type="number"
      size='small'
      sx={{marginLeft: 0.5, marginRight: 0.5}}
      value={value}
      onChange={onChange}
      InputLabelProps={{
        shrink: true
      }}
    />
  );
}

export default PriceTextField;
