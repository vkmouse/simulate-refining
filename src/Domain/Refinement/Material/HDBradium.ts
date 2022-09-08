import { EquipmentCategory, EquipmentLevel, ProbabilityCategory } from "../../../Core/Core";
import { RefineMaterialProps } from "../../../Core/Refinement";
import RefineDecreased from "../FailurePenalty/RefineDecreased";

class HDBradium implements RefineMaterialProps {
  readonly name = "HDBradium";
  readonly chineseName = "高密度鈽鐳礦石";
  readonly probabilityCategory = ProbabilityCategory.Special;
  readonly failurePenalty = new RefineDecreased(1);
  readonly refinableLevel = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  readonly refinableEquipmentCategory = [EquipmentCategory.Weapon];
  readonly refinableEquipmentLevel = [
    EquipmentLevel.Level1,
    EquipmentLevel.Level2,
    EquipmentLevel.Level3,
    EquipmentLevel.Level4
  ];
}

export default HDBradium;