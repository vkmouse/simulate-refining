import { TableContainer, Table, TableHead, TableBody, TableCell, TableRow, TableCellProps } from "@mui/material";
import React, { Component } from "react";
import { SimulateResultStat } from "../../../Domain/Model/SimulateResultStat";

interface IProps {
  // numBlessings: number[]
  // costs: number[]
  // results: SimulateResult[]
  results: SimulateResultStat[]
}

const tableCellProps: TableCellProps = {
  padding: "none",
  align: "center",
  width: "10%",
  sx: { minWidth: 45, paddingTop: 0.5, paddingBottom: 0.5},
};

class SimulateReultView extends Component<IProps> {
  render() {
    return (
      <div className='block'>
        <div className="title">模擬結果</div>
        <div className='input-group'>
          <TableContainer>
            <Table sx={{minWidth: 300 }} size='small'>
              <TableHead>
                <TableRow>
                  <TableCell {...tableCellProps}>精煉值</TableCell>
                  <TableCell {...tableCellProps} width="22%">精煉次數</TableCell>
                  <TableCell {...tableCellProps} width="22%">祝福數量</TableCell>
                  <TableCell {...tableCellProps} width="23%">成功數量</TableCell>
                  <TableCell {...tableCellProps} width="23%">價格期望值</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.results.map(res => {
                  const first = `${res.refineLevel}➔${res.refineLevel + 1}`;
                  return (
                    <TableRow key={res.refineLevel}>
                      <TableCell {...tableCellProps}>{first}</TableCell>
                      <TableCell {...tableCellProps} width="22%">{res.refineTimes}</TableCell>
                      <TableCell {...tableCellProps} width="22%">{res.numBlessings}</TableCell>
                      <TableCell {...tableCellProps} width="23%">{res.numSuccess}</TableCell>
                      <TableCell {...tableCellProps} width="23%">{res.cost}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    );
  }
}

export default SimulateReultView;