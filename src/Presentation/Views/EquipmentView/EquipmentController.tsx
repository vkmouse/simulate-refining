import React, { ChangeEvent } from 'react';
import EquipmentStore from '../../../Data/Store/EquipmentStore';
import { EquipmentCategory, EquipmentLevel } from '../../../Core/Core';
import { SelectChangeEvent } from '@mui/material';
import EquipmentView from './EquipmentView';

interface IProps {
  equipmentStore: EquipmentStore;
}

interface IState {
  levelData: { value: EquipmentLevel, name: string }[]
}

class EquipmentController extends React.Component<IProps, IState> {
  static defaultProps = {} as IProps;
  protected store: EquipmentStore;

  protected weaponLevelData = [
    { value: EquipmentLevel.Level1, name: '武器等級 1' },
    { value: EquipmentLevel.Level2, name: '武器等級 2' },
    { value: EquipmentLevel.Level3, name: '武器等級 3' },
    { value: EquipmentLevel.Level4, name: '武器等級 4' },
    { value: EquipmentLevel.Level5, name: '武器等級 5' }
  ];

  protected armorLevelData = [
    { value: EquipmentLevel.Level1, name: '防具等級 1' },
    { value: EquipmentLevel.Level2, name: '防具等級 2' }
  ];

  constructor(props: IProps) {
    super(props);
    this.state = {
      levelData: this.weaponLevelData
    };
    this.store = props.equipmentStore;
  }

  setCategory = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: EquipmentCategory | null
  ): void => {
    if (newAlignment == null) {
      return;
    }
    const newCategory = newAlignment;
    this.store?.setCategory(newCategory);
    this.store?.setLevel(EquipmentLevel.Level1);
    this.setState({
      levelData: newCategory == EquipmentCategory.Weapon ? this.weaponLevelData : this.armorLevelData
    });
  };

  setLevel = (e: SelectChangeEvent<EquipmentLevel>): void => {
    this.store?.setLevel(e.target.value as EquipmentLevel);
  };

  setPrice = (e: ChangeEvent<HTMLInputElement>): void => {
    let newPrice = parseInt(e.target.value.replace(/\D/g, ''));
    if (isNaN(newPrice)) { 
        newPrice = 0; 
    }
    this.store?.setPrice(newPrice);
  };

  render() {
    return (
      <EquipmentView 
        setCategory={this.setCategory}
        setLevel={this.setLevel}
        setPrice={this.setPrice}
        category={this.store?.category}
        level={this.store?.level}
        price={this.store?.price}
        levelData={this.state.levelData}
      />
    );
  }
}

export default EquipmentController;