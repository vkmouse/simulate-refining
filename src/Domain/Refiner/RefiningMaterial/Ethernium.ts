import { EquipmentCategory, ProbabilityCategory, EquipmentLevel } from "../../../Core/Core";
import RefineMaterial from "../../Model/RefineMaterial";
import { RefineDecreased } from "../FailurePenalty";

class Ethernium implements RefineMaterial {
  name = "Ethernium";
  chineseName = "乙太鋁";
  probabilityCategory = ProbabilityCategory.Normal;
  refinableEquipmentCategory = EquipmentCategory.Armor;
  refinableEquipmentLevel = {
    [EquipmentLevel.Level1]: false,
    [EquipmentLevel.Level2]: true,
    [EquipmentLevel.Level3]: false,
    [EquipmentLevel.Level4]: false,
    [EquipmentLevel.Level5]: false,
  };
  refinableLevel = [true,  true,  true,  true,  true,
                    true,  true,  true,  true,  true,
                    false, false, false, false, false,
                    false, false, false, false, false];
  failurePenalty = new RefineDecreased(3);
}

export default Ethernium;