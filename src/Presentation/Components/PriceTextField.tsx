import React, { useState } from "react";
import { TextField } from "@mui/material";
import { ChangeEvent } from "react";

interface IProps {
  label: string
  value: string
  onChange: (e: number) => void
}

function PriceTextField(props: IProps) {
  const { label, value, onChange } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let newPrice = parseInt(e.target.value.replace(/\D/g, ''));
    if (isNaN(newPrice)) { 
      newPrice = 0; 
    }
    if (newPrice > 999999999999) {
      newPrice = 999999999999;
    }
    onChange(newPrice);
  };

  return (
    <TextField
      label={label}
      type="number"
      size='small'
      sx={{ marginLeft: 0.5, marginRight: 0.5, width: "31%" }}
      value={value}
      onChange={handleChange}
      InputLabelProps={{
        shrink: true
      }}
    />
  );
}

export default PriceTextField;
