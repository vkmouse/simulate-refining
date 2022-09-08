import React from "react";
import SwitchButton from "../../Components/CustomSwitchButton";
import TextField from "../../Components/NumberTextField";

interface IProps {
  refinePriceBeforeTen: number
  refinePriceAfterTen: number
  weaponRefineEnabled: boolean
  weaponRefineEnabledAvailable?: boolean
  onRefinePriceBeforeTenChange?: (value: number) => void
  onRefinePriceAfterTenChange?: (value: number) => void
  onWeaponRefineEnabledChange?: (value: boolean) => void
}

class RefineInfoView extends React.Component<IProps> {
  render() {
    const { 
      refinePriceBeforeTen,
      refinePriceAfterTen,
      weaponRefineEnabled,
      weaponRefineEnabledAvailable,
      onRefinePriceBeforeTenChange,
      onRefinePriceAfterTenChange,
      onWeaponRefineEnabledChange
    } = this.props;
    return (
      <div className='block'>
        <div className="title">精煉資訊</div>
        <div className='input-group'>
          <TextField 
            label="0➔10 單次精煉費" 
            value={refinePriceBeforeTen} 
            onChange={onRefinePriceBeforeTenChange}
            maxValue={999999999999}
          />
          <TextField
            label="10➔20 單次精煉費"
            value={refinePriceAfterTen} 
            onChange={onRefinePriceAfterTenChange}
            maxValue={999999999999}
          />
          <SwitchButton
            label="神工匠-武器精煉"
            selected={weaponRefineEnabled}
            disabled={!weaponRefineEnabledAvailable}
            onChange={onWeaponRefineEnabledChange}
            boxProps={{ sx: { width: "31%", display: "flex", justifyContent: "center" }}}
          />
        </div>
      </div>
    );    
  }
}

export default RefineInfoView;