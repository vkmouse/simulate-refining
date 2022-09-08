import { EquipmentCategory, EquipmentLevel } from "../../../../Core/Core";
import RefineUserPropsStore from "../../../../Data/Store/RefineUserPropsStore";
import { queryRefineMaterialByChineseName } from "../../../../Domain/API";
import RefineProcessSelectedMaterialController from "./RefineProcessSelectedMaterialController";

function createController() {
  const store = new RefineUserPropsStore();
  const controller = new RefineProcessSelectedMaterialController({
    refineUserPropsStore: store,
  });
  return { 
    controller,
    store
  };
}

test('LocalSelectedMaterialController get selected material', () => {
  const { store, controller } = createController();

  store.setEquipmentCategory(EquipmentCategory.Weapon);
  store.setEquipmentLevel(EquipmentLevel.Level1);
  expect(controller.getSelectedMaterial(0).chineseName).toBe('強化武器金屬-級數一');
  expect(controller.getSelectedMaterial(10).chineseName).toBe('鈽鐳礦石');
  expect(store.materials[0]).toBe(controller.getSelectedMaterial(0));
  expect(store.materials[10]).toBe(controller.getSelectedMaterial(10));
  
  store.setEquipmentLevel(EquipmentLevel.Level2);
  expect(controller.getSelectedMaterial(0).chineseName).toBe('強化武器金屬-級數二');
  expect(store.materials[0]).toBe(controller.getSelectedMaterial(0));

  store.setEquipmentLevel(EquipmentLevel.Level3);
  expect(controller.getSelectedMaterial(0).chineseName).toBe('神之金屬');
  expect(store.materials[0]).toBe(controller.getSelectedMaterial(0));

  store.setEquipmentLevel(EquipmentLevel.Level5);
  expect(controller.getSelectedMaterial(0).chineseName).toBe('乙太神之金屬');
  expect(controller.getSelectedMaterial(10).chineseName).toBe('乙太鈽鐳');
  expect(store.materials[0]).toBe(controller.getSelectedMaterial(0));
  expect(store.materials[10]).toBe(controller.getSelectedMaterial(10));

  store.setEquipmentLevel(EquipmentLevel.Level1);
  store.setEquipmentCategory(EquipmentCategory.Armor);
  expect(controller.getSelectedMaterial(0).chineseName).toBe('鋁');
  expect(controller.getSelectedMaterial(10).chineseName).toBe('鈣礦石');
  expect(store.materials[0]).toBe(controller.getSelectedMaterial(0));
  expect(store.materials[10]).toBe(controller.getSelectedMaterial(10));

  store.setEquipmentLevel(EquipmentLevel.Level2);
  expect(controller.getSelectedMaterial(0).chineseName).toBe('乙太鋁');
  expect(controller.getSelectedMaterial(10).chineseName).toBe('乙太鈣礦石');
  expect(store.materials[0]).toBe(controller.getSelectedMaterial(0));
  expect(store.materials[10]).toBe(controller.getSelectedMaterial(10));
});

test('LocalSelectedMaterialController set selected material', () => {
  const { store, controller } = createController();
  
  store.setEquipmentCategory(EquipmentCategory.Weapon);
  store.setEquipmentLevel(EquipmentLevel.Level3);
  expect(store.materials[0].chineseName).toBe('神之金屬');

  const material = queryRefineMaterialByChineseName('濃縮神之金屬');
  controller.setSelectedMaterial(0, material);
  expect(store.materials[0].chineseName).toBe('濃縮神之金屬');
});

test('LocalSelectedMaterialController save previous value', () => {
  const { store, controller } = createController();
  
  store.setEquipmentCategory(EquipmentCategory.Weapon);
  store.setEquipmentLevel(EquipmentLevel.Level3);
  expect(store.materials[0].chineseName).toBe('神之金屬');

  const material = queryRefineMaterialByChineseName('濃縮神之金屬');
  controller.setSelectedMaterial(0, material);
  expect(store.materials[0].chineseName).toBe('濃縮神之金屬');

  store.setEquipmentLevel(EquipmentLevel.Level4);
  expect(store.materials[0].chineseName).toBe('神之金屬');

  store.setEquipmentLevel(EquipmentLevel.Level3);
  expect(store.materials[0].chineseName).toBe('濃縮神之金屬');
});

test('WeaponRefineEnabledController reset selected material if weapon refine enabled', () => {
  const { store, controller } = createController();
  store.setEquipmentCategory(EquipmentCategory.Weapon);
  store.setEquipmentLevel(EquipmentLevel.Level4);
  store.setRange(7, 10);
  expect(store.materials[7].chineseName).toBe('神之金屬');
  expect(store.materials[8].chineseName).toBe('神之金屬');
  expect(store.materials[9].chineseName).toBe('神之金屬');

  const value1 = queryRefineMaterialByChineseName('濃縮神之金屬');
  const value2 = queryRefineMaterialByChineseName('高濃縮神之金屬');
  controller.setSelectedMaterial(7, value1);
  controller.setSelectedMaterial(8, value1);
  controller.setSelectedMaterial(9, value2);
  expect(store.materials[7].chineseName).toBe('濃縮神之金屬');
  expect(store.materials[8].chineseName).toBe('濃縮神之金屬');
  expect(store.materials[9].chineseName).toBe('高濃縮神之金屬');

  store.setWeaponRefineEnabled(true);
  expect(store.materials[7].chineseName).toBe('神之金屬');
  expect(store.materials[8].chineseName).toBe('神之金屬');
  expect(store.materials[9].chineseName).toBe('神之金屬');

  store.setWeaponRefineEnabled(false);
  controller.setSelectedMaterial(7, value1);
  controller.setSelectedMaterial(8, value1);
  controller.setSelectedMaterial(9, value2);
  expect(store.materials[7].chineseName).toBe('濃縮神之金屬');
  expect(store.materials[8].chineseName).toBe('濃縮神之金屬');
  expect(store.materials[9].chineseName).toBe('高濃縮神之金屬');

  store.setEquipmentLevel(EquipmentLevel.Level3);
  store.setWeaponRefineEnabled(true);
  store.setEquipmentLevel(EquipmentLevel.Level4);
  expect(store.materials[7].chineseName).toBe('神之金屬');
  expect(store.materials[8].chineseName).toBe('神之金屬');
  expect(store.materials[9].chineseName).toBe('神之金屬');
});

test('WeaponRefineEnabledController set selected material failed if invalid', () => {
  const { store, controller } = createController();
  const value1 = queryRefineMaterialByChineseName('濃縮神之金屬');
  const value2 = queryRefineMaterialByChineseName('高濃縮神之金屬');

  store.setEquipmentLevel(EquipmentLevel.Level4);
  store.setWeaponRefineEnabled(true);
  controller.setSelectedMaterial(7, value1);
  controller.setSelectedMaterial(8, value1);
  controller.setSelectedMaterial(9, value2);
  expect(store.materials[7].chineseName).toBe('神之金屬');
  expect(store.materials[8].chineseName).toBe('神之金屬');
  expect(store.materials[9].chineseName).toBe('神之金屬');
  for (let i = 0; i < 20; i++) {
    expect(store.materials[i]).toBe(controller.getSelectedMaterial(i));
  }
});

test('WeaponRefineEnabledController get selected material probability', () => {
  const { store, controller } = createController();
  store.setWeaponRefineEnabled(false);
  const getProbabilities = () => 
    Array(10).fill(0).map((_, i) => controller.getSelectedMaterialProbability(i));

  expect(getProbabilities()).toStrictEqual([
    1.00, 1.00, 1.00, 1.00, 1.00, 
    1.00, 1.00, 0.60, 0.40, 0.19
  ]);
  store.setWeaponRefineEnabled(true);
  expect(getProbabilities()).toStrictEqual([
    1.00, 1.00, 1.00, 1.00, 1.00, 
    1.00, 1.00, 0.70, 0.50, 0.29
  ]);

  store.setEquipmentLevel(EquipmentLevel.Level2);
  store.setWeaponRefineEnabled(false);
  expect(getProbabilities()).toStrictEqual([
    1.00, 1.00, 1.00, 1.00, 1.00, 
    1.00, 0.60, 0.40, 0.20, 0.19
  ]);
  store.setWeaponRefineEnabled(true);
  expect(getProbabilities()).toStrictEqual([
    1.00, 1.00, 1.00, 1.00, 1.00, 
    1.00, 0.70, 0.50, 0.30, 0.29
  ]);
  
  store.setEquipmentLevel(EquipmentLevel.Level3);
  store.setWeaponRefineEnabled(false);
  expect(getProbabilities()).toStrictEqual([
    1.00, 1.00, 1.00, 1.00, 1.00,
    0.60, 0.50, 0.20, 0.20, 0.19,
  ]);
  store.setWeaponRefineEnabled(true);
  expect(getProbabilities()).toStrictEqual([
    1.00, 1.00, 1.00, 1.00, 1.00,
    0.70, 0.60, 0.30, 0.30, 0.29,
  ]);
});