import { EquipmentCategory, EquipmentLevel, ProbabilityCategory } from "../../../Core/Core";
import { RefineMaterialProps } from "../../../Core/Refinement";
import ItemDestroyed from "../FailurePenalty/ItemDestroyed";

class HDEtherdeocon implements RefineMaterialProps {
  readonly name = "HDEtherdeocon";
  readonly chineseName = "高濃縮乙太神之金屬";
  readonly probabilityCategory = ProbabilityCategory.Special;
  readonly failurePenalty = new ItemDestroyed();
  readonly refinableLevel = [10, 11, 12, 13, 14];
  readonly refinableEquipmentCategory = [EquipmentCategory.Weapon];
  readonly refinableEquipmentLevel = [
    EquipmentLevel.Level5
  ];
}

export default HDEtherdeocon;