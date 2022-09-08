import { EquipmentCategory, EquipmentLevel, ProbabilityCategory } from "../../../Core/Core";
import { query as queryRefineProbability } from "./RefineProbabilityTableQuerier";

test('RefineProbabilityTable query Weapon Level1 Normal', () => {
  const props = {
    equipmentCategory: EquipmentCategory.Weapon,
    equipmentLevel: EquipmentLevel.Level1,
    probabilityCategory: ProbabilityCategory.Normal
  };
  expect(queryRefineProbability({ ...props, refineLevel: 0 })).toBe(1.00);
  expect(queryRefineProbability({ ...props, refineLevel: 6 })).toBe(1.00);
  expect(queryRefineProbability({ ...props, refineLevel: 7 })).toBe(0.60);
  expect(queryRefineProbability({ ...props, refineLevel: 8 })).toBe(0.40);
  expect(queryRefineProbability({ ...props, refineLevel: 9 })).toBe(0.19);
  expect(queryRefineProbability({ ...props, refineLevel: 10 })).toBe(0.18);
  expect(queryRefineProbability({ ...props, refineLevel: 14 })).toBe(0.18);
  expect(queryRefineProbability({ ...props, refineLevel: 15 })).toBe(0.17);
  expect(queryRefineProbability({ ...props, refineLevel: 17 })).toBe(0.17);
  expect(queryRefineProbability({ ...props, refineLevel: 18 })).toBe(0.15);
});

test('RefineProbabilityTable query Weapon Level2 Normal', () => {
  const props = {
    equipmentCategory: EquipmentCategory.Weapon,
    equipmentLevel: EquipmentLevel.Level2,
    probabilityCategory: ProbabilityCategory.Normal
  };
  expect(queryRefineProbability({ ...props, refineLevel: 0 })).toBe(1.00);
  expect(queryRefineProbability({ ...props, refineLevel: 5 })).toBe(1.00);
  expect(queryRefineProbability({ ...props, refineLevel: 6 })).toBe(0.60);
  expect(queryRefineProbability({ ...props, refineLevel: 7 })).toBe(0.40);
  expect(queryRefineProbability({ ...props, refineLevel: 8 })).toBe(0.20);
  expect(queryRefineProbability({ ...props, refineLevel: 9 })).toBe(0.19);
  expect(queryRefineProbability({ ...props, refineLevel: 10 })).toBe(0.18);
  expect(queryRefineProbability({ ...props, refineLevel: 14 })).toBe(0.18);
  expect(queryRefineProbability({ ...props, refineLevel: 15 })).toBe(0.17);
  expect(queryRefineProbability({ ...props, refineLevel: 17 })).toBe(0.17);
  expect(queryRefineProbability({ ...props, refineLevel: 18 })).toBe(0.15);
});

test('RefineProbabilityTable query Weapon Level3 Normal', () => {
  const props = {
    equipmentCategory: EquipmentCategory.Weapon,
    equipmentLevel: EquipmentLevel.Level3,
    probabilityCategory: ProbabilityCategory.Normal
  };
  expect(queryRefineProbability({ ...props, refineLevel: 0 })).toBe(1.00);
  expect(queryRefineProbability({ ...props, refineLevel: 4 })).toBe(1.00);
  expect(queryRefineProbability({ ...props, refineLevel: 5 })).toBe(0.60);
  expect(queryRefineProbability({ ...props, refineLevel: 6 })).toBe(0.50);
  expect(queryRefineProbability({ ...props, refineLevel: 7 })).toBe(0.20);
  expect(queryRefineProbability({ ...props, refineLevel: 8 })).toBe(0.20);
  expect(queryRefineProbability({ ...props, refineLevel: 9 })).toBe(0.19);
  expect(queryRefineProbability({ ...props, refineLevel: 10 })).toBe(0.18);
  expect(queryRefineProbability({ ...props, refineLevel: 14 })).toBe(0.18);
  expect(queryRefineProbability({ ...props, refineLevel: 15 })).toBe(0.17);
  expect(queryRefineProbability({ ...props, refineLevel: 17 })).toBe(0.17);
  expect(queryRefineProbability({ ...props, refineLevel: 18 })).toBe(0.15);
});

test('RefineProbabilityTable query Weapon Level4 Normal and Armor Level1 Normal', () => {
  const props = [{
    equipmentCategory: EquipmentCategory.Weapon,
    equipmentLevel: EquipmentLevel.Level4,
    probabilityCategory: ProbabilityCategory.Normal
  }, {
    equipmentCategory: EquipmentCategory.Armor,
    equipmentLevel: EquipmentLevel.Level1,
    probabilityCategory: ProbabilityCategory.Normal
  }];
  for (let i = 0; i < props.length; i++) {
    expect(queryRefineProbability({ ...props[i], refineLevel: 0 })).toBe(1.00);
    expect(queryRefineProbability({ ...props[i], refineLevel: 3 })).toBe(1.00);
    expect(queryRefineProbability({ ...props[i], refineLevel: 4 })).toBe(0.60);
    expect(queryRefineProbability({ ...props[i], refineLevel: 5 })).toBe(0.40);
    expect(queryRefineProbability({ ...props[i], refineLevel: 6 })).toBe(0.40);
    expect(queryRefineProbability({ ...props[i], refineLevel: 7 })).toBe(0.20);
    expect(queryRefineProbability({ ...props[i], refineLevel: 8 })).toBe(0.20);
    expect(queryRefineProbability({ ...props[i], refineLevel: 9 })).toBe(0.09);
    expect(queryRefineProbability({ ...props[i], refineLevel: 10 })).toBe(0.08);
    expect(queryRefineProbability({ ...props[i], refineLevel: 14 })).toBe(0.08);
    expect(queryRefineProbability({ ...props[i], refineLevel: 15 })).toBe(0.07);
    expect(queryRefineProbability({ ...props[i], refineLevel: 17 })).toBe(0.07);
    expect(queryRefineProbability({ ...props[i], refineLevel: 18 })).toBe(0.05);
  }
});

test('RefineProbabilityTable query Weapon Level5 Normal and Armor Level2 Normal', () => {
  const props = [{
    equipmentCategory: EquipmentCategory.Weapon,
    equipmentLevel: EquipmentLevel.Level5,
    probabilityCategory: ProbabilityCategory.Normal
  }, {
    equipmentCategory: EquipmentCategory.Armor,
    equipmentLevel: EquipmentLevel.Level2,
    probabilityCategory: ProbabilityCategory.Normal
  }];
  for (let i = 0; i < props.length; i++) {
    expect(queryRefineProbability({ ...props[i], refineLevel: 0 })).toBe(1.00);
    expect(queryRefineProbability({ ...props[i], refineLevel: 2 })).toBe(1.00);
    expect(queryRefineProbability({ ...props[i], refineLevel: 3 })).toBe(0.60);
    expect(queryRefineProbability({ ...props[i], refineLevel: 4 })).toBe(0.60);
    expect(queryRefineProbability({ ...props[i], refineLevel: 5 })).toBe(0.40);
    expect(queryRefineProbability({ ...props[i], refineLevel: 6 })).toBe(0.40);
    expect(queryRefineProbability({ ...props[i], refineLevel: 7 })).toBe(0.20);
    expect(queryRefineProbability({ ...props[i], refineLevel: 8 })).toBe(0.20);
    expect(queryRefineProbability({ ...props[i], refineLevel: 9 })).toBe(0.09);
    expect(queryRefineProbability({ ...props[i], refineLevel: 10 })).toBe(0.08);
    expect(queryRefineProbability({ ...props[i], refineLevel: 13 })).toBe(0.08);
    expect(queryRefineProbability({ ...props[i], refineLevel: 14 })).toBe(0.07);
    expect(queryRefineProbability({ ...props[i], refineLevel: 17 })).toBe(0.07);
    expect(queryRefineProbability({ ...props[i], refineLevel: 18 })).toBe(0.05);
  }
});

test('RefineProbabilityTable query Weapon Level1 Special', () => {
  const props = {
    equipmentCategory: EquipmentCategory.Weapon,
    equipmentLevel: EquipmentLevel.Level1,
    probabilityCategory: ProbabilityCategory.Special
  };
  expect(queryRefineProbability({ ...props, refineLevel: 0 })).toBe(1.00);
  expect(queryRefineProbability({ ...props, refineLevel: 6 })).toBe(1.00);
  expect(queryRefineProbability({ ...props, refineLevel: 7 })).toBe(0.90);
  expect(queryRefineProbability({ ...props, refineLevel: 8 })).toBe(0.70);
  expect(queryRefineProbability({ ...props, refineLevel: 9 })).toBe(0.30);
  expect(queryRefineProbability({ ...props, refineLevel: 10 })).toBe(0.18);
  expect(queryRefineProbability({ ...props, refineLevel: 14 })).toBe(0.18);
  expect(queryRefineProbability({ ...props, refineLevel: 15 })).toBe(0.17);
  expect(queryRefineProbability({ ...props, refineLevel: 17 })).toBe(0.17);
  expect(queryRefineProbability({ ...props, refineLevel: 18 })).toBe(0.15);
});

test('RefineProbabilityTable query Weapon Level2 Special', () => {
  const props = {
    equipmentCategory: EquipmentCategory.Weapon,
    equipmentLevel: EquipmentLevel.Level2,
    probabilityCategory: ProbabilityCategory.Special
  };
  expect(queryRefineProbability({ ...props, refineLevel: 0 })).toBe(1.00);
  expect(queryRefineProbability({ ...props, refineLevel: 5 })).toBe(1.00);
  expect(queryRefineProbability({ ...props, refineLevel: 6 })).toBe(0.90);
  expect(queryRefineProbability({ ...props, refineLevel: 7 })).toBe(0.70);
  expect(queryRefineProbability({ ...props, refineLevel: 8 })).toBe(0.40);
  expect(queryRefineProbability({ ...props, refineLevel: 9 })).toBe(0.30);
  expect(queryRefineProbability({ ...props, refineLevel: 10 })).toBe(0.18);
  expect(queryRefineProbability({ ...props, refineLevel: 14 })).toBe(0.18);
  expect(queryRefineProbability({ ...props, refineLevel: 15 })).toBe(0.17);
  expect(queryRefineProbability({ ...props, refineLevel: 17 })).toBe(0.17);
  expect(queryRefineProbability({ ...props, refineLevel: 18 })).toBe(0.15);
});

test('RefineProbabilityTable query Weapon Level3 Special', () => {
  const props = {
    equipmentCategory: EquipmentCategory.Weapon,
    equipmentLevel: EquipmentLevel.Level3,
    probabilityCategory: ProbabilityCategory.Special
  };
  expect(queryRefineProbability({ ...props, refineLevel: 0 })).toBe(1.00);
  expect(queryRefineProbability({ ...props, refineLevel: 4 })).toBe(1.00);
  expect(queryRefineProbability({ ...props, refineLevel: 5 })).toBe(0.90);
  expect(queryRefineProbability({ ...props, refineLevel: 6 })).toBe(0.80);
  expect(queryRefineProbability({ ...props, refineLevel: 7 })).toBe(0.40);
  expect(queryRefineProbability({ ...props, refineLevel: 8 })).toBe(0.40);
  expect(queryRefineProbability({ ...props, refineLevel: 9 })).toBe(0.30);
  expect(queryRefineProbability({ ...props, refineLevel: 10 })).toBe(0.18);
  expect(queryRefineProbability({ ...props, refineLevel: 14 })).toBe(0.18);
  expect(queryRefineProbability({ ...props, refineLevel: 15 })).toBe(0.17);
  expect(queryRefineProbability({ ...props, refineLevel: 17 })).toBe(0.17);
  expect(queryRefineProbability({ ...props, refineLevel: 18 })).toBe(0.15);
});

test('RefineProbabilityTable query Weapon Level4 Special and Armor Level1 Special', () => {
  const props = [{
    equipmentCategory: EquipmentCategory.Weapon,
    equipmentLevel: EquipmentLevel.Level4,
    probabilityCategory: ProbabilityCategory.Special
  }, {
    equipmentCategory: EquipmentCategory.Armor,
    equipmentLevel: EquipmentLevel.Level1,
    probabilityCategory: ProbabilityCategory.Special
  }];
  for (let i = 0; i < props.length; i++) {
    expect(queryRefineProbability({ ...props[i], refineLevel: 0 })).toBe(1.00);
    expect(queryRefineProbability({ ...props[i], refineLevel: 3 })).toBe(1.00);
    expect(queryRefineProbability({ ...props[i], refineLevel: 4 })).toBe(0.90);
    expect(queryRefineProbability({ ...props[i], refineLevel: 5 })).toBe(0.70);
    expect(queryRefineProbability({ ...props[i], refineLevel: 6 })).toBe(0.70);
    expect(queryRefineProbability({ ...props[i], refineLevel: 7 })).toBe(0.40);
    expect(queryRefineProbability({ ...props[i], refineLevel: 8 })).toBe(0.40);
    expect(queryRefineProbability({ ...props[i], refineLevel: 9 })).toBe(0.20);
    expect(queryRefineProbability({ ...props[i], refineLevel: 10 })).toBe(0.08);
    expect(queryRefineProbability({ ...props[i], refineLevel: 14 })).toBe(0.08);
    expect(queryRefineProbability({ ...props[i], refineLevel: 15 })).toBe(0.07);
    expect(queryRefineProbability({ ...props[i], refineLevel: 17 })).toBe(0.07);
    expect(queryRefineProbability({ ...props[i], refineLevel: 18 })).toBe(0.05);
  }
});

test('RefineProbabilityTable query Weapon Level5 Special and Armor Level2 Special', () => {
  const props = [{
    equipmentCategory: EquipmentCategory.Weapon,
    equipmentLevel: EquipmentLevel.Level5,
    probabilityCategory: ProbabilityCategory.Special
  }, {
    equipmentCategory: EquipmentCategory.Armor,
    equipmentLevel: EquipmentLevel.Level2,
    probabilityCategory: ProbabilityCategory.Special
  }];
  for (let i = 0; i < props.length; i++) {
    expect(queryRefineProbability({ ...props[i], refineLevel: 0 })).toBe(1.00);
    expect(queryRefineProbability({ ...props[i], refineLevel: 2 })).toBe(1.00);
    expect(queryRefineProbability({ ...props[i], refineLevel: 3 })).toBe(0.90);
    expect(queryRefineProbability({ ...props[i], refineLevel: 4 })).toBe(0.70);
    expect(queryRefineProbability({ ...props[i], refineLevel: 5 })).toBe(0.60);
    expect(queryRefineProbability({ ...props[i], refineLevel: 6 })).toBe(0.60);
    expect(queryRefineProbability({ ...props[i], refineLevel: 7 })).toBe(0.40);
    expect(queryRefineProbability({ ...props[i], refineLevel: 8 })).toBe(0.40);
    expect(queryRefineProbability({ ...props[i], refineLevel: 9 })).toBe(0.20);
    expect(queryRefineProbability({ ...props[i], refineLevel: 10 })).toBe(0.15);
    expect(queryRefineProbability({ ...props[i], refineLevel: 13 })).toBe(0.15);
    expect(queryRefineProbability({ ...props[i], refineLevel: 14 })).toBe(0.10);
    expect(queryRefineProbability({ ...props[i], refineLevel: 17 })).toBe(0.10);
    expect(queryRefineProbability({ ...props[i], refineLevel: 18 })).toBe(0.07);
  }
});

test('RefineProbabilityTable query with weapon refine skill', () => {
  const propsLevel1 = {
    equipmentCategory: EquipmentCategory.Weapon,
    equipmentLevel: EquipmentLevel.Level1,
    probabilityCategory: ProbabilityCategory.Normal,
    weaponRefineEnabled: true
  };
  expect(queryRefineProbability({ ...propsLevel1, refineLevel: 0 })).toBe(1.00);
  expect(queryRefineProbability({ ...propsLevel1, refineLevel: 6 })).toBe(1.00);
  expect(queryRefineProbability({ ...propsLevel1, refineLevel: 7 })).toBe(0.70);
  expect(queryRefineProbability({ ...propsLevel1, refineLevel: 8 })).toBe(0.50);
  expect(queryRefineProbability({ ...propsLevel1, refineLevel: 9 })).toBe(0.29);

  const propsLevel2 = {
    equipmentCategory: EquipmentCategory.Weapon,
    equipmentLevel: EquipmentLevel.Level2,
    probabilityCategory: ProbabilityCategory.Normal,
    weaponRefineEnabled: true
  };
  expect(queryRefineProbability({ ...propsLevel2, refineLevel: 0 })).toBe(1.00);
  expect(queryRefineProbability({ ...propsLevel2, refineLevel: 5 })).toBe(1.00);
  expect(queryRefineProbability({ ...propsLevel2, refineLevel: 6 })).toBe(0.70);
  expect(queryRefineProbability({ ...propsLevel2, refineLevel: 7 })).toBe(0.50);
  expect(queryRefineProbability({ ...propsLevel2, refineLevel: 8 })).toBe(0.30);
  expect(queryRefineProbability({ ...propsLevel2, refineLevel: 9 })).toBe(0.29);

  const propsLevel3 = {
    equipmentCategory: EquipmentCategory.Weapon,
    equipmentLevel: EquipmentLevel.Level3,
    probabilityCategory: ProbabilityCategory.Normal,
    weaponRefineEnabled: true
  };
  expect(queryRefineProbability({ ...propsLevel3, refineLevel: 0 })).toBe(1.00);
  expect(queryRefineProbability({ ...propsLevel3, refineLevel: 4 })).toBe(1.00);
  expect(queryRefineProbability({ ...propsLevel3, refineLevel: 5 })).toBe(0.70);
  expect(queryRefineProbability({ ...propsLevel3, refineLevel: 6 })).toBe(0.60);
  expect(queryRefineProbability({ ...propsLevel3, refineLevel: 7 })).toBe(0.30);
  expect(queryRefineProbability({ ...propsLevel3, refineLevel: 8 })).toBe(0.30);
  expect(queryRefineProbability({ ...propsLevel3, refineLevel: 9 })).toBe(0.29);

  const propsLevel4 = {
    equipmentCategory: EquipmentCategory.Weapon,
    equipmentLevel: EquipmentLevel.Level4,
    probabilityCategory: ProbabilityCategory.Normal,
    weaponRefineEnabled: true
  };
  expect(queryRefineProbability({ ...propsLevel4, refineLevel: 0 })).toBe(1.00);
  expect(queryRefineProbability({ ...propsLevel4, refineLevel: 3 })).toBe(1.00);
  expect(queryRefineProbability({ ...propsLevel4, refineLevel: 4 })).toBe(0.70);
  expect(queryRefineProbability({ ...propsLevel4, refineLevel: 5 })).toBe(0.50);
  expect(queryRefineProbability({ ...propsLevel4, refineLevel: 6 })).toBe(0.50);
  expect(queryRefineProbability({ ...propsLevel4, refineLevel: 7 })).toBe(0.30);
  expect(queryRefineProbability({ ...propsLevel4, refineLevel: 8 })).toBe(0.30);
  expect(queryRefineProbability({ ...propsLevel4, refineLevel: 9 })).toBe(0.19);
});
