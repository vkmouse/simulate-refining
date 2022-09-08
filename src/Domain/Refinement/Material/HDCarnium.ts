import { EquipmentCategory, EquipmentLevel, ProbabilityCategory } from "../../../Core/Core";
import { RefineMaterialProps } from "../../../Core/Refinement";
import RefineDecreased from "../FailurePenalty/RefineDecreased";

class HDCarnium implements RefineMaterialProps {
  readonly name = "HDCarnium";
  readonly chineseName = "高密度鈣礦石";
  readonly probabilityCategory = ProbabilityCategory.Special;
  readonly failurePenalty = new RefineDecreased(1);
  readonly refinableLevel = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  readonly refinableEquipmentCategory = [EquipmentCategory.Armor];
  readonly refinableEquipmentLevel = [
    EquipmentLevel.Level1
  ];
}

export default HDCarnium;