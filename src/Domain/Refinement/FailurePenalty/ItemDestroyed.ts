import { FailurePenalty } from "../../../Core/Refinement";

class ItemDestroyed implements FailurePenalty {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  execute(refineLevel: number): number {
    return -1;
  }
}

export default ItemDestroyed;
