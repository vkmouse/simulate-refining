import { autorun } from "mobx";
import { EquipmentCategory, EquipmentLevel } from "../../../Core/Core";
import RefinePricePropsStore from "../../../Data/Store/RefinePricePropsStore";
import RefineUserPropsStore from "../../../Data/Store/RefineUserPropsStore";

interface IProps {
  refineUserPropsStore: RefineUserPropsStore
  refinePricePropsStore: RefinePricePropsStore
}

class RefineInfoController {
  props: IProps;

  constructor(props: IProps) {
    this.props = props;
    autorun(() => {
      if (!this.getWeaponRefineEnabledAvailable()) {
        this.setWeaponRefineEnabled(false);
      }
    });
    autorun(() => {
      const { refinePriceBeforeTen, refinePriceAfterTen } = this.getDefaultRefinePrice();
      this.setRefinePriceBeforeTen(refinePriceBeforeTen);
      this.setRefinePriceAfterTen(refinePriceAfterTen);
    });
  }

  setWeaponRefineEnabled(value: boolean) {
    this.props.refineUserPropsStore.setWeaponRefineEnabled(value);
  }

  setRefinePriceBeforeTen(value: number) {
    this.props.refinePricePropsStore.setRefinePriceBeforeTen(value); 
  }

  setRefinePriceAfterTen(value: number) {
    this.props.refinePricePropsStore.setRefinePriceAfterTen(value); 
  }

  getWeaponRefineEnabledAvailable() {
    const { equipmentCategory, equipmentLevel } = this.props.refineUserPropsStore;
    return equipmentCategory === EquipmentCategory.Weapon &&
      (equipmentLevel === EquipmentLevel.Level1 ||
       equipmentLevel === EquipmentLevel.Level2 ||
       equipmentLevel === EquipmentLevel.Level3 ||
       equipmentLevel === EquipmentLevel.Level4);
  }

  private defaultPriceTable = [{ 
    equipmentCategory: EquipmentCategory.Weapon,
    equipmentLevel: EquipmentLevel.Level1,
    refinePriceBeforeTen: 10000,
    refinePriceAfterTen: 100000,
  }, { 
    equipmentCategory: EquipmentCategory.Weapon,
    equipmentLevel: EquipmentLevel.Level2,
    refinePriceBeforeTen: 10000,
    refinePriceAfterTen: 100000,
  }, { 
    equipmentCategory: EquipmentCategory.Weapon,
    equipmentLevel: EquipmentLevel.Level3,
    refinePriceBeforeTen: 10000,
    refinePriceAfterTen: 100000,
  }, { 
    equipmentCategory: EquipmentCategory.Weapon,
    equipmentLevel: EquipmentLevel.Level4,
    refinePriceBeforeTen: 10000,
    refinePriceAfterTen: 100000,
  }, { 
    equipmentCategory: EquipmentCategory.Weapon,
    equipmentLevel: EquipmentLevel.Level5,
    refinePriceBeforeTen: 50000,
    refinePriceAfterTen: 100000,
  }, { 
    equipmentCategory: EquipmentCategory.Armor,
    equipmentLevel: EquipmentLevel.Level1,
    refinePriceBeforeTen: 10000,
    refinePriceAfterTen: 100000,
  }, { 
    equipmentCategory: EquipmentCategory.Armor,
    equipmentLevel: EquipmentLevel.Level2,
    refinePriceBeforeTen: 30000,
    refinePriceAfterTen: 75000,
  }, { 
    equipmentCategory: EquipmentCategory.Shadow,
    equipmentLevel: EquipmentLevel.Level1,
    refinePriceBeforeTen: 10000,
    refinePriceAfterTen: 100000,
  }];

  private getDefaultRefinePrice() {
    const { equipmentCategory, equipmentLevel, weaponRefineEnabled } = this.props.refineUserPropsStore;

    if (weaponRefineEnabled) {
      return {       
        refinePriceBeforeTen: 0,
        refinePriceAfterTen: 0 
      };
    }

    const found = this.defaultPriceTable.find(p => {
      return equipmentCategory === p.equipmentCategory && 
        equipmentLevel === p.equipmentLevel;
    });
    
    if (found !== undefined) {
      return found;
    } else {
      throw ('Invalid default refine price');
    }
  }
}

export default RefineInfoController;