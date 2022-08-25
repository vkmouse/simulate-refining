import { EquipmentCategory, ProbabilityCategory, EquipmentLevel } from "../../../Core/Core";
import RefineMaterial from "../../Model/RefineMaterial";
import { ItemDestroyed } from "../FailurePenalty";

class HDEtelCarnium implements RefineMaterial {
  chineseName = "高密度乙太鈣礦石";
  probabilityCategory = ProbabilityCategory.Special;
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
                    false, false, false, false, false,
                    true,  true,  true,  true,  true];
  failurePenalty = new ItemDestroyed();
}

export default HDEtelCarnium;