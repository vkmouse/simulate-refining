import { Box, TableCell, TableCellProps, TableRow, ToggleButton, ToggleButtonGroup, ToggleButtonProps } from "@mui/material";
import React from "react";
import RefineMaterial from "../../Domain/Model/RefineMaterial";

export interface IMaterialGroupProps {
  value: RefineMaterial
  onChange?: (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: RefineMaterial | null
  ) => void;
}

export interface IBlessingProps {
  allowBlessing: boolean
  selected: boolean
  onChange: () => void
}


interface IProps {
  blessingProps: IBlessingProps
  materialProps: RefineMaterial[]
  materialGroupProps: IMaterialGroupProps
  refineLevel: number
  successRate: number
}

const tableCellProps: TableCellProps = {
  padding: "none",
  align: "center",
  width: "10%",
  sx: {minWidth: 45},
};

const toggleButtonProps: ToggleButtonProps = {
  size: 'small',
  value: '',
  sx: {
    fontSize: 10,
    lineHeight: 1.2,
    padding: 0.5,
    minWidth: 48,
    width: 1/3,
  },
};

function Material(props: { materialProps: RefineMaterial[],
                           materialGroupProps: IMaterialGroupProps }) {
  const { materialProps, materialGroupProps } = props;
  return (
    <ToggleButtonGroup 
      exclusive 
      color="primary"
      sx={{width: "75%"}} 
      value={materialGroupProps.value} 
      onChange={materialGroupProps.onChange}
    >
      {materialProps.map(p => 
      <ToggleButton {...toggleButtonProps} value={p} key={p.chineseName}>{p.chineseName}</ToggleButton>)}
    </ToggleButtonGroup>
  );
}

function Blessing(props: IBlessingProps) {
  const { allowBlessing, selected, onChange } = props;
  return (
    <Box sx={{display: "flex", justifyContent: "right", width: "25%"}}>
      {allowBlessing ?
        <ToggleButton 
          {...toggleButtonProps}
          sx={{...toggleButtonProps.sx, width: '80%' }} 
          selected={selected}
          onChange={onChange}
          color='primary'
        >
          鐵匠的祝福
        </ToggleButton> : null
      }
    </Box>
  );
}

export function RefineProcessTableHead() {
  return (
    <TableRow>
      <TableCell {...tableCellProps}>精煉值</TableCell>
      <TableCell {...tableCellProps} width={'80%'}>材料</TableCell>
      <TableCell {...tableCellProps}>成功率</TableCell>
    </TableRow>
  );
}

export function RefineProcessTableBody(props: IProps) {
  const { 
    blessingProps, 
    materialProps, 
    materialGroupProps, 
    refineLevel,
    successRate,
  } = props;
  const first = `${refineLevel}➔${refineLevel + 1}`;
  const last = `${successRate}%`;
  return (
    <TableRow>
      <TableCell {...tableCellProps}>{first}</TableCell>
      <TableCell {...tableCellProps}>
        <Box sx={{display: "flex"}}>
          <Material materialProps={materialProps} materialGroupProps={materialGroupProps}/>
          <Blessing {...blessingProps}/>
        </Box>
      </TableCell>
      <TableCell {...tableCellProps}>{last}</TableCell>
    </TableRow>
  );
}
