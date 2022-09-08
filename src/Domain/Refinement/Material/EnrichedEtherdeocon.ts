import { EquipmentCategory, EquipmentLevel, ProbabilityCategory } from "../../../Core/Core";
import { RefineMaterialProps } from "../../../Core/Refinement";
import RefineDecreased from "../FailurePenalty/RefineDecreased";

class EnrichedEtherdeocon implements RefineMaterialProps {
  readonly name = "EnrichedEtherdeocon";
  readonly chineseName = "濃縮乙太神之金屬";
  readonly probabilityCategory = ProbabilityCategory.Special;
  readonly failurePenalty = new RefineDecreased(1);
  readonly refinableLevel = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  readonly refinableEquipmentCategory = [EquipmentCategory.Weapon];
  readonly refinableEquipmentLevel = [
    EquipmentLevel.Level5
  ];
}

export default EnrichedEtherdeocon;