import RefineUserPropsStore from "../../../Data/Store/RefineUserPropsStore";
import RefineRangeController from "./RefineRangeController";

function createController() {
  const refineUserPropsStore = new RefineUserPropsStore();
  const controller = new RefineRangeController({
    refineUserPropsStore,
  });
  return { 
    controller,
    refineUserPropsStore,
  };
}

test('set range', () => {
  const { refineUserPropsStore, controller } = createController();
  expect(refineUserPropsStore.start).toBe(4);
  expect(refineUserPropsStore.end).toBe(11);

  controller.setRange(5, 15);
  expect(refineUserPropsStore.start).toBe(5);
  expect(refineUserPropsStore.end).toBe(15);
});

test('range with weapon refine enable', () => {
  const { refineUserPropsStore, controller } = createController();
  expect(refineUserPropsStore.start).toBe(4);
  expect(refineUserPropsStore.end).toBe(11);

  refineUserPropsStore.setWeaponRefineEnabled(true);
  expect(refineUserPropsStore.start).toBe(4);
  expect(refineUserPropsStore.end).toBe(10);

  controller.setRange(0, 15);
  expect(refineUserPropsStore.start).toBe(0);
  expect(refineUserPropsStore.end).toBe(10);

  refineUserPropsStore.setWeaponRefineEnabled(false);
  controller.setRange(5, 15);
  expect(refineUserPropsStore.start).toBe(5);
  expect(refineUserPropsStore.end).toBe(15);
});

test('set range to invalid number', () => {
  const { refineUserPropsStore, controller } = createController();
  expect(refineUserPropsStore.start).toBe(4);
  expect(refineUserPropsStore.end).toBe(11);

  controller.setRange(15, 0);
  expect(refineUserPropsStore.start).toBe(0);
  expect(refineUserPropsStore.end).toBe(15);

  controller.setRange(15, 15);
  expect(refineUserPropsStore.start).toBe(14);
  expect(refineUserPropsStore.end).toBe(15);

  controller.setRange(14, 16);
  expect(refineUserPropsStore.start).toBe(14);
  expect(refineUserPropsStore.end).toBe(16);

  controller.setRange(14, 14);
  expect(refineUserPropsStore.start).toBe(14);
  expect(refineUserPropsStore.end).toBe(15);

  controller.setRange(17, 16);
  expect(refineUserPropsStore.start).toBe(16);
  expect(refineUserPropsStore.end).toBe(17);
});
