import { EquipmentCategory, ProbabilityCategory, EquipmentLevel } from "../../../Core/Core";
import RefineMaterial from "../../Model/RefineMaterial";
import { ItemDestroyed } from "../FailurePenalty";

class HDEtelBradium implements RefineMaterial {
  chineseName = "高密度乙太鈽鐳礦石";
  probabilityCategory = ProbabilityCategory.Special;
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
                    false, false, false, false, false,
                    true,  true,  true,  true,  true];
  failurePenalty = new ItemDestroyed();
}

export default HDEtelBradium;