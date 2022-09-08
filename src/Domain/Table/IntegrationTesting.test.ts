import { EquipmentCategory, EquipmentLevel } from "../../Core/Core";
import { query as queryRefineMaterial } from "./RefineMaterialTable/RefineMaterialTableQuerier";
import { query as queryRefineProbability } from "./RefineProbabilityTable/RefineProbabilityTableQuerier";

function getIndividualRefineProbabilities(props: {
    equipmentCategory: EquipmentCategory,
    equipmentLevel: EquipmentLevel
  }) {
  const currentTable = queryRefineMaterial(props);
  return currentTable.map((refineMaterials, refineLevel) => 
    refineMaterials.map(refineMaterial => 
      queryRefineProbability({
        ...props,
        ...refineMaterial,
        refineLevel
      })
    )
  );
}

test('Individual refine probabilities for refine material table of weapon level1', () => {
  const props = {
    equipmentCategory: EquipmentCategory.Weapon,
    equipmentLevel: EquipmentLevel.Level1,
  };
  const expected = [
    [1.00],
    [1.00],
    [1.00],
    [1.00],
    [1.00],
    [1.00],
    [1.00],
    [0.60],
    [0.40],
    [0.19],
    [0.18, 0.18],
    [0.18, 0.18],
    [0.18, 0.18],
    [0.18, 0.18],
    [0.18, 0.18],
    [0.17, 0.17],
    [0.17, 0.17],
    [0.17, 0.17],
    [0.15, 0.15],
    [0.15, 0.15],
  ];
  const actual = getIndividualRefineProbabilities(props);
  expect(actual).toStrictEqual(expected);
});

test('Individual refine probabilities for refine material table of weapon level2', () => {
  const props = {
    equipmentCategory: EquipmentCategory.Weapon,
    equipmentLevel: EquipmentLevel.Level2,
  };
  const expected = [
    [1.00],
    [1.00],
    [1.00],
    [1.00],
    [1.00],
    [1.00],
    [0.60],
    [0.40],
    [0.20],
    [0.19],
    [0.18, 0.18],
    [0.18, 0.18],
    [0.18, 0.18],
    [0.18, 0.18],
    [0.18, 0.18],
    [0.17, 0.17],
    [0.17, 0.17],
    [0.17, 0.17],
    [0.15, 0.15],
    [0.15, 0.15],
  ];
  const actual = getIndividualRefineProbabilities(props);
  expect(actual).toStrictEqual(expected);
});

test('Individual refine probabilities for refine material table of weapon level3', () => {
  const props = {
    equipmentCategory: EquipmentCategory.Weapon,
    equipmentLevel: EquipmentLevel.Level3,
  };
  const expected = [
    [1.00, 1.00],
    [1.00, 1.00],
    [1.00, 1.00],
    [1.00, 1.00],
    [1.00, 1.00],
    [0.60, 0.90],
    [0.50, 0.80],
    [0.20, 0.40, 0.40],
    [0.20, 0.40, 0.40],
    [0.19, 0.30, 0.30],
    [0.18, 0.18],
    [0.18, 0.18],
    [0.18, 0.18],
    [0.18, 0.18],
    [0.18, 0.18],
    [0.17, 0.17],
    [0.17, 0.17],
    [0.17, 0.17],
    [0.15, 0.15],
    [0.15, 0.15],
  ];
  const actual = getIndividualRefineProbabilities(props);
  expect(actual).toStrictEqual(expected);
});

test('Individual refine probabilities for refine material table of weapon level4 and armor level1', () => {
  const propsList = [{
    equipmentCategory: EquipmentCategory.Weapon,
    equipmentLevel: EquipmentLevel.Level4,
  }, {
    equipmentCategory: EquipmentCategory.Armor,
    equipmentLevel: EquipmentLevel.Level1,
  }];
  const expected = [
    [1.00, 1.00],
    [1.00, 1.00],
    [1.00, 1.00],
    [1.00, 1.00],
    [0.60, 0.90],
    [0.40, 0.70],
    [0.40, 0.70],
    [0.20, 0.40, 0.40],
    [0.20, 0.40, 0.40],
    [0.09, 0.20, 0.20],
    [0.08, 0.08],
    [0.08, 0.08],
    [0.08, 0.08],
    [0.08, 0.08],
    [0.08, 0.08],
    [0.07, 0.07],
    [0.07, 0.07],
    [0.07, 0.07],
    [0.05, 0.05],
    [0.05, 0.05],
  ];
  for (let i = 0; i < 2; i++) {
    const props = propsList[i];
    const actual = getIndividualRefineProbabilities(props);
    expect(actual).toStrictEqual(expected);
  }
});

test('Individual refine probabilities for refine material table of weapon level5 and armor level2', () => {
  const propsList = [{
    equipmentCategory: EquipmentCategory.Weapon,
    equipmentLevel: EquipmentLevel.Level5,
  }, {
    equipmentCategory: EquipmentCategory.Armor,
    equipmentLevel: EquipmentLevel.Level2,
  }];
  const expected = [
    [1.00, 1.00],
    [1.00, 1.00],
    [1.00, 1.00],
    [0.60, 0.90],
    [0.60, 0.70],
    [0.40, 0.60],
    [0.40, 0.60],
    [0.20, 0.40],
    [0.20, 0.40],
    [0.09, 0.20],
    [0.08, 0.15],
    [0.08, 0.15],
    [0.08, 0.15],
    [0.08, 0.15],
    [0.07, 0.10],
    [0.07, 0.10],
    [0.07, 0.10],
    [0.07, 0.10],
    [0.05, 0.07],
    [0.05, 0.07],
  ];
  for (let i = 0; i < 2; i++) {
    const props = propsList[i];
    const actual = getIndividualRefineProbabilities(props);
    expect(actual).toStrictEqual(expected);
  }
});

test('Individual refine probabilities for refine material table of weapon level1 with weapon refine skill', () => {
  const props = {
    equipmentCategory: EquipmentCategory.Weapon,
    equipmentLevel: EquipmentLevel.Level1,
    weaponRefineEnabled: true
  };
  const expected = [
    [1.00],
    [1.00],
    [1.00],
    [1.00],
    [1.00],
    [1.00],
    [1.00],
    [0.70],
    [0.50],
    [0.29],
    [0.18, 0.18],
    [0.18, 0.18],
    [0.18, 0.18],
    [0.18, 0.18],
    [0.18, 0.18],
    [0.17, 0.17],
    [0.17, 0.17],
    [0.17, 0.17],
    [0.15, 0.15],
    [0.15, 0.15],
  ];
  const actual = getIndividualRefineProbabilities(props);
  expect(actual).toStrictEqual(expected);
});

test('Individual refine probabilities for refine material table of weapon level2 with weapon refine skill', () => {
  const props = {
    equipmentCategory: EquipmentCategory.Weapon,
    equipmentLevel: EquipmentLevel.Level2,
    weaponRefineEnabled: true
  };
  const expected = [
    [1.00],
    [1.00],
    [1.00],
    [1.00],
    [1.00],
    [1.00],
    [0.70],
    [0.50],
    [0.30],
    [0.29],
    [0.18, 0.18],
    [0.18, 0.18],
    [0.18, 0.18],
    [0.18, 0.18],
    [0.18, 0.18],
    [0.17, 0.17],
    [0.17, 0.17],
    [0.17, 0.17],
    [0.15, 0.15],
    [0.15, 0.15],
  ];
  const actual = getIndividualRefineProbabilities(props);
  expect(actual).toStrictEqual(expected);
});

test('Individual refine probabilities for refine material table of weapon level3 with weapon refine skill', () => {
  const props = {
    equipmentCategory: EquipmentCategory.Weapon,
    equipmentLevel: EquipmentLevel.Level3,
    weaponRefineEnabled: true
  };
  const expected = [
    [1.00, 1.00],
    [1.00, 1.00],
    [1.00, 1.00],
    [1.00, 1.00],
    [1.00, 1.00],
    [0.70, 0.90],
    [0.60, 0.80],
    [0.30, 0.40, 0.40],
    [0.30, 0.40, 0.40],
    [0.29, 0.30, 0.30],
    [0.18, 0.18],
    [0.18, 0.18],
    [0.18, 0.18],
    [0.18, 0.18],
    [0.18, 0.18],
    [0.17, 0.17],
    [0.17, 0.17],
    [0.17, 0.17],
    [0.15, 0.15],
    [0.15, 0.15],
  ];
  const actual = getIndividualRefineProbabilities(props);
  expect(actual).toStrictEqual(expected);
});

test('Individual refine probabilities for refine material table of weapon level4 with weapon refine skill', () => {
  const props = {
    equipmentCategory: EquipmentCategory.Weapon,
    equipmentLevel: EquipmentLevel.Level4,
    weaponRefineEnabled: true
  };
  const expected = [
    [1.00, 1.00],
    [1.00, 1.00],
    [1.00, 1.00],
    [1.00, 1.00],
    [0.70, 0.90],
    [0.50, 0.70],
    [0.50, 0.70],
    [0.30, 0.40, 0.40],
    [0.30, 0.40, 0.40],
    [0.19, 0.20, 0.20],
    [0.08, 0.08],
    [0.08, 0.08],
    [0.08, 0.08],
    [0.08, 0.08],
    [0.08, 0.08],
    [0.07, 0.07],
    [0.07, 0.07],
    [0.07, 0.07],
    [0.05, 0.05],
    [0.05, 0.05],
  ];
  const actual = getIndividualRefineProbabilities(props);
  expect(actual).toStrictEqual(expected);
});
