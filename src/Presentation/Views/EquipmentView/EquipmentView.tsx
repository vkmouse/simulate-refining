import React from "react";
import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent, Component } from "react";
import { EquipmentCategory, EquipmentLevel } from "../../../Core/Core";
import EquipmentCategoryToggleButton from "../../Components/EquipmentCategoryToggleButton";
import EquipmentLevelCombobox from "../../Components/EquipmentLevelCombobox";
import PriceTextField from "../../Components/PriceTextField";

interface IProps {
  category: EquipmentCategory
  level: EquipmentLevel
  price: number
  setCategory: (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: EquipmentCategory | null
  ) => void
  setLevel: (e: SelectChangeEvent<EquipmentLevel>) => void
  setPrice: (e: ChangeEvent<HTMLInputElement>) => void
  levelData: { value: EquipmentLevel, name: string }[]
}

class EquipmentView extends Component<IProps> {
  render() {
    const { category, level, price, setCategory, setLevel, setPrice, levelData } = this.props;
    return (
      <div className='block'>
        <div className="title">裝備資訊</div>
          <div className='input-group'>
            <div style={{ alignItems: 'center', display: 'inline-flex'}}>
              <EquipmentCategoryToggleButton 
                onChange={setCategory}
                value={category}
              />
              <EquipmentLevelCombobox 
                data={levelData} 
                onChange={setLevel}
                value={level}
              />
            </div>
          <PriceTextField 
            label="裝備價值"
            value={price.toString()}
            onChange={setPrice}
          />
        </div>
      </div>
    );    
  }
}

export default EquipmentView;