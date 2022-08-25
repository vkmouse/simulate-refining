import { EquipmentCategory, ProbabilityCategory, EquipmentLevel } from "../../../Core/Core";
import RefineMaterial from "../../Model/RefineMaterial";
import { RefineDecreased } from "../FailurePenalty";

class HDBradium implements RefineMaterial {
  name = "HDBradium";
  chineseName = "高密度鈽鐳礦石";
  probabilityCategory = ProbabilityCategory.Special;
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
  failurePenalty = new RefineDecreased(1);
}

export default HDBradium;