import { EquipmentCategory, EquipmentLevel, ProbabilityCategory } from "../../../Core/Core";
import { RefineMaterialProps } from "../../../Core/Refinement";
import ItemDestroyed from "../FailurePenalty/ItemDestroyed";

class EnrichedElunium implements RefineMaterialProps {
  readonly name = "EnrichedElunium";
  readonly chineseName = "濃縮鋁";
  readonly probabilityCategory = ProbabilityCategory.Special;
  readonly failurePenalty = new ItemDestroyed();
  readonly refinableLevel = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  readonly refinableEquipmentCategory = [EquipmentCategory.Armor];
  readonly refinableEquipmentLevel = [
    EquipmentLevel.Level1
  ];
}

export default EnrichedElunium;