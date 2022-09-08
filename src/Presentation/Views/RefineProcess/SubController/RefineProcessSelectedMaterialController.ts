import { autorun } from "mobx";
import { EquipmentCategory, EquipmentLevel } from "../../../../Core/Core";
import { RefineMaterial } from "../../../../Core/Refinement";
import RefineUserPropsStore from "../../../../Data/Store/RefineUserPropsStore";
import { queryRefineMaterial, queryRefineProbability } from "../../../../Domain/API";

interface IProps {
  refineUserPropsStore: RefineUserPropsStore
}

interface SelectedMaterial { 
  equipmentCategory: EquipmentCategory,
  equipmentLevel: EquipmentLevel,
  value: RefineMaterial,
  refineLevel: number
}

class RefineProcessSelectedMaterialController {
  props: IProps;

  constructor(props: IProps) {
    this.props = props;
    new LocalSelectedMaterialController(props);
    new WeaponRefineEnabledController(props);
  }

  setSelectedMaterial(refineLevel: number, value: RefineMaterial) {
    this.props.refineUserPropsStore.setMaterial(refineLevel, value);
  }

  getSelectedMaterial(refineLevel: number) {
    return this.props.refineUserPropsStore.materials[refineLevel];
  }

  getSelectedMaterialProbability(refineLevel: number) {
    return queryRefineProbability({ 
      ...this.props.refineUserPropsStore,
      probabilityCategory: this.getSelectedMaterial(refineLevel).probabilityCategory,
      refineLevel,
    });
  }
}

class LocalSelectedMaterialController {
  private props: IProps;
  private selectedMaterials: SelectedMaterial[];

  private replaceToStore = () => {
    for (const selectedMaterial of this.getSelectedMaterials()) {
      this.props.refineUserPropsStore.setMaterial(selectedMaterial.refineLevel, selectedMaterial.value);
    }
  };

  private replaceToLocalIfNotEqual = (refineLevel: number) => {
    const i = refineLevel;
    if (this.props.refineUserPropsStore.materials[i] !== this.getSelectedMaterial(i).value) {
      this.getSelectedMaterial(i).value = this.props.refineUserPropsStore.materials[i];
    }
  };

  constructor(props: IProps) {
    this.props = props;
    this.selectedMaterials = [];
    this.createLocalSelectedMaterials();
    autorun(this.replaceToStore);
    for (let i = 0; i < 20; i++) {
      autorun(() => this.replaceToLocalIfNotEqual(i));
    }
  }

  private createLocalSelectedMaterials() {
    this.selectedMaterials = [];
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
      const materials = queryRefineMaterial({
        equipmentCategory, equipmentLevel
      });
      for (let i = 0; i < 20; i++) {
        this.selectedMaterials.push({
          equipmentCategory,
          equipmentLevel,
          value: materials[i][0],
          refineLevel: i,
        });
      }
    }
  }

  private getSelectedMaterial(refineLevel: number): SelectedMaterial {
    const currentSelectedMaterials = this.getSelectedMaterials();
    const current = currentSelectedMaterials.find(p => p.refineLevel === refineLevel);
    if (current === undefined) {
      throw(this.errorMessage);
    } else {
      return current;
    }
  }

  private getSelectedMaterials(): SelectedMaterial[] {
    const { equipmentCategory, equipmentLevel } = this.props.refineUserPropsStore;
    const current = this.selectedMaterials.filter(p =>
      p.equipmentCategory === equipmentCategory &&
      p.equipmentLevel === equipmentLevel
    );
    if (current === undefined || current.length !== 20) {
      throw(this.errorMessage);
    } else {
      return current;
    }
  }

  private errorMessage = '[RefineProcessSelectedMaterialController] Invalid selected materials search';
}

class WeaponRefineEnabledController {
  private props: IProps;

  private resetStoreIfWeaponRefineEnabled = (refineLevel: number) => {
    const i = refineLevel;
    const { weaponRefineEnabled, materials } = this.props.refineUserPropsStore;
    if (weaponRefineEnabled) {
      const defaultMaterial = this.getDefaultMaterial(i);
      if (materials[i] !== defaultMaterial) {
        this.props.refineUserPropsStore.setMaterial(i, defaultMaterial);
      }
    }
  };

  constructor(props: IProps) {
    this.props = props;
    for (let i = 0; i < 10; i++) {
      autorun(() => this.resetStoreIfWeaponRefineEnabled(i));
    }
  }

  private getDefaultMaterial(refineLevel: number) {
    return queryRefineMaterial({
      ...this.props.refineUserPropsStore
    })[refineLevel][0];
  }
}

export default RefineProcessSelectedMaterialController;
