import { EquipmentCategory, EquipmentLevel } from "../../../Core/Core";
import { query as queryRefineMaterial } from "../../Table/RefineMaterialTable/RefineMaterialTableQuerier";
import RefineStatsCalculator from "./RefineStatsCalculator";

function getDefaultRefinePriceProps() {
  return {
    blessingPrice: 100,
    equipmentPrice: 20,
    refinePriceBeforeTen: 200,
    refinePriceAfterTen: 400,

    Phracon: 400,
    Emveretarcon: 6,
    Oridecon: 7,
    Etherdeocon: 8,
    Bradium: 800,
    EtelBradium: 10,

    EnrichedOridecon: 11,
    HDOridecon: 12,
    EnrichedEtherdeocon: 13,
    HDBradium: 14,
    HDEtherdeocon: 15,
    HDEtelBradium: 16,

    Elunium: 17,
    Etherium: 18,
    Carnium: 19,
    EtelCarnium: 20,

    EnrichedElunium: 21,
    HDElunium: 22,
    EnrichedEthernium: 23,
    HDEtelCarnium: 24,
    HDEthernium: 25,
    HDCarnium: 26,
  };
}

test('stats calculate', () => {
  const refinePriceProps = getDefaultRefinePriceProps();
  const numSample = 5;
  const materials = queryRefineMaterial({
    equipmentCategory: EquipmentCategory.Weapon,
    equipmentLevel: EquipmentLevel.Level1,
  }).map(p => p[0]);
  const refineResults = materials.map((material, i) => {
    return {
      material,
      refineLevel: i,
      numBlessings: i + 1,
      numSuccess: i + 1,
      refineTimes: i + 1
    };
  });
  const calculator = new RefineStatsCalculator({
    refinePriceProps,
    refineResults,
    numSample
  });

  const expectedEquipmentCosts = [
    (20 * 5) / 1,
    (20 * 5) / 2,
    (20 * 5) / 3,
    (20 * 5) / 4,
    (20 * 5) / 5,
    (20 * 5) / 6,
    (20 * 5) / 7,
    (20 * 5) / 8,
    (20 * 5) / 9,
    (20 * 5) / 10,
    (20 * 5) / 11,
    (20 * 5) / 12,
    (20 * 5) / 13,
    (20 * 5) / 14,
    (20 * 5) / 15,
    (20 * 5) / 16,
    (20 * 5) / 17,
    (20 * 5) / 18,
    (20 * 5) / 19,
    (20 * 5) / 20,
  ];
  const actualEquipmentCosts = calculator.calculateEquipmentCost();
  expect(actualEquipmentCosts).toStrictEqual(expectedEquipmentCosts);

  const expectedBlessingCosts = [
    (100 * 1) / 1,
    (100 * 3) / 2,
    (100 * 6) / 3,
    (100 * 10) / 4,
    (100 * 15) / 5,
    (100 * 21) / 6,
    (100 * 28) / 7,
    (100 * 36) / 8,
    (100 * 45) / 9,
    (100 * 55) / 10,
    (100 * 66) / 11,
    (100 * 78) / 12,
    (100 * 91) / 13,
    (100 * 105) / 14,
    (100 * 120) / 15,
    (100 * 136) / 16,
    (100 * 153) / 17,
    (100 * 171) / 18,
    (100 * 190) / 19,
    (100 * 210) / 20,
  ];
  const actualBlessingCosts = calculator.calculateBlessingCost();
  expect(expectedBlessingCosts).toStrictEqual(actualBlessingCosts);

  const expectedRefineCosts = [
    (200 * 1) / 1,
    (200 * 3) / 2,
    (200 * 6) / 3,
    (200 * 10) / 4,
    (200 * 15) / 5,
    (200 * 21) / 6,
    (200 * 28) / 7,
    (200 * 36) / 8,
    (200 * 45) / 9,
    (200 * 55) / 10,
    ((200 * 55) + (400 * 11)) / 11,
    ((200 * 55) + (400 * 23)) / 12,
    ((200 * 55) + (400 * 36)) / 13,
    ((200 * 55) + (400 * 50)) / 14,
    ((200 * 55) + (400 * 65)) / 15,
    ((200 * 55) + (400 * 81)) / 16,
    ((200 * 55) + (400 * 98)) / 17,
    ((200 * 55) + (400 * 116)) / 18,
    ((200 * 55) + (400 * 135)) / 19,
    ((200 * 55) + (400 * 155)) / 20,
  ];
  const actualRefineCost = calculator.calculateRefineCost();
  expect(expectedRefineCosts).toStrictEqual(actualRefineCost);

  const expectedMaterialCosts = [
    (400 * 1) / 1,
    (400 * 3) / 2,
    (400 * 6) / 3,
    (400 * 10) / 4,
    (400 * 15) / 5,
    (400 * 21) / 6,
    (400 * 28) / 7,
    (400 * 36) / 8,
    (400 * 45) / 9,
    (400 * 55) / 10,
    ((400 * 55) + (800 * 11)) / 11,
    ((400 * 55) + (800 * 23)) / 12,
    ((400 * 55) + (800 * 36)) / 13,
    ((400 * 55) + (800 * 50)) / 14,
    ((400 * 55) + (800 * 65)) / 15,
    ((400 * 55) + (800 * 81)) / 16,
    ((400 * 55) + (800 * 98)) / 17,
    ((400 * 55) + (800 * 116)) / 18,
    ((400 * 55) + (800 * 135)) / 19,
    ((400 * 55) + (800 * 155)) / 20,
  ];
  const actualMaterialCost = calculator.calculateMaterialCost();
  expect(expectedMaterialCosts).toStrictEqual(actualMaterialCost);

  const stats = calculator.calculate();
  for (let i = 0; i < stats.length; i++) {
    expect(stats[i].refineLevel).toBe(i);
    expect(stats[i].numBlessings).toBe(i + 1);
    expect(stats[i].numSuccess).toBe(i + 1);
    expect(stats[i].refineTimes).toBe(i + 1);
    expect(stats[i].cost).toBe(
      expectedEquipmentCosts[i] + 
      expectedBlessingCosts[i] + 
      expectedRefineCosts[i] + 
      expectedMaterialCosts[i]);
  }
});