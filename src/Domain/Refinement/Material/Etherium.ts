import { EquipmentCategory, EquipmentLevel, ProbabilityCategory } from "../../../Core/Core";
import { RefineMaterialProps } from "../../../Core/Refinement";
import RefineDecreased from "../FailurePenalty/RefineDecreased";

class Etherium implements RefineMaterialProps {
  readonly name = "Etherium";
  readonly chineseName = "乙太鋁";
  readonly probabilityCategory = ProbabilityCategory.Normal;
  readonly failurePenalty = new RefineDecreased(3);
  readonly refinableLevel = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  readonly refinableEquipmentCategory = [EquipmentCategory.Armor];
  readonly refinableEquipmentLevel = [
    EquipmentLevel.Level2
  ];
}

export default Etherium;