import React from "react";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { EquipmentLevel } from "../../Core/Core";

interface IProps {
  data: { value: EquipmentLevel, name: string }[]
  value: EquipmentLevel
  onChange: (e: SelectChangeEvent<EquipmentLevel>) => void
}

function EquipmentLevelCombobox(props: IProps) {
  const { data, value, onChange } = props;
  return (
    <FormControl sx={{ m: 1, minWidth: 120, margin: 0, marginLeft: 1 }} size="small">
      <InputLabel>裝備等級</InputLabel>
        <Select
          value={value}
          label='裝備等級'
          onChange={onChange}
          inputProps={{ "data-testid": "select-input" }}
          data-testid="select-button"
        >
        {data.map(x => <MenuItem key={x.value.toString()} value={x.value}>{x.name}</MenuItem>)}
      </Select>
    </FormControl>
  );
}

export default EquipmentLevelCombobox;
