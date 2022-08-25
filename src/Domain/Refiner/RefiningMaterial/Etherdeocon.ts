import { EquipmentCategory, ProbabilityCategory, EquipmentLevel } from "../../../Core/Core";
import RefineMaterial from "../../Model/RefineMaterial";
import { RefineDecreased } from "../FailurePenalty";

class Etherdeocon implements RefineMaterial {
  chineseName = "乙太神之金屬";
  probabilityCategory = ProbabilityCategory.Normal;
  refinableEquipmentCategory = EquipmentCategory.Weapon;
  refinableEquipmentLevel = {
    [EquipmentLevel.Level1]: false,
    [EquipmentLevel.Level2]: false,
    [EquipmentLevel.Level3]: false,
    [EquipmentLevel.Level4]: false,
    [EquipmentLevel.Level5]: true,
  };
  refinableLevel = [true,  true,  true,  true,  true,
                    true,  true,  true,  true,  true,
                    false, false, false, false, false,
                    false, false, false, false, false];
  failurePenalty = new RefineDecreased(3);
}

export default Etherdeocon;