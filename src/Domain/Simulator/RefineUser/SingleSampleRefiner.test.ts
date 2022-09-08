import { EquipmentCategory, EquipmentLevel } from "../../../Core/Core";
import { query as queryRefineMaterial } from "../../Table/RefineMaterialTable/RefineMaterialTableQuerier";
import SingleSampleRefiner from "./SingleSampleRefiner";

interface IProps { 
  blessingEnabledList: boolean[]
  start: number
  end: number
  weaponRefineEnabled: boolean 
}

function getResults(props: IProps) {
  const refineMaterialQueryProps = {
    equipmentCategory: EquipmentCategory.Weapon,
    equipmentLevel: EquipmentLevel.Level1,
  };
  const materials = queryRefineMaterial(refineMaterialQueryProps).map(m => m[0]);
  const refiner = new SingleSampleRefiner({
    ...refineMaterialQueryProps,
    ...props,
    materials: materials,
  });
  return refiner.refine();
}

test('Single sample refine', () => {
  const results = getResults({
    blessingEnabledList: Array(20).fill(false),
    start: 0,
    end: 4,
    weaponRefineEnabled: false
  });

  expect(results.length).toBe(4);
  for (let i = 0; i < 4; i++) {
    expect(results[i].numSuccess).toBe(1);
    expect(results[i].refineTimes).toBe(1);
    expect(results[i].numBlessings).toBe(0);
  }
});


test('Single sample enable blessing', () => {
  const results = getResults({
    blessingEnabledList: [false, false, false, false, false,
                          false, false, true,  true,  true,
                          true,  true,  true,  true,  false,
                          false, false, false, false, false],
    start: 7,
    end: 14,
    weaponRefineEnabled: false
  });

  expect(results.length).toBe(7);
  expect(results[0].numBlessings).toBe(results[0].refineTimes * 1); // 7
  expect(results[1].numBlessings).toBe(results[1].refineTimes * 2); // 8
  expect(results[2].numBlessings).toBe(results[2].refineTimes * 3); // 9
  expect(results[3].numBlessings).toBe(results[3].refineTimes * 4); // 10
  expect(results[4].numBlessings).toBe(results[4].refineTimes * 4); // 11
  expect(results[5].numBlessings).toBe(results[5].refineTimes * 9); // 12
  expect(results[6].numBlessings).toBe(results[6].refineTimes * 15); // 13
  for (let i = 0; i < 7; i++) {
    expect(results[i].numSuccess).toBe(1);
  }
});

test('Single sample disable blessing', () => {
  const results = getResults({
    blessingEnabledList: Array(20).fill(false),
    start: 7,
    end: 14,
    weaponRefineEnabled: false
  });

  for (let i = 0; i < results.length; i++) {
    expect(results[i].numBlessings).toBe(0);
  }
});

test('Single sample invalid blessing', () => {
  const results = getResults({
    blessingEnabledList: [false, false, false, false, false,
                          false, false, false, false, false,
                          false, false, false, false, true,
                          true,  true,  true,  true,  true],
    start: 14,
    end: 20,
    weaponRefineEnabled: false,
  });
  for (let i = 0; i < results.length; i++) {
    expect(results[i].numBlessings).toBe(0);
  }
});

test('Single sample invalid blessing with weapon refine enabled', () => {
  const results = getResults({
    blessingEnabledList: [false, false, false, false, false,
                          false, false, true,  true,  true,
                          true,  true,  true,  true,  false,
                          false, false, false, false, false],
    start: 7,
    end: 10,
    weaponRefineEnabled: true,
  });
  for (let i = 0; i < results.length; i++) {
    expect(results[i].numBlessings).toBe(0);
  }
});