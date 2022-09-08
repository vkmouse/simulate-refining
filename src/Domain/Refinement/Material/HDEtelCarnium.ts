import { EquipmentCategory, EquipmentLevel, ProbabilityCategory } from "../../../Core/Core";
import { RefineMaterialProps } from "../../../Core/Refinement";
import ItemDestroyed from "../FailurePenalty/ItemDestroyed";

class HDEtelCarnium implements RefineMaterialProps {
  readonly name = "HDEtelCarnium";
  readonly chineseName = "高密度乙太鈣礦石";
  readonly probabilityCategory = ProbabilityCategory.Special;
  readonly failurePenalty = new ItemDestroyed();
  readonly refinableLevel = [15, 16, 17, 18, 19];
  readonly refinableEquipmentCategory = [EquipmentCategory.Armor];
  readonly refinableEquipmentLevel = [
    EquipmentLevel.Level2
  ];
}

export default HDEtelCarnium;