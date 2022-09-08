import { EquipmentCategory, EquipmentLevel } from "../../../Core/Core";
import RefinePricePropsStore from "../../../Data/Store/RefinePricePropsStore";
import RefineUserPropsStore from "../../../Data/Store/RefineUserPropsStore";
import EquipmentInfoController from "./EquipmentInfoController";

function createController() {
  const refinePricePropsStore = new RefinePricePropsStore();
  const refineUserPropsStore = new RefineUserPropsStore();
  const controller = new EquipmentInfoController({
    refinePricePropsStore,
    refineUserPropsStore,
  });
  return { 
    controller,
    refinePricePropsStore,
    refineUserPropsStore,
  };
}

test('set category', () => {
  const { refineUserPropsStore, controller } = createController();
  expect(refineUserPropsStore.equipmentCategory).toBe(EquipmentCategory.Weapon);

  controller.setCategory(EquipmentCategory.Armor);
  expect(refineUserPropsStore.equipmentCategory).toBe(EquipmentCategory.Armor);

  controller.setCategory(EquipmentCategory.Shadow);
  expect(refineUserPropsStore.equipmentCategory).toBe(EquipmentCategory.Shadow);

  controller.setCategory(EquipmentCategory.Weapon);
  expect(refineUserPropsStore.equipmentCategory).toBe(EquipmentCategory.Weapon);
});

test('set level', () => {
  const { refineUserPropsStore, controller } = createController();
  expect(refineUserPropsStore.equipmentLevel).toBe(EquipmentLevel.Level1);

  controller.setLevel(EquipmentLevel.Level2);
  expect(refineUserPropsStore.equipmentLevel).toBe(EquipmentLevel.Level2);

  controller.setLevel(EquipmentLevel.Level3);
  expect(refineUserPropsStore.equipmentLevel).toBe(EquipmentLevel.Level3);

  controller.setLevel(EquipmentLevel.Level4);
  expect(refineUserPropsStore.equipmentLevel).toBe(EquipmentLevel.Level4);

  controller.setLevel(EquipmentLevel.Level5);
  expect(refineUserPropsStore.equipmentLevel).toBe(EquipmentLevel.Level5);
});

test('equipment level by set category', () => {
  const { refineUserPropsStore, controller } = createController();
  expect(refineUserPropsStore.equipmentCategory).toBe(EquipmentCategory.Weapon);
  expect(refineUserPropsStore.equipmentLevel).toBe(EquipmentLevel.Level1);

  controller.setLevel(EquipmentLevel.Level2);
  expect(refineUserPropsStore.equipmentLevel).toBe(EquipmentLevel.Level2);

  controller.setCategory(EquipmentCategory.Armor);
  expect(refineUserPropsStore.equipmentCategory).toBe(EquipmentCategory.Armor);
  expect(refineUserPropsStore.equipmentLevel).toBe(EquipmentLevel.Level1);
});

test('set invalid equipment level', () => {
  const { controller } = createController();

  controller.setCategory(EquipmentCategory.Armor);
  expect(() => controller.setLevel(EquipmentLevel.Level3)).toThrow("Invalid equipment level");
  expect(() => controller.setLevel(EquipmentLevel.Level4)).toThrow("Invalid equipment level");
  expect(() => controller.setLevel(EquipmentLevel.Level5)).toThrow("Invalid equipment level");

  controller.setCategory(EquipmentCategory.Shadow);
  expect(() => controller.setLevel(EquipmentLevel.Level2)).toThrow("Invalid equipment level");
  expect(() => controller.setLevel(EquipmentLevel.Level3)).toThrow("Invalid equipment level");
  expect(() => controller.setLevel(EquipmentLevel.Level4)).toThrow("Invalid equipment level");
  expect(() => controller.setLevel(EquipmentLevel.Level5)).toThrow("Invalid equipment level");
});

test('equipment level data', () => {
  const { controller } = createController();

  expect(controller.getEquipmentLevelData()).toStrictEqual([
    { value: EquipmentLevel.Level1, name: '武器等級 1' },
    { value: EquipmentLevel.Level2, name: '武器等級 2' },
    { value: EquipmentLevel.Level3, name: '武器等級 3' },
    { value: EquipmentLevel.Level4, name: '武器等級 4' },
    { value: EquipmentLevel.Level5, name: '武器等級 5' }
  ]);

  controller.setCategory(EquipmentCategory.Armor);
  expect(controller.getEquipmentLevelData()).toStrictEqual([
    { value: EquipmentLevel.Level1, name: '防具等級 1' },
    { value: EquipmentLevel.Level2, name: '防具等級 2' }
  ]);

  controller.setCategory(EquipmentCategory.Shadow);
  expect(controller.getEquipmentLevelData()).toStrictEqual([
    { value: EquipmentLevel.Level1, name: '無裝備等級', disabled: true },
  ]);
});

test('equipment category data', () => {
  const { controller } = createController();

  expect(controller.getEquipmentCategoryData()).toStrictEqual([
    { name: '武器', value: EquipmentCategory.Weapon },
    { name: '防具', value: EquipmentCategory.Armor }
  ]);
});
