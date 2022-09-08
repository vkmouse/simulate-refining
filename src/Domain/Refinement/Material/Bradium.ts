import { EquipmentCategory, EquipmentLevel, ProbabilityCategory } from "../../../Core/Core";
import { RefineMaterialProps } from "../../../Core/Refinement";
import RefineDecreased from "../FailurePenalty/RefineDecreased";

class Bradium implements RefineMaterialProps {
  readonly name = "Bradium";
  readonly chineseName = "鈽鐳礦石";
  readonly probabilityCategory = ProbabilityCategory.Normal;
  readonly failurePenalty = new RefineDecreased(3);
  readonly refinableLevel = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  readonly refinableEquipmentCategory = [EquipmentCategory.Weapon];
  readonly refinableEquipmentLevel = [
    EquipmentLevel.Level1,
    EquipmentLevel.Level2,
    EquipmentLevel.Level3,
    EquipmentLevel.Level4
  ];
}

export default Bradium;