import { EquipmentCategory, ProbabilityCategory, EquipmentLevel } from "../../../Core/Core";
import RefineMaterial from "../../Model/RefineMaterial";
import { ItemDestroyed } from "../FailurePenalty";

class EtelBradium implements RefineMaterial {
  name = "EtelBradium";
  chineseName = "乙太鈽鐳";
  probabilityCategory = ProbabilityCategory.Normal;
  refinableEquipmentCategory = EquipmentCategory.Weapon;
  refinableEquipmentLevel = {
    [EquipmentLevel.Level1]: false,
    [EquipmentLevel.Level2]: false,
    [EquipmentLevel.Level3]: false,
    [EquipmentLevel.Level4]: false,
    [EquipmentLevel.Level5]: true,
  };
  refinableLevel = [false, false, false, false, false,
                    false, false, false, false, false,
                    true,  true,  true,  true,  true,
                    true,  true,  true,  true,  true];
  failurePenalty = new ItemDestroyed();
}

export default EtelBradium;