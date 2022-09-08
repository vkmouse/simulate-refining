import EquipmentSafe from "../../Refinement/FailurePenalty/EquipmentSafe";
import ItemDestroyed from "../../Refinement/FailurePenalty/ItemDestroyed";
import RefineDecreased from "../../Refinement/FailurePenalty/RefineDecreased";
import SingleStageRefiner from "./SingleStageRefiner";

test('Single stage refine success', () => {
  const props = {
    failurePenalty: new EquipmentSafe(),
    probability: 1,
  };
  expect(new SingleStageRefiner({ ...props, refineLevel: 0 }).refine()).toBe(1);
  expect(new SingleStageRefiner({ ...props, refineLevel: 1 }).refine()).toBe(2);
  expect(new SingleStageRefiner({ ...props, refineLevel: 2 }).refine()).toBe(3);
  expect(new SingleStageRefiner({ ...props, refineLevel: 3 }).refine()).toBe(4);
  expect(new SingleStageRefiner({ ...props, refineLevel: 4 }).refine()).toBe(5);
  expect(new SingleStageRefiner({ ...props, refineLevel: 5 }).refine()).toBe(6);
});

test('Single stage refine failure', () => {
  const props = {
    probability: 0,
    refineLevel: 5
  };
  expect(new SingleStageRefiner({ ...props, failurePenalty: new EquipmentSafe() }).refine()).toBe(5);
  expect(new SingleStageRefiner({ ...props, failurePenalty: new RefineDecreased(3) }).refine()).toBe(2);
  expect(new SingleStageRefiner({ ...props, failurePenalty: new RefineDecreased(1) }).refine()).toBe(4);
  expect(new SingleStageRefiner({ ...props, failurePenalty: new ItemDestroyed() }).refine()).toBe(-1);
});