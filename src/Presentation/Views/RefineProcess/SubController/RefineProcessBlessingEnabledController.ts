import { autorun } from "mobx";
import { EquipmentCategory, EquipmentLevel } from "../../../../Core/Core";
import RefineUserPropsStore from "../../../../Data/Store/RefineUserPropsStore";

interface IProps {
  refineUserPropsStore: RefineUserPropsStore
}

class RefineProcessBlessingEnabledController {
  props: IProps;

  getAvialable = () => {
    return !this.props.refineUserPropsStore.weaponRefineEnabled;
  };

  constructor(props: IProps) {
    this.props = props;
    new LocalBlessingEnabledController(props);
    new WeaponRefineEnabledController(props);
  }

  setBlessingEnabled(refineLevel: number, value: boolean) {
    this.props.refineUserPropsStore.setBlessingEnabled(refineLevel, value);
  }

  getBlessingEnabled(refineLevel: number) {
    return this.props.refineUserPropsStore.blessingEnabledList[refineLevel];
  }

  getVisiable(refineLevel: number) {
    return 7 <= refineLevel && refineLevel < 14;
  }
}

class LocalBlessingEnabledController {
  private props: IProps;
  private blessingEnabledList: { 
    equipmentCategory: EquipmentCategory,
    equipmentLevel: EquipmentLevel,
    value: boolean,
    refineLevel: number
  }[];

  private replaceToStore = () => {
    for (const blessingEnabled of this.getBlessingEnabledList()) {
      this.props.refineUserPropsStore.setBlessingEnabled(blessingEnabled.refineLevel, blessingEnabled.value);
    }
  };

  private replaceToLocalIfNotEqual = (refineLevel: number) => {
    const i = refineLevel;
    if (this.props.refineUserPropsStore.blessingEnabledList[i] !== this.getBlessingEnabled(i).value) {
      this.getBlessingEnabled(i).value = this.props.refineUserPropsStore.blessingEnabledList[i];
    }
  };

  constructor(props: IProps) {
    this.props = props;
    this.blessingEnabledList = [];
    this.createLocalBlessingEnabledList();
    autorun(this.replaceToStore);
    for (let i = 0; i < 20; i++) {
      autorun(() => this.replaceToLocalIfNotEqual(i));
    }
  }

  private createLocalBlessingEnabledList() {
    this.blessingEnabledList = [];
    const propsList = [
      { equipmentCategory: EquipmentCategory.Weapon,  equipmentLevel: EquipmentLevel.Level1 },
      { equipmentCategory: EquipmentCategory.Weapon,  equipmentLevel: EquipmentLevel.Level2 },
      { equipmentCategory: EquipmentCategory.Weapon,  equipmentLevel: EquipmentLevel.Level3 },
      { equipmentCategory: EquipmentCategory.Weapon,  equipmentLevel: EquipmentLevel.Level4 },
      { equipmentCategory: EquipmentCategory.Weapon,  equipmentLevel: EquipmentLevel.Level5 },
      { equipmentCategory: EquipmentCategory.Armor,  equipmentLevel: EquipmentLevel.Level1 },
      { equipmentCategory: EquipmentCategory.Armor,  equipmentLevel: EquipmentLevel.Level2 },
    ];

    for (const props of propsList) {
      const { equipmentCategory, equipmentLevel } = props;
      for (let i = 0; i < 20; i++) {
        this.blessingEnabledList.push({
          equipmentCategory,
          equipmentLevel,
          value: false,
          refineLevel: i,
        });
      }
    }
  }

  private getBlessingEnabled(refineLevel: number) {
    const currentBlessingEnabledList = this.getBlessingEnabledList();
    const current = currentBlessingEnabledList.find(p => p.refineLevel === refineLevel);
    if (current === undefined) {
      throw(this.errorMessage);
    } else {
      return current;
    }
  }

  private getBlessingEnabledList() {
    const { equipmentCategory, equipmentLevel } = this.props.refineUserPropsStore;
    const current = this.blessingEnabledList.filter(p =>
      p.equipmentCategory === equipmentCategory &&
      p.equipmentLevel === equipmentLevel
    );
    if (current === undefined || current.length !== 20) {
      throw(this.errorMessage);
    } else {
      return current;
    }
  }

  private errorMessage = '[RefineProcessBlessingEnabledController] Invalid blessing enabled search';
}

class WeaponRefineEnabledController {
  private props: IProps;

  private resetStoreIfWeaponRefineEnabled = (refineLevel: number) => {
    const i = refineLevel;
    const { weaponRefineEnabled, blessingEnabledList } = this.props.refineUserPropsStore;
    if (weaponRefineEnabled) {
      if (blessingEnabledList[i] !== false) {
        this.props.refineUserPropsStore.setBlessingEnabled(i, false);
      }
    }
  };

  constructor(props: IProps) {
    this.props = props;
    for (let i = 0; i < 10; i++) {
      autorun(() => this.resetStoreIfWeaponRefineEnabled(i));
    }
  }
}

export default RefineProcessBlessingEnabledController;