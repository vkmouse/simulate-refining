import React, { Component } from "react";
import { TableContainer, TableHead, Table, TableBody } from '@mui/material';
import { IMaterialGroupProps, RefineProcessTableHead, RefineProcessTableBody, IBlessingProps } from "../../Components/RefineProcessTable";
import RefineMaterial from "../../../Domain/Model/RefineMaterial";

interface IProps {
  blessingProps: IBlessingProps[]
  materialProps: RefineMaterial[][]
  materialGroupProps: IMaterialGroupProps[]
  successRate: number[]
  start: number
  end: number
}

class RefineProcessView extends Component<IProps> {
  render() {
    const { 
      materialProps,
      materialGroupProps, 
      successRate, 
      blessingProps,
      start,
      end,
    } = this.props;
    const indices = Array(end - start).fill(0).map((_, index) => index);
    return (
      <div className='block'>
        <div className="title">精煉過程</div>
        <div className='input-group'>
          <TableContainer>
            <Table sx={{minWidth: 300 }} size='small'>
              <TableHead>
                <RefineProcessTableHead />
              </TableHead>
              <TableBody>
                {indices.map(i => 
                  <RefineProcessTableBody
                    refineLevel={i + start}
                    successRate={successRate[i]}
                    materialProps={materialProps[i]}
                    materialGroupProps={materialGroupProps[i]}
                    blessingProps={blessingProps[i]}
                    key={i}
                  />
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
