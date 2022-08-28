import { Box, FormControlLabel, Switch, SxProps, Theme, Typography } from "@mui/material";
import React, { Component } from "react";
import PriceTextField from "../../Components/PriceTextField";

interface IProps {
  disabledWeaponRefine: boolean
  refinePriceBeforeTen : number
  refinePriceAfterTen : number
  weaponRefineChecked: boolean
  onRefinePriceBeforeTen: (value: number) => void
  onRefinePriceAfterTen: (value: number) => void
  onWeaponRefineChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void
}

class RefineView extends Component<IProps> {
  render() {
    const sx: SxProps<Theme> = { marginLeft: 0.5, marginRight: 0.5, width: "31%" };
    const { 
      disabledWeaponRefine,
      refinePriceBeforeTen,
      refinePriceAfterTen,
      weaponRefineChecked,
      onRefinePriceBeforeTen,
      onRefinePriceAfterTen,
      onWeaponRefineChange,
    } = this.props;
    return (
      <div className='block'>
        <div className="title">精煉資訊</div>
          <div className='input-group'>
          <PriceTextField
            label={'0➔10 單次精煉費'}
            value={refinePriceBeforeTen.toString()}
            onChange={onRefinePriceBeforeTen}
          />
          <PriceTextField
            label={'10➔20 單次精煉費'}
            value={refinePriceAfterTen.toString()}
            onChange={onRefinePriceAfterTen}
          />
          <Box
            sx={sx}
          >
            <FormControlLabel
              control={
                <Switch 
                  onChange={onWeaponRefineChange}
                  checked={weaponRefineChecked} 
                  disabled={disabledWeaponRefine} 
                />
              }
              
              label={<Typography sx={{fontSize: 14}}>神工匠-武器精煉</Typography>}
            />
          </Box>
        </div>
      </div>
    );
  }
}

export default RefineView;