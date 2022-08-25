import { SimulateResultStatCalculator } from './SimulateResultStat';
import SimulateResult from './SimulateResult';
import MaterialStore from '../../Data/Store/MaterialStore';
import Phracon from '../Refiner/RefiningMaterial/Phracon';
import Oridecon from '../Refiner/RefiningMaterial/Oridecon';
import EnrichedOridecon from '../Refiner/RefiningMaterial/EnrichedOridecon';
import RefineMaterial from './RefineMaterial';
import Bradium from '../Refiner/RefiningMaterial/Bradium';
import Carnium from '../Refiner/RefiningMaterial/Carnium';
import Elunium from '../Refiner/RefiningMaterial/Elunium';
import Emveretarcon from '../Refiner/RefiningMaterial/Emveretarcon';
import EnrichedElunium from '../Refiner/RefiningMaterial/EnrichedElunium';
import EnrichedEtherdeocon from '../Refiner/RefiningMaterial/EnrichedEtherdeocon';
import EnrichedEthernium from '../Refiner/RefiningMaterial/EnrichedEthernium';
import EtelBradium from '../Refiner/RefiningMaterial/EtelBradium';
import EtelCarnium from '../Refiner/RefiningMaterial/EtelCarnium';
import Etherdeocon from '../Refiner/RefiningMaterial/Etherdeocon';
import HDBradium from '../Refiner/RefiningMaterial/HDBradium';
import HDCarnium from '../Refiner/RefiningMaterial/HDCarnium';
import HDElunium from '../Refiner/RefiningMaterial/HDElunium';
import HDEtelBradium from '../Refiner/RefiningMaterial/HDEtelBradium';
import HDEtelCarnium from '../Refiner/RefiningMaterial/HDEtelCarnium';
import HDEtherdeocon from '../Refiner/RefiningMaterial/HDEtherdeocon';
import HDEthernium from '../Refiner/RefiningMaterial/HDEthernium';
import HDOridecon from '../Refiner/RefiningMaterial/HDOridecon';
import Ethernium from '../Refiner/RefiningMaterial/Ethernium';

const setup = () => {
  const materialStore = new MaterialStore();
  materialStore.setPrice(1500000, 'blessing');
  materialStore.setPrice(200, 'Phracon');
  materialStore.setPrice(1, 'Emveretarcon');
  
  materialStore.setPrice(50000, 'Oridecon');
  materialStore.setPrice(700000, 'EnrichedOridecon');
  materialStore.setPrice(2, 'HDOridecon');
  materialStore.setPrice(3, 'Etherdeocon');
  materialStore.setPrice(4, 'EnrichedEtherdeocon');
  materialStore.setPrice(5, 'HDEtherdeocon');
  
  materialStore.setPrice(6, 'Bradium');
  materialStore.setPrice(7, 'HDBradium');
  materialStore.setPrice(8, 'EtelBradium');
  materialStore.setPrice(9, 'HDEtelBradium');
  
  materialStore.setPrice(10, 'Elunium');
  materialStore.setPrice(11, 'EnrichedElunium');
  materialStore.setPrice(12, 'HDElunium');
  materialStore.setPrice(13, 'Ethernium');
  materialStore.setPrice(14, 'EnrichedEthernium');
  materialStore.setPrice(15, 'HDEthernium');
  
  materialStore.setPrice(16, 'Carnium');
  materialStore.setPrice(17, 'HDCarnium');
  materialStore.setPrice(18, 'EtelCarnium');
  materialStore.setPrice(19, 'HDEtelCarnium');

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

test('SimulateResultStat test materials', () => {
  const totalEquipmentPrice = 75000 * 1000;
  const enableBlessings = Array(20).fill(false);

  const items: { material: RefineMaterial, materialPrice: number }[] = [
    { material: new Phracon(), materialPrice: 200 },
    { material: new Emveretarcon(), materialPrice: 1 },
    { material: new Oridecon(), materialPrice: 50000 },
    { material: new EnrichedOridecon(), materialPrice: 700000 },
    { material: new HDOridecon(), materialPrice: 2 },
    { material: new Etherdeocon(), materialPrice: 3 },
    { material: new EnrichedEtherdeocon(), materialPrice: 4 },
    { material: new HDEtherdeocon(), materialPrice: 5 },
    { material: new Bradium(), materialPrice: 6 },
    { material: new HDBradium(), materialPrice: 7 },
    { material: new EtelBradium(), materialPrice: 8 },
    { material: new HDEtelBradium(), materialPrice: 9 },
    { material: new Elunium(), materialPrice: 10 },
    { material: new EnrichedElunium(), materialPrice: 11 },
    { material: new HDElunium(), materialPrice: 12 },
    { material: new Ethernium(), materialPrice: 13 },
    { material: new EnrichedEthernium(), materialPrice: 14 },
    { material: new HDEthernium(), materialPrice: 15 },
    { material: new Carnium(), materialPrice: 16 },
    { material: new HDCarnium(), materialPrice: 17 },
    { material: new EtelCarnium(), materialPrice: 18 },
    { material: new HDEtelCarnium(), materialPrice: 19 },
  ];

  for (let i = 0; i < items.length; i++) {
    const { material, materialPrice } = items[i]
    const result = { refineLevel: 5, refineTimes: 1, material: material, numSuccess: 1 };
    const cost = totalEquipmentPrice + materialPrice;
    const calculator = new SimulateResultStatCalculator({ results: [result], enableBlessings, ...setup() });
    const stat = calculator.calculate();
    expect(stat[0].cost).toBe(cost);
  }
});
