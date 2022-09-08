import { Box, Table, TableBody, TableCell, TableCellProps, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react";
import ComponentData from "../../Components/ComponentData";
import SwitchButton from "../../Components/CustomSwitchButton";
import ToggleButton from "../../Components/CustomToggleButton";

interface DataProps {
  blessing: boolean
  blessingAvialable: boolean
  blessingVisible: boolean
  refineLevel: number
  successRate: number
  selectableMaterials: ComponentData[]
  selectedMaterial: NonNullable<unknown>
  onMaterialChange?: (value: NonNullable<unknown>) => void
  onBlessingChange?: (value: boolean) => void
}

interface IProps {
  data: DataProps[]
}

class RefineProcessView extends React.Component<IProps> {
  private getRefineLevel(props: DataProps) {
    return `${props.refineLevel}➔${props.refineLevel + 1}`;
  }

  private getSuccessRate(props: DataProps) {
    return `${Math.round(props.successRate * 100)}%`;
  }

  private getMaterial(props: DataProps) {
    const sx = {
      fontSize: 10,
      lineHeight: 1.2,
      padding: 0.5,
      minWidth: 48,
    };
    return (
      <Box sx={{ display: "flex" }}>
        <ToggleButton 
          data={props.selectableMaterials}
          value={props.selectedMaterial}
          onChange={props.onMaterialChange}
          toggleButtonProps={{
            sx: { ...sx, width: 1/3 },
          }}
          toggleButtonGroupProps={{ sx: { width: '75%' }}}
        />
        <SwitchButton 
          label='鐵匠的祝福'
          visible={props.blessingVisible}
          selected={props.blessing}
          onChange={props.onBlessingChange}
          disabled={!props.blessingAvialable}
          boxProps={{ sx: { display: "flex", justifyContent: "right", width: "25%" }}}
          buttonProps={{ sx: { ...sx, width: '80%' }}}
        />
      </Box>
    );
  }

  render() {
    const { data } = this.props;
    const tableCellProps: TableCellProps = {
      padding: "none",
      align: "center",
      sx: { minWidth: 45 },
    };
    return (
      <div className='block'>
        <div className="title">精煉過程</div>
        <div className='input-group'>
          <TableContainer>
            <Table sx={{minWidth: 300 }} size='small'>
              <TableHead>
                <TableRow>
                  <TableCell {...tableCellProps} width={'10%'}>精煉值</TableCell>
                  <TableCell {...tableCellProps} width={'80%'}>材料</TableCell>
                  <TableCell {...tableCellProps} width={'10%'}>成功率</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map(p =>
                  <TableRow key={p.refineLevel}>
                    <TableCell {...tableCellProps} width={'10%'}>{this.getRefineLevel(p)}</TableCell>
                    <TableCell {...tableCellProps} width={'80%'}>{this.getMaterial(p)}</TableCell>
                    <TableCell {...tableCellProps} width={'10%'}>{this.getSuccessRate(p)}</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    );    
  }
}

export default RefineProcessView;