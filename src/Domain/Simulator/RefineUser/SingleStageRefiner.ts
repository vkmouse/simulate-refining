import { FailurePenalty } from "../../../Core/Refinement";

interface DataProps {
  failurePenalty: FailurePenalty
  probability: number
  refineLevel: number
}

class SingleStageRefiner {
  failurePenalty: FailurePenalty;
  probability: number;
  refineLevel: number;

  constructor(props: DataProps) {
    this.failurePenalty = props.failurePenalty;
    this.probability = props.probability;
    this.refineLevel = props.refineLevel;
  }

  refine(): number {
    return this.refineSuccess() ? this.getRefineLevelForSuccess() : this.getRefineLevelForFailure();
  }

  private refineSuccess(): boolean {
    return Math.random() < this.probability;
  }

  private getRefineLevelForSuccess(): number {
    return this.refineLevel + 1;
  }

  private getRefineLevelForFailure(): number {
    return this.failurePenalty.execute(this.refineLevel);
  }
}

export default SingleStageRefiner;