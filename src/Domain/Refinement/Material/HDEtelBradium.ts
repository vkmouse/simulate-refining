import { EquipmentCategory, EquipmentLevel, ProbabilityCategory } from "../../../Core/Core";
import { RefineMaterialProps } from "../../../Core/Refinement";
import ItemDestroyed from "../FailurePenalty/ItemDestroyed";

class HDEtelBradium implements RefineMaterialProps {
  readonly name = "HDEtelBradium";
  readonly chineseName = "高密度乙太鈽鐳礦石";
  readonly probabilityCategory = ProbabilityCategory.Special;
  readonly failurePenalty = new ItemDestroyed();
  readonly refinableLevel = [15, 16, 17, 18, 19];
  readonly refinableEquipmentCategory = [EquipmentCategory.Weapon];
  readonly refinableEquipmentLevel = [
    EquipmentLevel.Level5
  ];
}

export default HDEtelBradium;