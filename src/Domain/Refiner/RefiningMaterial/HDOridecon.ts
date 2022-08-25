import { EquipmentCategory, ProbabilityCategory, EquipmentLevel } from "../../../Core/Core";
import RefineMaterial from "../../Model/RefineMaterial";
import { RefineDecreased } from "../FailurePenalty";

class HDOridecon implements RefineMaterial {
  chineseName = "高濃縮神之金屬";
  probabilityCategory = ProbabilityCategory.Special;
  refinableEquipmentCategory = EquipmentCategory.Weapon;
  refinableEquipmentLevel = {
    [EquipmentLevel.Level1]: false,
    [EquipmentLevel.Level2]: false,
    [EquipmentLevel.Level3]: true,
    [EquipmentLevel.Level4]: true,
    [EquipmentLevel.Level5]: false,
  };
  refinableLevel = [false, false, false, false, false,
                    false, false, true,  true,  true,
                    false, false, false, false, false,
                    false, false, false, false, false];
  failurePenalty = new RefineDecreased(1);
}

export default HDOridecon;