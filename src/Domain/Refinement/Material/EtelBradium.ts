import { EquipmentCategory, EquipmentLevel, ProbabilityCategory } from "../../../Core/Core";
import { RefineMaterialProps } from "../../../Core/Refinement";
import ItemDestroyed from "../FailurePenalty/ItemDestroyed";

class EtelBradium implements RefineMaterialProps {
  readonly name = "EtelBradium";
  readonly chineseName = "乙太鈽鐳";
  readonly probabilityCategory = ProbabilityCategory.Normal;
  readonly failurePenalty = new ItemDestroyed();
  readonly refinableLevel = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  readonly refinableEquipmentCategory = [EquipmentCategory.Weapon];
  readonly refinableEquipmentLevel = [
    EquipmentLevel.Level5
  ];
}

export default EtelBradium;