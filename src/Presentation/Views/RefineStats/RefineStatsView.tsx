import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import React from "react";
import { RefineStatsProps } from "../../../Core/Simulator";

interface IProps {
  stats: RefineStatsProps[]
}

class RefineStatsView extends React.Component<IProps> {
  private addComma(value: number) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  private getRefineLevel(props: RefineStatsProps) {
    return `${props.refineLevel}➔${props.refineLevel + 1}`;
  }

  private getRefineTimes(props: RefineStatsProps) {
    return `${this.addComma(props.refineTimes)}`;
  }

  private getBlessingQuantity(props: RefineStatsProps) {
    return `${this.addComma(props.numBlessings)}`;
  }

  private getSuccessQuantity(props: RefineStatsProps) {
    return `${this.addComma(props.numSuccess)}`;
  }

  private getExpectedPrice(props: RefineStatsProps) {
    return `${this.addComma(Math.round(props.cost))}`;
  }

  render() {
    const { stats } = this.props;
    return (
      <div className='block'>
        <div className="title">模擬結果</div>
        <div className='input-group'>
          <TableContainer>
            <Table sx={{minWidth: 300 }} size='small'>
              <TableHead>
                <TableRow>
                  <TableCell>精煉值</TableCell>
                  <TableCell>精煉次數</TableCell>
                  <TableCell>祝福數量</TableCell>
                  <TableCell>成功數量</TableCell>
                  <TableCell>價格期望值</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {stats.map(p =>
                  <TableRow key={p.refineLevel}>
                    <TableCell>{this.getRefineLevel(p)}</TableCell>
                    <TableCell>{this.getRefineTimes(p)}</TableCell>
                    <TableCell>{this.getBlessingQuantity(p)}</TableCell>
                    <TableCell>{this.getSuccessQuantity(p)}</TableCell>
                    <TableCell>{this.getExpectedPrice(p)}</TableCell>
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

export default RefineStatsView;