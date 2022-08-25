import { EquipmentCategory, ProbabilityCategory, EquipmentLevel } from "../../../Core/Core";
import RefineMaterial from "../../Model/RefineMaterial";
import { ItemDestroyed } from "../FailurePenalty";

class EtelCarnium implements RefineMaterial {
  chineseName = "乙太鈣礦石";
  probabilityCategory = ProbabilityCategory.Normal;
  refinableEquipmentCategory = EquipmentCategory.Armor;
  refinableEquipmentLevel = {
    [EquipmentLevel.Level1]: false,
    [EquipmentLevel.Level2]: true,
    [EquipmentLevel.Level3]: false,
    [EquipmentLevel.Level4]: false,
    [EquipmentLevel.Level5]: false,
  };
  refinableLevel = [false, false, false, false, false,
                    false, false, false, false, false,
                    true,  true,  true,  true,  true,
                    true,  true,  true,  true,  true];
  failurePenalty = new ItemDestroyed();
}

export default EtelCarnium;