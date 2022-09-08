import { EquipmentCategory, EquipmentLevel, ProbabilityCategory } from "../../../Core/Core";
import { RefineMaterialProps } from "../../../Core/Refinement";
import ItemDestroyed from "../FailurePenalty/ItemDestroyed";

class Emveretarcon implements RefineMaterialProps {
  readonly name = "Emveretarcon";
  readonly chineseName = "強化武器金屬-級數二";
  readonly probabilityCategory = ProbabilityCategory.Normal;
  readonly failurePenalty = new ItemDestroyed();
  readonly refinableLevel = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  readonly refinableEquipmentCategory = [EquipmentCategory.Weapon];
  readonly refinableEquipmentLevel = [
    EquipmentLevel.Level2
  ];
}

export default Emveretarcon;