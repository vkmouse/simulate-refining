import { EquipmentCategory, EquipmentLevel, ProbabilityCategory } from "../../../Core/Core";
import { RefineMaterialProps } from "../../../Core/Refinement";
import ItemDestroyed from "../FailurePenalty/ItemDestroyed";

class EtelCarnium implements RefineMaterialProps {
  readonly name = "EtelCarnium";
  readonly chineseName = "乙太鈣礦石";
  readonly probabilityCategory = ProbabilityCategory.Normal;
  readonly failurePenalty = new ItemDestroyed();
  readonly refinableLevel = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  readonly refinableEquipmentCategory = [EquipmentCategory.Armor];
  readonly refinableEquipmentLevel = [
    EquipmentLevel.Level2
  ];
}

export default EtelCarnium;