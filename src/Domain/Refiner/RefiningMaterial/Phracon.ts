import { EquipmentCategory, ProbabilityCategory, EquipmentLevel } from "../../../Core/Core";
import RefineMaterial from "../../Model/RefineMaterial";
import { ItemDestroyed } from "../FailurePenalty";

class Phracon implements RefineMaterial {
  chineseName = "強化武器金屬-級數一";
  probabilityCategory = ProbabilityCategory.Normal;
  refinableEquipmentCategory = EquipmentCategory.Weapon;
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

export default Phracon;