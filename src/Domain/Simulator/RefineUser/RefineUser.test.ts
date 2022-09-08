import { EquipmentCategory, EquipmentLevel } from "../../../Core/Core";
import { RefineUserProps } from "../../../Core/Simulator";
import { query as queryRefineMaterial } from "../../Table/RefineMaterialTable/RefineMaterialTableQuerier";
import RefineResult from "../RefineResult";
import RefineUser from "./RefineUser";

interface IProps { 
  blessingEnabledList: boolean[]
  numSamples: number
  start: number
  end: number
  weaponRefineEnabled: boolean 
}

function getRefineUserProps(props: IProps): RefineUserProps {
  const refineMaterialQueryProps = {
    equipmentCategory: EquipmentCategory.Weapon,
    equipmentLevel: EquipmentLevel.Level1,
  };
  const materials = queryRefineMaterial(refineMaterialQueryProps).map(m => m[0]);
  return {
    ...refineMaterialQueryProps,
    ...props,
    materials: materials,
  };
}

test('RefineUser refine', () => {
  const props: RefineUserProps = getRefineUserProps({
    blessingEnabledList: Array(20).fill(false),
    numSamples: 100,
    start: 0,
    end: 4,
    weaponRefineEnabled: false,
  });
  const user = new RefineUser(props);
  const refineResultProps = { 
    numBlessings: 0,
    numSuccess: 100,
    refineTimes: 100 
  };
  const actual: RefineResult[] = user.refine();
  const expected: RefineResult[] = [
    new RefineResult({ ...refineResultProps, material: props.materials[0], refineLevel: 0 }),
    new RefineResult({ ...refineResultProps, material: props.materials[1], refineLevel: 1 }),
    new RefineResult({ ...refineResultProps, material: props.materials[2], refineLevel: 2 }),
    new RefineResult({ ...refineResultProps, material: props.materials[3], refineLevel: 3 }),
  ];

  expect(actual).toStrictEqual(expected);
});

test('enable blessing', () => {
  const props: RefineUserProps = getRefineUserProps({
    blessingEnabledList: [false, false, false, false, false,
                          false, false, true,  true,  true,
                          true,  true,  true,  true,  false,
                          false, false, false, false, false],
    numSamples: 3,
    start: 7,
    end: 14,
    weaponRefineEnabled: false,
  });
  const user = new RefineUser(props);
  const results = user.refine();
  expect(results.length).toBe(7);
  expect(results[0].numBlessings).toBe(results[0].refineTimes * 1); // 7
  expect(results[1].numBlessings).toBe(results[1].refineTimes * 2); // 8
  expect(results[2].numBlessings).toBe(results[2].refineTimes * 3); // 9
  expect(results[3].numBlessings).toBe(results[3].refineTimes * 4); // 10
  expect(results[4].numBlessings).toBe(results[4].refineTimes * 4); // 11
  expect(results[5].numBlessings).toBe(results[5].refineTimes * 9); // 12
  expect(results[6].numBlessings).toBe(results[6].refineTimes * 15); // 13

  for (let i = 0; i < results.length; i++) {
    expect(results[i].numSuccess).toBe(3);
  }
});

test('disable blessing', () => {
  const props: RefineUserProps = getRefineUserProps({
    blessingEnabledList: [false, false, false, false, false,
                          false, false, false, false, false,
                          false, false, false, false, false,
                          false, false, false, false, false],
    numSamples: 100,
    start: 7,
    end: 14,
    weaponRefineEnabled: false,
  });
  const user = new RefineUser(props);
  const results = user.refine();
  for (let i = 0; i < results.length; i++) {
    expect(results[i].numBlessings).toBe(0);
  }
});

test('invalid blessing enabled', () => {
  const props: RefineUserProps = getRefineUserProps({
    blessingEnabledList: [false, false, false, false, false,
                          false, false, false, false, false,
                          false, false, false, false, true,
                          true,  true,  true,  true,  true],
    numSamples: 100,
    start: 14,
    end: 20,
    weaponRefineEnabled: false,
  });
  const user = new RefineUser(props);
  const results = user.refine();
  for (let i = 0; i < results.length; i++) {
    expect(results[i].numBlessings).toBe(0);
  }
});

test('invalid blessing enabled with weapon refine enabled', () => {
  const props: RefineUserProps = getRefineUserProps({
    blessingEnabledList: [false, false, false, false, false,
                          false, false, true,  true,  true,
                          true,  true,  true,  true,  false,
                          false, false, false, false, false],
    numSamples: 3,
    start: 7,
    end: 10,
    weaponRefineEnabled: true,
  });
  const user = new RefineUser(props);
  const results = user.refine();
  for (let i = 0; i < results.length; i++) {
    expect(results[i].numBlessings).toBe(0);
  }
});