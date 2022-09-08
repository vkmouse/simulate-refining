import { EquipmentCategory, EquipmentLevel } from "../../../../Core/Core";
import RefineUserPropsStore from "../../../../Data/Store/RefineUserPropsStore";
import RefineProcessBlessingEnabledController from "./RefineProcessBlessingEnabledController";

function createController() {
  const store = new RefineUserPropsStore();
  const controller = new RefineProcessBlessingEnabledController({
    refineUserPropsStore: store,
  });
  return { 
    controller,
    store
  };
}

test('LocalBlessingController get blessing', () => {
  const { store, controller } = createController();

  store.setEquipmentCategory(EquipmentCategory.Weapon);
  store.setEquipmentLevel(EquipmentLevel.Level1);
  expect(controller.getBlessingEnabled(0)).toBeFalsy();
  expect(controller.getBlessingEnabled(7)).toBeFalsy();
  expect(controller.getBlessingEnabled(19)).toBeFalsy();
});

test('LocalBlessingController set blessing', () => {
  const { store, controller } = createController();

  store.setEquipmentCategory(EquipmentCategory.Weapon);
  store.setEquipmentLevel(EquipmentLevel.Level1);
  controller.setBlessingEnabled(7, true);
  expect(store.blessingEnabledList[7]).toBeTruthy();
});

test('LocalBlessingEnabledController save previous value', () => {
  const { store, controller } = createController();

  store.setEquipmentCategory(EquipmentCategory.Weapon);
  store.setEquipmentLevel(EquipmentLevel.Level1);
  controller.setBlessingEnabled(7, true);
  expect(store.blessingEnabledList[7]).toBeTruthy();

  store.setEquipmentLevel(EquipmentLevel.Level2);
  expect(store.blessingEnabledList[7]).toBeFalsy();

  store.setEquipmentLevel(EquipmentLevel.Level1);
  expect(store.blessingEnabledList[7]).toBeTruthy();
});

test('WeaponRefineEnabledController reset blessing enable if weapon refine enabled', () => {
  const { store, controller } = createController();

  store.setEquipmentCategory(EquipmentCategory.Weapon);
  store.setEquipmentLevel(EquipmentLevel.Level1);
  controller.setBlessingEnabled(7, true);
  expect(store.blessingEnabledList[7]).toBeTruthy();

  store.setWeaponRefineEnabled(true);
  expect(store.blessingEnabledList[7]).toBeFalsy();
});

test('WeaponRefineEnabledController set blessing enabled failed if invalid', () => {
  const { store, controller } = createController();

  store.setEquipmentLevel(EquipmentLevel.Level4);
  store.setWeaponRefineEnabled(true);
  controller.setBlessingEnabled(7, true);
  expect(store.blessingEnabledList[7]).toBeFalsy();
});
