import React from 'react';
import { render, screen, getByRole } from '@testing-library/react';
import EquipmentController from './EquipmentController';
import EquipmentStore from '../../../Data/Store/EquipmentStore';
import { EquipmentCategory } from '../../../Core/Core';
import userEvent from '@testing-library/user-event';

const setup = () => {
  const props = {
    equipmentStore: new EquipmentStore,
  };
  
  const wrapper = render(<EquipmentController {...props} />);
  return {
    equipmentStore: props.equipmentStore,
    getWeaponButton() {
      return wrapper.queryByTestId('toggle-button-weapon') as HTMLElement;
    },
    getArmorButton() {
      return wrapper.queryByTestId('toggle-button-armor') as HTMLElement;
    },
    getLevelInput() {
      return wrapper.queryByTestId('select-input') as HTMLElement;
    },
    getLevelButton() {
      return wrapper.queryByTestId('select-button') as HTMLElement;
    },
    wrapper
  };
};

test('EquipmentCategory', () => {
  const { getWeaponButton, getArmorButton, equipmentStore } = setup();

  const weaponButton = getWeaponButton();
  const armorButton = getArmorButton();

  expect(equipmentStore.category).toBe(EquipmentCategory.Weapon);
  expect(weaponButton.getAttribute('aria-pressed')).toBe('true');
  
  userEvent.click(getArmorButton());
  expect(equipmentStore.category).toBe(EquipmentCategory.Armor); 
  expect(armorButton.getAttribute('aria-pressed')).toBe('true');

  userEvent.click(getWeaponButton());
  expect(equipmentStore.category).toBe(EquipmentCategory.Weapon); 
  expect(weaponButton.getAttribute('aria-pressed')).toBe('true');
});

test('EquipmentLevel', () => {
  const { getLevelInput, getLevelButton, wrapper } = setup();
  const selectInput = getLevelInput();
  const selectButton = getLevelButton();

  expect(selectInput).toHaveProperty("value", "Level1");
  // if (selectInput.parentElement != undefined) {
  //   userEvent.click(selectInput.parentElement);
  // }
  console.log(selectInput.parentElement?.getElementsByClassName('MuiSelect-select'));
  // console.log(wrapper.queryAllByText("武器等級 1").map(m => (m as HTMLElement).innerHTML));
  // wrapper.getByText("武器等級 2").click();
  
  // expect(selectInput).toHaveProperty("value", "Level2");
});