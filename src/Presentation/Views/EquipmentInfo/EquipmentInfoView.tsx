import React from "react";
import ComponentData from "../../Components/ComponentData";
import ToggleButton from "../../Components/CustomToggleButton";
import Combobox from "../../Components/CustomCombobox";
import TextField from "../../Components/NumberTextField";

interface IProps {
  equipmentCategory: NonNullable<unknown>
  equipmentCategoryData: ComponentData[]
  equipmentLevel: NonNullable<unknown>
  equipmentLevelData: ComponentData[]
  equipmentPrice: number
  onEquipmentCategoryChange?: (value: NonNullable<unknown>) => void
  onEquipmentLevelChange?: (value: NonNullable<unknown>) => void
  onEquipmentPriceChange?: (value: number) => void
}

class EquipmentInfoView extends React.Component<IProps> {
  render() {
    const { 
      equipmentCategory,
      equipmentCategoryData, 
      equipmentLevel,
      equipmentLevelData,
      equipmentPrice,
      onEquipmentCategoryChange,
      onEquipmentLevelChange,
      onEquipmentPriceChange
    } = this.props;
    return (
      <div className='block'>
        <div className="title">裝備資訊</div>
        <div className='input-group'>
          <div style={{ alignItems: 'center', display: 'inline-flex'}}>
            <ToggleButton
              data={equipmentCategoryData}
              value={equipmentCategory}
              onChange={onEquipmentCategoryChange}
              toggleButtonProps={{ sx: { fontSize: 16, lineHeight: 1.2 } }}
            />
            <Combobox
              label={"裝備等級"}
              data={equipmentLevelData}
              value={equipmentLevel}
              onChange={onEquipmentLevelChange}
            />
          </div>
          <TextField 
            label={"裝備價值"}
            value={equipmentPrice}
            onChange={onEquipmentPriceChange}
            maxValue={999999999999}
          />
        </div>
      </div>
    );    
  }
}

export default EquipmentInfoView;