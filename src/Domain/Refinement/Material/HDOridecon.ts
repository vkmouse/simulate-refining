import { EquipmentCategory, EquipmentLevel, ProbabilityCategory } from "../../../Core/Core";
import { RefineMaterialProps } from "../../../Core/Refinement";
import RefineDecreased from "../FailurePenalty/RefineDecreased";

class HDOridecon implements RefineMaterialProps {
  readonly name = "HDOridecon";
  readonly chineseName = "高濃縮神之金屬";
  readonly probabilityCategory = ProbabilityCategory.Special;
  readonly failurePenalty = new RefineDecreased(1);
  readonly refinableLevel = [7, 8, 9];
  readonly refinableEquipmentCategory = [EquipmentCategory.Weapon];
  readonly refinableEquipmentLevel = [
    EquipmentLevel.Level3,
    EquipmentLevel.Level4
  ];
}

export default HDOridecon;