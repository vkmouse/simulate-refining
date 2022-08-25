import FailurePenalty from "../Model/FailurePenalty";

class RefineDecreased implements FailurePenalty {
  downGradeLevel: number;

  constructor(downGradeLevel: number) {
    this.downGradeLevel = downGradeLevel;
  }

  execute(refineLevel: number): number {
    return Math.max(0, refineLevel - this.downGradeLevel);
  }
}

class ItemDestroyed implements FailurePenalty {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  execute(refineLevel: number): number {
    return -1;
  }
}

class EquipmentSafe implements FailurePenalty {
  execute(refineLevel: number): number {
    return refineLevel;
  }
}

export { RefineDecreased, ItemDestroyed, EquipmentSafe };
