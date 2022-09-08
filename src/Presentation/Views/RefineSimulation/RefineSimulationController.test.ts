import RefinePricePropsStore from "../../../Data/Store/RefinePricePropsStore";
import RefineStatsPropsStore from "../../../Data/Store/RefineStatsPropsStore";
import RefineUserPropsStore from "../../../Data/Store/RefineUserPropsStore";
import RefineSimulationController from "./RefineSimulationController";

function createController() {
  const refineUserPropsStore = new RefineUserPropsStore();
  const refinePricePropsStore = new RefinePricePropsStore();
  const refineStatsPropsStore = new RefineStatsPropsStore();
  const controller = new RefineSimulationController({
    refineUserPropsStore,
    refinePricePropsStore,
    refineStatsPropsStore
  });
  return { 
    controller,
    refineUserPropsStore,
    refinePricePropsStore,
    refineStatsPropsStore
  };
}

test('set number of samples', () => {
  const { refineUserPropsStore, controller } = createController();
  expect(refineUserPropsStore.numSamples).toBe(1000);

  controller.setNumSamples(200);
  expect(refineUserPropsStore.numSamples).toBe(200);
});

test('calculate stats', () => {
  const { 
    controller,
    refineUserPropsStore,
    refinePricePropsStore,
    refineStatsPropsStore
   } = createController();
  controller.setNumSamples(10);
  refinePricePropsStore.setEquipmentPrice(20);
  refinePricePropsStore.setPrice('Phracon', 30);
  refineUserPropsStore.setRange(0, 4);

  controller.calculateStats();
  expect(refineStatsPropsStore.stats).toStrictEqual([{
      cost: 50,
      numBlessings: 0,
      numSuccess: 10,
      refineLevel: 0,
      refineTimes: 10,
    }, {
      cost: 80,
      numBlessings: 0,
      numSuccess: 10,
      refineLevel: 1,
      refineTimes: 10,
    }, {
      cost: 110,
      numBlessings: 0,
      numSuccess: 10,
      refineLevel: 2,
      refineTimes: 10,
    }, {
      cost: 140,
      numBlessings: 0,
      numSuccess: 10,
      refineLevel: 3,
      refineTimes: 10,
    },
  ]);
});
