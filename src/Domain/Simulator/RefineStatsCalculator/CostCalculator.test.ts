import CostCalculator from "./CostCalculator";

test('calculate one element', () => {
  const priceList = [10];
  const quantityList = [4];
  const numSuccessList = [2];
  const calculator = new CostCalculator(numSuccessList);
  const results = calculator.calculate(priceList, quantityList);

  expect(results.length).toBe(1);
  expect(results[0]).toBe(10 * 4 / 2);
});

test('calculate one element with initial', () => {
  const priceList = [20];
  const quantityList = [0];
  const numSuccessList = [2];
  const initialCost = 10;
  const numSamples = 3;
  const calculator = new CostCalculator(numSuccessList);
  const results = calculator.calculate(priceList, quantityList, initialCost, numSamples);

  expect(results.length).toBe(1);
  expect(results[0]).toBe(10 * 3 / 2);
});

test('calculate multiple element', () => {
  const priceList = [10, 20, 30];
  const quantityList = [4, 8, 6];
  const numSuccessList = [4, 2, 1];
  const calculator = new CostCalculator(numSuccessList);
  const results = calculator.calculate(priceList, quantityList);

  expect(results.length).toBe(3);
  expect(results[0]).toBe((10 * 4) / 4);
  expect(results[1]).toBe((10 * 4 + 20 * 8) / 2);
  expect(results[2]).toBe((10 * 4 + 20 * 8 + 30 * 6) / 1);
});

test('calculate multiple element with inital', () => {
  const priceList = [10, 20, 30];
  const quantityList = [4, 8, 6];
  const numSuccessList = [4, 2, 1];
  const initialCost = 10;
  const numSamples = 8;
  const calculator = new CostCalculator(numSuccessList);
  const results = calculator.calculate(priceList, quantityList, initialCost, numSamples);

  expect(results.length).toBe(3);
  expect(results[0]).toBe((8 * 10 + 10 * 4) / 4);
  expect(results[1]).toBe((8 * 10 + 10 * 4 + 20 * 8) / 2);
  expect(results[2]).toBe((8 * 10 + 10 * 4 + 20 * 8 + 30 * 6) / 1);
});
