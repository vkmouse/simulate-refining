import { EquipmentCategory, ProbabilityCategory, EquipmentLevel } from "../../../Core/Core";
import RefineMaterial from "../../Model/RefineMaterial";
import { RefineDecreased } from "../FailurePenalty";

class HDElunium implements RefineMaterial {
  name = "HDElunium";
  chineseName = "高濃縮鋁";
  probabilityCategory = ProbabilityCategory.Special;
  refinableEquipmentCategory = EquipmentCategory.Armor;
  refinableEquipmentLevel = {
    [EquipmentLevel.Level1]: true,
    [EquipmentLevel.Level2]: false,
    [EquipmentLevel.Level3]: false,
    [EquipmentLevel.Level4]: false,
    [EquipmentLevel.Level5]: false,
  };
  refinableLevel = [false, false, false, false, false,
                    false, false, true,  true,  true,
                    false, false, false, false, false,
                    false, false, false, false, false];
  failurePenalty = new RefineDecreased(1);
}

export default HDElunium;