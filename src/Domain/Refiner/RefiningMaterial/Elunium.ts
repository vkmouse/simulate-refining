import { EquipmentCategory, ProbabilityCategory, EquipmentLevel } from "../../../Core/Core";
import RefineMaterial from "../../Model/RefineMaterial";
import { ItemDestroyed } from "../FailurePenalty";

class Elunium implements RefineMaterial {
  chineseName = "鋁";
  probabilityCategory = ProbabilityCategory.Normal;
  refinableEquipmentCategory = EquipmentCategory.Armor;
  refinableEquipmentLevel = {
    [EquipmentLevel.Level1]: true,
    [EquipmentLevel.Level2]: false,
    [EquipmentLevel.Level3]: false,
    [EquipmentLevel.Level4]: false,
    [EquipmentLevel.Level5]: false,
  };
  refinableLevel = [true,  true,  true,  true,  true,
                    true,  true,  true,  true,  true,
                    false, false, false, false, false,
                    false, false, false, false, false];
  failurePenalty = new ItemDestroyed();
}

export default Elunium;