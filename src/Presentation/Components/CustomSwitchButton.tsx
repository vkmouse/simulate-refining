import React from "react";
import { Box, BoxProps, SxProps, Theme, ToggleButton } from '@mui/material';

interface IProps {
  label: string
  selected: boolean
  disabled?: boolean
  visible?: boolean
  boxProps?: BoxProps
  buttonProps?: { sx?: SxProps<Theme> }
  onChange?: (value: boolean) => void
}

function CustomSwitchButton(props: IProps) {
  const { 
    label,
    selected,
    disabled,
    visible,
    boxProps,
    buttonProps,
    onChange
  } = props;
  const visibility = (visible ?? true) ? 'visible' : 'hidden';
  const handleClick = (): void => {
    if (onChange !== undefined) {
      onChange(!selected);
    }
  };
  return (
    <Box {...boxProps}>
      <ToggleButton
        {...buttonProps}
        value='' 
        color='primary' 
        size='small' 
        selected={selected}
        onClick={handleClick}
        disabled={disabled}
        sx={{ ...buttonProps?.sx, visibility }}
      >
        {label}
      </ToggleButton>
    </Box>
  );
}

export default CustomSwitchButton;