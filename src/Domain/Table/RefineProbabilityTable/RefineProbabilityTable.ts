import { EquipmentCategory, EquipmentLevel, ProbabilityCategory } from "../../../Core/Core";

interface DataProps {
  equipmentCategory: EquipmentCategory
  equipmentLevel: EquipmentLevel
  probabilityCategory: ProbabilityCategory
  refineLevel: number
  probability: number
}

interface IProps {
  equipmentCategory: EquipmentCategory
  equipmentLevel: EquipmentLevel
  probabilityCategory: ProbabilityCategory
  probabilities: number[]
}

class RefineProbabilityTable {
  private static table: RefineProbabilityTable | undefined = undefined;
  private data: DataProps[];

  static getData(): DataProps[] {
    if (this.table === undefined) {
      this.table = new RefineProbabilityTable();
    }
    return this.table.data;
  }

  private constructor() {
    this.data = [];

    this.data = this.data.concat(this.addProbabilities({
      equipmentCategory: EquipmentCategory.Weapon, 
      equipmentLevel: EquipmentLevel.Level1,
      probabilityCategory: ProbabilityCategory.Normal,
      probabilities: [
        1.00, 1.00, 1.00, 1.00, 1.00, 
        1.00, 1.00, 0.60, 0.40, 0.19,
        0.18, 0.18, 0.18, 0.18, 0.18,
        0.17, 0.17, 0.17, 0.15, 0.15]
    }));

    this.data = this.data.concat(this.addProbabilities({
      equipmentCategory: EquipmentCategory.Weapon, 
      equipmentLevel: EquipmentLevel.Level2,
      probabilityCategory: ProbabilityCategory.Normal,
      probabilities: [
        1.00, 1.00, 1.00, 1.00, 1.00, 
        1.00, 0.60, 0.40, 0.20, 0.19,
        0.18, 0.18, 0.18, 0.18, 0.18,
        0.17, 0.17, 0.17, 0.15, 0.15]
    }));

    this.data = this.data.concat(this.addProbabilities({
      equipmentCategory: EquipmentCategory.Weapon, 
      equipmentLevel: EquipmentLevel.Level3,
      probabilityCategory: ProbabilityCategory.Normal,
      probabilities: [
        1.00, 1.00, 1.00, 1.00, 1.00, 
        0.60, 0.50, 0.20, 0.20, 0.19,
        0.18, 0.18, 0.18, 0.18, 0.18,
        0.17, 0.17, 0.17, 0.15, 0.15]
    }));

    this.data = this.data.concat(this.addProbabilities({
      equipmentCategory: EquipmentCategory.Weapon, 
      equipmentLevel: EquipmentLevel.Level4,
      probabilityCategory: ProbabilityCategory.Normal,
      probabilities: [
        1.00, 1.00, 1.00, 1.00, 0.60, 
        0.40, 0.40, 0.20, 0.20, 0.09,
        0.08, 0.08, 0.08, 0.08, 0.08,
        0.07, 0.07, 0.07, 0.05, 0.05]
    }));

    this.data = this.data.concat(this.addProbabilities({
      equipmentCategory: EquipmentCategory.Weapon, 
      equipmentLevel: EquipmentLevel.Level5,
      probabilityCategory: ProbabilityCategory.Normal,
      probabilities: [
        1.00, 1.00, 1.00, 0.60, 0.60, 
        0.40, 0.40, 0.20, 0.20, 0.09,
        0.08, 0.08, 0.08, 0.08, 0.07,
        0.07, 0.07, 0.07, 0.05, 0.05]
    }));

    this.data = this.data.concat(this.addProbabilities({
      equipmentCategory: EquipmentCategory.Armor, 
      equipmentLevel: EquipmentLevel.Level1,
      probabilityCategory: ProbabilityCategory.Normal,
      probabilities: [
        1.00, 1.00, 1.00, 1.00, 0.60, 
        0.40, 0.40, 0.20, 0.20, 0.09,
        0.08, 0.08, 0.08, 0.08, 0.08,
        0.07, 0.07, 0.07, 0.05, 0.05]
    }));

    this.data = this.data.concat(this.addProbabilities({
      equipmentCategory: EquipmentCategory.Armor, 
      equipmentLevel: EquipmentLevel.Level2,
      probabilityCategory: ProbabilityCategory.Normal,
      probabilities: [
        1.00, 1.00, 1.00, 0.60, 0.60, 
        0.40, 0.40, 0.20, 0.20, 0.09,
        0.08, 0.08, 0.08, 0.08, 0.07,
        0.07, 0.07, 0.07, 0.05, 0.05]
    }));

    this.data = this.data.concat(this.addProbabilities({
      equipmentCategory: EquipmentCategory.Weapon, 
      equipmentLevel: EquipmentLevel.Level1,
      probabilityCategory: ProbabilityCategory.Special,
      probabilities: [
        1.00, 1.00, 1.00, 1.00, 1.00, 
        1.00, 1.00, 0.90, 0.70, 0.30,
        0.18, 0.18, 0.18, 0.18, 0.18,
        0.17, 0.17, 0.17, 0.15, 0.15]
    }));

    this.data = this.data.concat(this.addProbabilities({
      equipmentCategory: EquipmentCategory.Weapon, 
      equipmentLevel: EquipmentLevel.Level2,
      probabilityCategory: ProbabilityCategory.Special,
      probabilities: [
        1.00, 1.00, 1.00, 1.00, 1.00, 
        1.00, 0.90, 0.70, 0.40, 0.30,
        0.18, 0.18, 0.18, 0.18, 0.18,
        0.17, 0.17, 0.17, 0.15, 0.15]
    }));

    this.data = this.data.concat(this.addProbabilities({
      equipmentCategory: EquipmentCategory.Weapon, 
      equipmentLevel: EquipmentLevel.Level3,
      probabilityCategory: ProbabilityCategory.Special,
      probabilities: [
        1.00, 1.00, 1.00, 1.00, 1.00, 
        0.90, 0.80, 0.40, 0.40, 0.30,
        0.18, 0.18, 0.18, 0.18, 0.18,
        0.17, 0.17, 0.17, 0.15, 0.15]
    }));

    this.data = this.data.concat(this.addProbabilities({
      equipmentCategory: EquipmentCategory.Weapon, 
      equipmentLevel: EquipmentLevel.Level4,
      probabilityCategory: ProbabilityCategory.Special,
      probabilities: [
        1.00, 1.00, 1.00, 1.00, 0.90, 
        0.70, 0.70, 0.40, 0.40, 0.20,
        0.08, 0.08, 0.08, 0.08, 0.08,
        0.07, 0.07, 0.07, 0.05, 0.05]
    }));

    this.data = this.data.concat(this.addProbabilities({
      equipmentCategory: EquipmentCategory.Weapon, 
      equipmentLevel: EquipmentLevel.Level5,
      probabilityCategory: ProbabilityCategory.Special,
      probabilities: [
        1.00, 1.00, 1.00, 0.90, 0.70, 
        0.60, 0.60, 0.40, 0.40, 0.20,
        0.15, 0.15, 0.15, 0.15, 0.10,
        0.10, 0.10, 0.10, 0.07, 0.07]
    }));

    this.data = this.data.concat(this.addProbabilities({
      equipmentCategory: EquipmentCategory.Armor, 
      equipmentLevel: EquipmentLevel.Level1,
      probabilityCategory: ProbabilityCategory.Special,
      probabilities: [
        1.00, 1.00, 1.00, 1.00, 0.90, 
        0.70, 0.70, 0.40, 0.40, 0.20,
        0.08, 0.08, 0.08, 0.08, 0.08,
        0.07, 0.07, 0.07, 0.05, 0.05]
    }));
    
    this.data = this.data.concat(this.addProbabilities({
      equipmentCategory: EquipmentCategory.Armor, 
      equipmentLevel: EquipmentLevel.Level2,
      probabilityCategory: ProbabilityCategory.Special,
      probabilities: [
        1.00, 1.00, 1.00, 0.90, 0.70, 
        0.60, 0.60, 0.40, 0.40, 0.20,
        0.15, 0.15, 0.15, 0.15, 0.10,
        0.10, 0.10, 0.10, 0.07, 0.07]
    }));
  }

  private addProbabilities(props: IProps): DataProps[] {
    return props.probabilities.map((p, i) => { 
      return {
        equipmentCategory: props.equipmentCategory,
        equipmentLevel: props.equipmentLevel,
        probabilityCategory: props.probabilityCategory,
        refineLevel: i,
        probability: p
      }; 
    });
  }
}

export default RefineProbabilityTable;