import { EquipmentCategory, EquipmentLevel, ProbabilityCategory } from "../../../Core/Core";
import { RefineMaterialProps } from "../../../Core/Refinement";
import ItemDestroyed from "../FailurePenalty/ItemDestroyed";

class EnrichedOridecon implements RefineMaterialProps {
  readonly name = "EnrichedOridecon";
  readonly chineseName = "濃縮神之金屬";
  readonly probabilityCategory = ProbabilityCategory.Special;
  readonly failurePenalty = new ItemDestroyed();
  readonly refinableLevel = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  readonly refinableEquipmentCategory = [EquipmentCategory.Weapon];
  readonly refinableEquipmentLevel = [
    EquipmentLevel.Level3,
    EquipmentLevel.Level4
  ];
}

export default EnrichedOridecon;