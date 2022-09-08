import { EquipmentCategory, EquipmentLevel, ProbabilityCategory } from "../../../Core/Core";
import { RefineMaterialProps } from "../../../Core/Refinement";
import RefineDecreased from "../FailurePenalty/RefineDecreased";

class Etherdeocon implements RefineMaterialProps {
  readonly name = "Etherdeocon";
  readonly chineseName = "乙太神之金屬";
  readonly probabilityCategory = ProbabilityCategory.Normal;
  readonly failurePenalty = new RefineDecreased(3);
  readonly refinableLevel = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  readonly refinableEquipmentCategory = [EquipmentCategory.Weapon];
  readonly refinableEquipmentLevel = [
    EquipmentLevel.Level5
  ];
}

export default Etherdeocon;