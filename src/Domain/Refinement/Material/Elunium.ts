import { EquipmentCategory, EquipmentLevel, ProbabilityCategory } from "../../../Core/Core";
import { RefineMaterialProps } from "../../../Core/Refinement";
import ItemDestroyed from "../FailurePenalty/ItemDestroyed";

class Elunium implements RefineMaterialProps {
  readonly name = "Elunium";
  readonly chineseName = "鋁";
  readonly probabilityCategory = ProbabilityCategory.Normal;
  readonly failurePenalty = new ItemDestroyed();
  readonly refinableLevel = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  readonly refinableEquipmentCategory = [EquipmentCategory.Armor];
  readonly refinableEquipmentLevel = [
    EquipmentLevel.Level1
  ];
}

export default Elunium;