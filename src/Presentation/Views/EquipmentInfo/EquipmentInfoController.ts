import { EquipmentCategory, EquipmentLevel } from "../../../Core/Core";
import RefinePricePropsStore from "../../../Data/Store/RefinePricePropsStore";
import RefineUserPropsStore from "../../../Data/Store/RefineUserPropsStore";

interface IProps {
  refineUserPropsStore: RefineUserPropsStore
  refinePricePropsStore: RefinePricePropsStore
}

class EquipmentInfoController {
  props: IProps;

  constructor(props: IProps) {
    this.props = props;
  }

  setCategory(value: EquipmentCategory) {
    this.props.refineUserPropsStore.setEquipmentLevel(EquipmentLevel.Level1);
    this.props.refineUserPropsStore.setEquipmentCategory(value);
  }

  setLevel(value: EquipmentLevel) {
    if (this.validateEquipmentLevel(value)) {
      this.props.refineUserPropsStore.setEquipmentLevel(value);
    } else {
      throw("Invalid equipment level");
    }
  }

  setPrice(value: number) {
    this.props.refinePricePropsStore.setEquipmentPrice(value);
  }

  getEquipmentLevelData() {
    const found = this.equipmentLevelDataTable.find(p => p.category === this.category());
    if (found !== undefined) {
      return found.equipmentLevelData;
    } else {
      throw("Invalid equipment level data");
    }
  }

  getEquipmentCategoryData() {
    return [{ name: '武器', value: EquipmentCategory.Weapon },
            { name: '防具', value: EquipmentCategory.Armor }];
  }

  private validTable = [
    { category: EquipmentCategory.Weapon, level: EquipmentLevel.Level1 },
    { category: EquipmentCategory.Weapon, level: EquipmentLevel.Level2 },
    { category: EquipmentCategory.Weapon, level: EquipmentLevel.Level3 },
    { category: EquipmentCategory.Weapon, level: EquipmentLevel.Level4 },
    { category: EquipmentCategory.Weapon, level: EquipmentLevel.Level5 },
    { category: EquipmentCategory.Armor, level: EquipmentLevel.Level1 },
    { category: EquipmentCategory.Armor, level: EquipmentLevel.Level2 },
    { category: EquipmentCategory.Shadow, level: EquipmentLevel.Level1 },
  ];

  private equipmentLevelDataTable = [{ 
    category: EquipmentCategory.Weapon, 
      equipmentLevelData: [
        { value: EquipmentLevel.Level1, name: '武器等級 1' },
        { value: EquipmentLevel.Level2, name: '武器等級 2' },
        { value: EquipmentLevel.Level3, name: '武器等級 3' },
        { value: EquipmentLevel.Level4, name: '武器等級 4' },
        { value: EquipmentLevel.Level5, name: '武器等級 5' }
      ]
    }, { 
      category: EquipmentCategory.Armor, 
      equipmentLevelData: [
        { value: EquipmentLevel.Level1, name: '防具等級 1' },
        { value: EquipmentLevel.Level2, name: '防具等級 2' },
      ]
    }, { 
      category: EquipmentCategory.Shadow, 
      equipmentLevelData: [
        { value: EquipmentLevel.Level1, name: '無裝備等級', disabled: true },
      ]
    }
  ];

  private validateEquipmentLevel(level: EquipmentLevel) {
    return this.validTable.find(p => {
      return p.category === this.category() && p.level === level;
    }) != undefined;
  }

  private category() {
    return this.props.refineUserPropsStore.equipmentCategory;
  }
}

export default EquipmentInfoController;
