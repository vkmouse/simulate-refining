import { EquipmentCategory, ProbabilityCategory, EquipmentLevel } from "../../../Core/Core";
import RefineMaterial from "../../Model/RefineMaterial";
import { RefineDecreased } from "../FailurePenalty";

class Bradium implements RefineMaterial {
  name = "Bradium";
  chineseName = "鈽鐳礦石";
  probabilityCategory = ProbabilityCategory.Normal;
  refinableEquipmentCategory = EquipmentCategory.Weapon;
  refinableEquipmentLevel = {
    [EquipmentLevel.Level1]: true,
    [EquipmentLevel.Level2]: true,
    [EquipmentLevel.Level3]: true,
    [EquipmentLevel.Level4]: true,
    [EquipmentLevel.Level5]: false,
  };
  refinableLevel = [false, false, false, false, false,
                    false, false, false, false, false,
                    true,  true,  true,  true,  true,
                    true,  true,  true,  true,  true];
  failurePenalty = new RefineDecreased(3);
}

export default Bradium;