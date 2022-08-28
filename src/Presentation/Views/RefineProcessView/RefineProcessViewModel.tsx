import React, { Component } from "react";
import { inject, observer } from 'mobx-react';
import RootStore from "../../../Data/RootStore";
import RefineProcessView from "./RefineProcessView";
import RefineRangeStore from "../../../Data/Store/RefineRangeStore";
import RefineMaterialTable from "../../../Domain/Refiner/RefineMaterialTable";
import EquipmentStore from "../../../Data/Store/EquipmentStore";
import RefineProcessStore from "../../../Data/Store/RefineProcessStore";
import RefineProbability from "../../../Domain/Refiner/RefineProbability";
import { IBlessingProps, IMaterialGroupProps } from "../../Components/RefineProcessTable";
import { ProbabilityCategory } from "../../../Core/Core";
import RefineMaterial from "../../../Domain/Model/RefineMaterial";
import RefineStore from "../../../Data/Store/RefineStore";
import { autorun } from "mobx";

interface IProps {
  equipmentStore: EquipmentStore
  refineStore: RefineStore
  refineRangeStore: RefineRangeStore
  refineProcessStore: RefineProcessStore
}

@inject(
  RootStore.type.EQUIPMENT, 
  RootStore.type.REFINE_RANGE, 
  RootStore.type.REFINE_PROCESS,
  RootStore.type.REFINE)
@observer
class RefineProcessViewModel extends Component<IProps> {
  static defaultProps = {} as IProps;

  allowedBlessings: boolean[] = [
    false, false, false, false, false,
    false, false, true,  true,  true,
    true,  true,  true,  true,  false,
    false, false, false, false, false];
  refineMaterialTable = RefineMaterialTable.getTable();

  autoRunAllowedBlessings = () => {
    const { category, level } = this.props.equipmentStore;
    if (this.props.refineStore.enabledWeaponRefine) {
      for (let i = 0; i < 10; i++) {
        this.props.refineProcessStore.setEnableBlessing(category, level, i, false);
        const material = this.refineMaterialTable.get(category)?.get(level)?.get(i)?.at(0);
        if (material != undefined) {
          this.props.refineProcessStore.setSelectedMaterials(category, level, i, material);
        }
      }
      this.setState({ allowedBlessingsDisabled: true });
    } else {
      this.setState({ allowedBlessingsDisabled: false });
    }
  }

  componentDidMount() {
    autorun(this.autoRunAllowedBlessings);
  }

  setMaterial = (newAlignment: RefineMaterial | null, refineLevel: number): void => {
    if (newAlignment !== null) {
      this.setSelectedMaterials(refineLevel, newAlignment);
    }
  };

  setBlessing = (refineLevel: number): void => {
    const enable = this.getEnableBlessing(refineLevel);
    this.setEnableBlessing(refineLevel, !enable);
  };

  getSelectedMaterial(refineLevel: number) {
    const { category, level } = this.props.equipmentStore;
    return this.props.refineProcessStore.selectedMaterials[category][level][refineLevel];
  }

  getEnableBlessing(refineLevel: number) {
    const { category, level } = this.props.equipmentStore;
    return this.props.refineProcessStore.enableBlessings[category][level][refineLevel];
  }

  getRefineMaterialTable(refineLevel: number) {
    const { category, level } = this.props.equipmentStore;
    return this.refineMaterialTable.get(category)?.get(level)?.get(refineLevel);
  }

  getRefineProbability(probabilityCategory: ProbabilityCategory, refineLevel: number) {
    const { category, level } = this.props.equipmentStore;
    return RefineProbability[probabilityCategory][category][level][refineLevel];
  }

  setSelectedMaterials(refineLevel: number, material: RefineMaterial) {
    const { category, level } = this.props.equipmentStore;
    this.props.refineProcessStore.setSelectedMaterials(category, level, refineLevel, material);
  }

  setEnableBlessing(refineLevel: number, enable: boolean) {
    const { category, level } = this.props.equipmentStore;
    this.props.refineProcessStore.setEnableBlessing(category, level, refineLevel, enable);
  }

  getMaterialGroupProps() {
    const { start, end } = this.props.refineRangeStore;
    const materialGroupProps: IMaterialGroupProps[] = [];
    for (let i = start; i < end; i++) {
      const index = this.getSelectedMaterial(i);
      materialGroupProps.push({
        value: index, 
        disabled: this.props.refineStore.enabledWeaponRefine,
        onChange: (e, v) => this.setMaterial(v, i)
      });
    }
    return materialGroupProps;
  }

  getMaterialProps() {
    const { start, end } = this.props.refineRangeStore;
    const materialProps: RefineMaterial[][] = [];
    for (let i = start; i < end; i++) {
      const materialPropsRow = this.getRefineMaterialTable(i);
      materialProps.push(materialPropsRow ?? []);
    }
    return materialProps;
  }

  getSuccessRate() {
    const { start, end } = this.props.refineRangeStore;
    const successRate: number[] = [];
    for (let i = start; i < end; i++) {
      const material = this.getSelectedMaterial(i);
      if (material) {
        const prob = this.getRefineProbability(material.probabilityCategory, i);
        successRate.push(Math.round(prob * 100));
      } else {
        successRate.push(0);
      }
    }
    return successRate;
  }

  getBlessingProps() {
    const { start, end } = this.props.refineRangeStore;
    const blessingProps: IBlessingProps[] = [];
    for (let i = start; i < end; i++) {
      blessingProps.push({ 
        allowBlessing: this.allowedBlessings[i],
        disabled: this.props.refineStore.enabledWeaponRefine,
        selected: this.getEnableBlessing(i),
        onChange: () => this.setBlessing(i)
      });
    }
    return blessingProps;
  }

  render() {
    const { start, end } = this.props.refineRangeStore;
    return (
      <RefineProcessView
        materialProps={this.getMaterialProps()}
        materialGroupProps={this.getMaterialGroupProps()}
        successRate={this.getSuccessRate()}
        blessingProps={this.getBlessingProps()}
        start={start}
        end={end}
      />
    );
  }
}

export default RefineProcessViewModel;
