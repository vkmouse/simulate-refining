import { EquipmentCategory, EquipmentLevel, ProbabilityCategory } from "../../../Core/Core";
import { RefineMaterialProps } from "../../../Core/Refinement";
import RefineDecreased from "../FailurePenalty/RefineDecreased";

class EnrichedEthernium implements RefineMaterialProps {
  readonly name = "EnrichedEthernium";
  readonly chineseName = "濃縮乙太鋁";
  readonly probabilityCategory = ProbabilityCategory.Special;
  readonly failurePenalty = new RefineDecreased(1);
  readonly refinableLevel = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  readonly refinableEquipmentCategory = [EquipmentCategory.Armor];
  readonly refinableEquipmentLevel = [
    EquipmentLevel.Level2
  ];
}

export default EnrichedEthernium;