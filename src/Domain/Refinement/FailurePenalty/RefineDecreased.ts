import { FailurePenalty } from "../../../Core/Refinement";

class RefineDecreased implements FailurePenalty {
  downGradeLevel: number;

  constructor(downGradeLevel: number) {
    this.downGradeLevel = downGradeLevel;
  }

  execute(refineLevel: number): number {
    return Math.max(0, refineLevel - this.downGradeLevel);
  }
}

export default RefineDecreased;