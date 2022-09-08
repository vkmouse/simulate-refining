import { EquipmentCategory, EquipmentLevel } from "../../../Core/Core";
import RefinePricePropsStore from "../../../Data/Store/RefinePricePropsStore";
import RefineUserPropsStore from "../../../Data/Store/RefineUserPropsStore";
import RefineInfoController from "./RefineInfoController";

function createController() {
  const refinePricePropsStore = new RefinePricePropsStore();
  const refineUserPropsStore = new RefineUserPropsStore();
  const controller = new RefineInfoController({
    refinePricePropsStore,
    refineUserPropsStore,
  });
  return { 
    controller,
    refinePricePropsStore,
    refineUserPropsStore,
  };
}

test('weapon refine enabled', () => {
  const { refineUserPropsStore, controller } = createController();
  expect(refineUserPropsStore.weaponRefineEnabled).toBe(false);

  controller.setWeaponRefineEnabled(true);
  expect(refineUserPropsStore.weaponRefineEnabled).toBe(true);

  refineUserPropsStore.setEquipmentCategory(EquipmentCategory.Armor);
  expect(refineUserPropsStore.weaponRefineEnabled).toBe(false);
});

test('weapon refine enabled available', () => {
  const { refineUserPropsStore, controller } = createController();
  expect(controller.getWeaponRefineEnabledAvailable()).toBe(true);

  refineUserPropsStore.setEquipmentLevel(EquipmentLevel.Level2);
  expect(controller.getWeaponRefineEnabledAvailable()).toBe(true);

  refineUserPropsStore.setEquipmentLevel(EquipmentLevel.Level3);
  expect(controller.getWeaponRefineEnabledAvailable()).toBe(true);

  refineUserPropsStore.setEquipmentLevel(EquipmentLevel.Level4);
  expect(controller.getWeaponRefineEnabledAvailable()).toBe(true);

  refineUserPropsStore.setEquipmentLevel(EquipmentLevel.Level5);
  expect(controller.getWeaponRefineEnabledAvailable()).toBe(false);

  refineUserPropsStore.setEquipmentLevel(EquipmentLevel.Level1);
  refineUserPropsStore.setEquipmentCategory(EquipmentCategory.Armor);
  expect(controller.getWeaponRefineEnabledAvailable()).toBe(false);

  refineUserPropsStore.setEquipmentLevel(EquipmentLevel.Level2);
  expect(controller.getWeaponRefineEnabledAvailable()).toBe(false);
});

test('set refine price', () => {
  const { refinePricePropsStore, controller } = createController();
  controller.setRefinePriceBeforeTen(10);
  expect(refinePricePropsStore.refinePriceBeforeTen).toBe(10);

  controller.setRefinePriceAfterTen(100);
  expect(refinePricePropsStore.refinePriceAfterTen).toBe(100);
});

test('default refine price', () => {
  const { refineUserPropsStore, refinePricePropsStore } = createController();
  expect(refinePricePropsStore.refinePriceBeforeTen).toBe(10000);
  expect(refinePricePropsStore.refinePriceAfterTen).toBe(100000);

  refineUserPropsStore.setEquipmentLevel(EquipmentLevel.Level2);
  expect(refinePricePropsStore.refinePriceBeforeTen).toBe(10000);
  expect(refinePricePropsStore.refinePriceAfterTen).toBe(100000);

  refineUserPropsStore.setEquipmentLevel(EquipmentLevel.Level3);
  expect(refinePricePropsStore.refinePriceBeforeTen).toBe(10000);
  expect(refinePricePropsStore.refinePriceAfterTen).toBe(100000);

  refineUserPropsStore.setEquipmentLevel(EquipmentLevel.Level4);
  expect(refinePricePropsStore.refinePriceBeforeTen).toBe(10000);
  expect(refinePricePropsStore.refinePriceAfterTen).toBe(100000);

  refineUserPropsStore.setEquipmentLevel(EquipmentLevel.Level5);
  expect(refinePricePropsStore.refinePriceBeforeTen).toBe(50000);
  expect(refinePricePropsStore.refinePriceAfterTen).toBe(100000);

  refineUserPropsStore.setEquipmentLevel(EquipmentLevel.Level1);
  refineUserPropsStore.setEquipmentCategory(EquipmentCategory.Armor);
  expect(refinePricePropsStore.refinePriceBeforeTen).toBe(10000);
  expect(refinePricePropsStore.refinePriceAfterTen).toBe(100000);

  refineUserPropsStore.setEquipmentLevel(EquipmentLevel.Level2);
  expect(refinePricePropsStore.refinePriceBeforeTen).toBe(30000);
  expect(refinePricePropsStore.refinePriceAfterTen).toBe(75000);

  refineUserPropsStore.setEquipmentLevel(EquipmentLevel.Level1);
  refineUserPropsStore.setEquipmentCategory(EquipmentCategory.Weapon);
  refineUserPropsStore.setWeaponRefineEnabled(true);
  expect(refinePricePropsStore.refinePriceBeforeTen).toBe(0);
  expect(refinePricePropsStore.refinePriceAfterTen).toBe(0);
});
