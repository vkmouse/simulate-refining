import { FailurePenalty } from "../../../Core/Refinement";

class EquipmentSafe implements FailurePenalty {
  execute(refineLevel: number): number {
    return refineLevel;
  }
}

export default EquipmentSafe;