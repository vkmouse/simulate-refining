import React from "react";
import { ToggleButtonGroup, ToggleButton, SxProps, Theme } from '@mui/material';
import { EquipmentCategory } from '../../Core/Core';

interface IProps {
  value: EquipmentCategory
  onChange: (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: EquipmentCategory | null
  ) => void
}

function EquipmentCategoryRadioButton(props: IProps) {
  const { value, onChange } = props;
  const sx: SxProps<Theme> = { fontSize: 16, lineHeight: 1.2 };
  return (
      <ToggleButtonGroup
        color="primary"
        exclusive
        onChange={onChange}
        value={value}
      >
        <ToggleButton 
          value={EquipmentCategory.Weapon} 
          sx={sx}
          size='small'
          data-testid="toggle-button-weapon"
        >
          武器
        </ToggleButton>
        <ToggleButton 
          value={EquipmentCategory.Armor}
          sx={sx}
          size='small'
          data-testid="toggle-button-armor"
        >
          防具
        </ToggleButton>
      </ToggleButtonGroup>
  );
}

export default EquipmentCategoryRadioButton;