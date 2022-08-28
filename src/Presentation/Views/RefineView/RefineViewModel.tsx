import React, { Component } from "react";
import { inject, observer } from 'mobx-react';
import RootStore from "../../../Data/RootStore";
import RefineView from "./RefineView";
import EquipmentStore from "../../../Data/Store/EquipmentStore";
import RefineStore from "../../../Data/Store/RefineStore";
import { EquipmentCategory, EquipmentLevel } from "../../../Core/Core";
import { autorun } from "mobx";

interface IProps {
  equipmentStore: EquipmentStore
  refineStore: RefineStore
}

@inject(RootStore.type.EQUIPMENT, RootStore.type.REFINE)
@observer
class RefineRangeViewModel extends Component<IProps> {
  static defaultProps = {} as IProps;

  allowedWeaponRefine = {
    [EquipmentCategory.Weapon]: {
      [EquipmentLevel.Level1]: true,
      [EquipmentLevel.Level2]: true,
      [EquipmentLevel.Level3]: true,
      [EquipmentLevel.Level4]: true,
      [EquipmentLevel.Level5]: false,
    },
    [EquipmentCategory.Armor]: {
      [EquipmentLevel.Level1]: false,
      [EquipmentLevel.Level2]: false,
      [EquipmentLevel.Level3]: false,
      [EquipmentLevel.Level4]: false,
      [EquipmentLevel.Level5]: false,
    }
  };

  constructor(props: IProps) {
    super(props);
    autorun(() => {
      const { category, level } = this.props.equipmentStore;
      if (!this.allowedWeaponRefine[category][level]) {
        this.props.refineStore.setEnabledWeaponRefine(false);
      }
    });
  }

  setEnabledWeaponRefine(checked: boolean) {
    this.props.refineStore.setEnabledWeaponRefine(checked);
  }

  setRefinePriceBeforeTen = (value: number) => {
    this.props.refineStore.setRefinePriceBeforeTen(value);
  };

  setRefinePriceAfterTen = (value: number) => {
    this.props.refineStore.setRefinePriceAfterTen(value);
  };
  
  render() {
    const { category, level } = this.props.equipmentStore;
    const { refinePriceBeforeTen, refinePriceAfterTen, enabledWeaponRefine } = this.props.refineStore;
    return (
      <RefineView 
        disabledWeaponRefine={!this.allowedWeaponRefine[category][level]}
        refinePriceBeforeTen={refinePriceBeforeTen}
        refinePriceAfterTen={refinePriceAfterTen}
        weaponRefineChecked={enabledWeaponRefine}
        onRefinePriceBeforeTen={this.setRefinePriceBeforeTen}
        onRefinePriceAfterTen={this.setRefinePriceAfterTen}
        onWeaponRefineChange={(e, v) => this.setEnabledWeaponRefine(v)}
      />
    );
  }
}

export default RefineRangeViewModel;
