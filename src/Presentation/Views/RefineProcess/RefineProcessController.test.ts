import RefineUserPropsStore from "../../../Data/Store/RefineUserPropsStore";
import RefineProcessController from "./RefineProcessController";

function createController() {
  const refineUserPropsStore = new RefineUserPropsStore();
  const controller = new RefineProcessController({
    refineUserPropsStore,
  });
  return { 
    controller,
    refineUserPropsStore,
  };
}

test('material length and refine level', () => {
  const { refineUserPropsStore, controller } = createController();
  let materials = controller.getMaterials();
  expect(materials.length).toBe(7);
  expect(materials[0].refineLevel).toBe(4);
  expect(materials[6].refineLevel).toBe(10);

  refineUserPropsStore.setRange(0, 1);
  materials = controller.getMaterials();
  expect(controller.getMaterials().length).toBe(1);
  expect(materials[0].refineLevel).toBe(0);

  refineUserPropsStore.setRange(0, 10);
  materials = controller.getMaterials();
  expect(controller.getMaterials().length).toBe(10);
  expect(materials[0].refineLevel).toBe(0);
  expect(materials[9].refineLevel).toBe(9);

  refineUserPropsStore.setRange(5, 20);
  materials = controller.getMaterials();
  expect(controller.getMaterials().length).toBe(15);
  expect(materials[0].refineLevel).toBe(5);
  expect(materials[14].refineLevel).toBe(19);
});
