import { TableContainer, Table, TableHead, TableBody, TableCell, TableRow, TableCellProps } from "@mui/material";
import React, { Component } from "react";
import SimulateResult from "../../../Domain/Model/SimulateResult";

interface IProps {
  numBlessings: number[]
  costs: number[]
  results: SimulateResult[]
}

const tableCellProps: TableCellProps = {
  padding: "none",
  align: "center",
  width: "10%",
  sx: { minWidth: 45, paddingTop: 0.5, paddingBottom: 0.5},
};

class SimulateReultView extends Component<IProps> {
  render() {
    const { numBlessings, costs, results } = this.props;
    const indices = Array(results.length).fill(0).map((_, index) => index);
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
                {indices.map(i => {
                  const first = `${results[i].refineLevel}➔${results[i].refineLevel + 1}`;
                  return (
                    <TableRow key={results[i].refineLevel}>
                      <TableCell {...tableCellProps}>{first}</TableCell>
                      <TableCell {...tableCellProps} width="22%">{results[i].refineTimes}</TableCell>
                      <TableCell {...tableCellProps} width="22%">{numBlessings[i]}</TableCell>
                      <TableCell {...tableCellProps} width="23%">{results[i].numSuccess}</TableCell>
                      <TableCell {...tableCellProps} width="23%">{costs[i]}</TableCell>
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