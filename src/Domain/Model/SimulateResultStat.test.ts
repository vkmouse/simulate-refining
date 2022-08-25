import { SimulateResultStat, SimulateResultStatCalculator } from './SimulateResultStat';
import SimulateResult from './SimulateResult';
import MaterialStore from '../../Data/Store/MaterialStore';
import Phracon from '../Refiner/RefiningMaterial/Phracon';
import Oridecon from '../Refiner/RefiningMaterial/Oridecon';
import EnrichedOridecon from '../Refiner/RefiningMaterial/EnrichedOridecon';

const setup = () => {
  const materialStore = new MaterialStore();
  materialStore.setPrice(200, 'Phracon');
  materialStore.setPrice(50000, 'Oridecon');
  materialStore.setPrice(700000, 'EnrichedOridecon');
  materialStore.setPrice(1500000, 'blessing');
  return {
    materialStore,
    numSamples: 1000,
    equipmentPrice: 75000
  };
};


test('SimulateResultStat single result', () => {
  const refineLevel = 1;
  const refineTimes = 57;
  const material = new Phracon();
  const numSuccess = 43;
  const cost = Math.round((75000 * 1000 + 200 * 57) / 43);
  const enableBlessings = Array(20).fill(false);

  const result = new SimulateResult(refineLevel, material);
  result.refineTimes = refineTimes;
  result.numSuccess = numSuccess;
  const calculator = new SimulateResultStatCalculator({ results: [result], enableBlessings, ...setup() });
  const stat = calculator.calculate();

  expect(stat.length).toBe(1);
  expect(stat[0].refineLevel).toBe(refineLevel);
  expect(stat[0].refineTimes).toBe(refineTimes);
  expect(stat[0].numSuccess).toBe(numSuccess);
  expect(stat[0].cost).toBe(cost);
});

test('SimulateResultStat refine level 7 with blessing', () => {
  const refineLevel = 7;
  const refineTimes = 32;
  const material = new Oridecon();
  const numSuccess = 20;
  const cost = Math.round((75000 * 1000 + 50000 * 32 + 1500000 * 32) / 20);
  const enableBlessings = Array(20).fill(false);
  enableBlessings[7] = true;

  const result = new SimulateResult(refineLevel, material);
  result.refineTimes = refineTimes;
  result.numSuccess = numSuccess;
  const calculator = new SimulateResultStatCalculator({ results: [result], enableBlessings, ...setup() });
  const stat = calculator.calculate();

  expect(stat.length).toBe(1);
  expect(stat[0].refineLevel).toBe(refineLevel);
  expect(stat[0].refineTimes).toBe(refineTimes);
  expect(stat[0].numSuccess).toBe(numSuccess);
  expect(stat[0].cost).toBe(cost);
});

test('SimulateResultStat refine level 8 with blessing', () => {
  const refineLevel = 8;
  const refineTimes = 32;
  const material = new Oridecon();
  const numSuccess = 20;
  const cost = Math.round((75000 * 1000 + 50000 * 32 + 1500000 * 32 * 2) / 20);
  const enableBlessings = Array(20).fill(false);
  enableBlessings[8] = true;

  const result = new SimulateResult(refineLevel, material);
  result.refineTimes = refineTimes;
  result.numSuccess = numSuccess;
  const calculator = new SimulateResultStatCalculator({ results: [result], enableBlessings, ...setup() });
  const stat = calculator.calculate();

  expect(stat.length).toBe(1);
  expect(stat[0].refineLevel).toBe(refineLevel);
  expect(stat[0].refineTimes).toBe(refineTimes);
  expect(stat[0].numSuccess).toBe(numSuccess);
  expect(stat[0].cost).toBe(cost);
});

test('SimulateResultStat multiple refine levels', () => {
  const results = [{
    refineLevel: 5,
    refineTimes: 32,
    material: new Oridecon(),
    numSuccess: 20,
  }, {
    refineLevel: 6,
    refineTimes: 63,
    material: new Oridecon(),
    numSuccess: 15,
  }, {
    refineLevel: 7,
    refineTimes: 24,
    material: new EnrichedOridecon(),
    numSuccess: 15,
  }]
  const enableBlessings = Array(20).fill(false);
  enableBlessings[7] = true;

  const costs = [
    Math.round((75000 * 1000 + 50000 * 32) / 20), 
    Math.round((75000 * 1000 + 50000 * 32 + 50000 * 63) / 15), 
    Math.round((75000 * 1000 + 50000 * 32 + 50000 * 63 + 700000 * 24 + 1500000 * 24) / 15)
  ]

  const calculator = new SimulateResultStatCalculator({ results, enableBlessings, ...setup() });
  const stat = calculator.calculate();

  expect(stat.length).toBe(3);

  expect(stat[0].refineLevel).toBe(5);
  expect(stat[0].refineTimes).toBe(32);
  expect(stat[0].numSuccess).toBe(20);
  expect(stat[0].cost).toBe(costs[0]);

  expect(stat[1].refineLevel).toBe(6);
  expect(stat[1].refineTimes).toBe(63);
  expect(stat[1].numSuccess).toBe(15);
  expect(stat[1].cost).toBe(costs[1]);

  expect(stat[2].refineLevel).toBe(7);
  expect(stat[2].refineTimes).toBe(24);
  expect(stat[2].numSuccess).toBe(15);
  expect(stat[2].cost).toBe(costs[2]);
});

test('SimulateResultStat zero refine times', () => {
  const results = [{
    refineLevel: 5,
    refineTimes: 0,
    material: new Oridecon(),
    numSuccess: 0,
  }, {
    refineLevel: 6,
    refineTimes: 63,
    material: new Oridecon(),
    numSuccess: 15,
  }, {
    refineLevel: 7,
    refineTimes: 24,
    material: new EnrichedOridecon(),
    numSuccess: 15,
  }]
  const enableBlessings = Array(20).fill(false);
  enableBlessings[7] = true;

  const costs = [
    Math.round((75000 * 1000 + 50000 * 63) / 15), 
    Math.round((75000 * 1000 + 50000 * 63 + 700000 * 24 + 1500000 * 24) / 15)
  ]

  const calculator = new SimulateResultStatCalculator({ results, enableBlessings, ...setup() });
  const stat = calculator.calculate();

  expect(stat.length).toBe(2);

  expect(stat[0].refineLevel).toBe(6);
  expect(stat[0].refineTimes).toBe(63);
  expect(stat[0].numSuccess).toBe(15);
  expect(stat[0].cost).toBe(costs[0]);

  expect(stat[1].refineLevel).toBe(7);
  expect(stat[1].refineTimes).toBe(24);
  expect(stat[1].numSuccess).toBe(15);
  expect(stat[1].cost).toBe(costs[1]);
});

test('SimulateResultStat zero success', () => {
  const results = [{
    refineLevel: 5,
    refineTimes: 32,
    material: new Oridecon(),
    numSuccess: 20,
  }, {
    refineLevel: 6,
    refineTimes: 10,
    material: new Oridecon(),
    numSuccess: 0,
  }, {
    refineLevel: 7,
    refineTimes: 0,
    material: new EnrichedOridecon(),
    numSuccess: 0,
  }]
  const enableBlessings = Array(20).fill(false);

  const costs = [
    Math.round((75000 * 1000 + 50000 * 32) / 20), 
    Infinity
  ]

  const calculator = new SimulateResultStatCalculator({ results, enableBlessings, ...setup() });
  const stat = calculator.calculate();

  expect(stat.length).toBe(2);

  expect(stat[0].refineLevel).toBe(5);
  expect(stat[0].refineTimes).toBe(32);
  expect(stat[0].numSuccess).toBe(20);
  expect(stat[0].cost).toBe(costs[0]);

  expect(stat[1].refineLevel).toBe(6);
  expect(stat[1].refineTimes).toBe(10);
  expect(stat[1].numSuccess).toBe(0);
  expect(stat[1].cost).toBe(costs[1]);
});
