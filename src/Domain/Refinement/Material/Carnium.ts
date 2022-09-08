import { EquipmentCategory, EquipmentLevel, ProbabilityCategory } from "../../../Core/Core";
import { RefineMaterialProps } from "../../../Core/Refinement";
import RefineDecreased from "../FailurePenalty/RefineDecreased";

class Carnium implements RefineMaterialProps {
  readonly name = "Carnium";
  readonly chineseName = "鈣礦石";
  readonly probabilityCategory = ProbabilityCategory.Normal;
  readonly failurePenalty = new RefineDecreased(3);
  readonly refinableLevel = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  readonly refinableEquipmentCategory = [EquipmentCategory.Armor];
  readonly refinableEquipmentLevel = [
    EquipmentLevel.Level1
  ];
}

export default Carnium;