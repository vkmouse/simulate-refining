import { EquipmentCategory, EquipmentLevel } from "../../../../Core/Core";
import RefineUserPropsStore from "../../../../Data/Store/RefineUserPropsStore";
import RefineProcessSelectableMaterialController from "./RefineProcessSelectableMaterialController";

function createController() {
  const store = new RefineUserPropsStore();
  const controller = new RefineProcessSelectableMaterialController({
    refineUserPropsStore: store,
  });
  return { 
    controller,
    store
  };
}

test('get selectable material', () => {
  const { store, controller } = createController();
  const getSelectableMaterialNames = 
    (i: number) => controller.getSelectableMaterials(i).map(p => p.name);

  expect(getSelectableMaterialNames(0)).toStrictEqual(['強化武器金屬-級數一']);
  expect(getSelectableMaterialNames(10)).toStrictEqual(['鈽鐳礦石', '高密度鈽鐳礦石']);

  store.setEquipmentLevel(EquipmentLevel.Level2);
  expect(getSelectableMaterialNames(0)).toStrictEqual(['強化武器金屬-級數二']);
  expect(getSelectableMaterialNames(10)).toStrictEqual(['鈽鐳礦石', '高密度鈽鐳礦石']);

  store.setEquipmentLevel(EquipmentLevel.Level3);
  expect(getSelectableMaterialNames(0)).toStrictEqual(['神之金屬', '濃縮神之金屬']);
  expect(getSelectableMaterialNames(7)).toStrictEqual(['神之金屬', '濃縮神之金屬', '高濃縮神之金屬']);
  expect(getSelectableMaterialNames(10)).toStrictEqual(['鈽鐳礦石', '高密度鈽鐳礦石']);

  store.setEquipmentLevel(EquipmentLevel.Level5);
  expect(getSelectableMaterialNames(0)).toStrictEqual(['乙太神之金屬', '濃縮乙太神之金屬']);
  expect(getSelectableMaterialNames(10)).toStrictEqual(['乙太鈽鐳', '高濃縮乙太神之金屬']);
  expect(getSelectableMaterialNames(15)).toStrictEqual(['乙太鈽鐳', '高密度乙太鈽鐳礦石']);

  store.setEquipmentCategory(EquipmentCategory.Armor);
  store.setEquipmentLevel(EquipmentLevel.Level1);
  expect(getSelectableMaterialNames(0)).toStrictEqual(['鋁', '濃縮鋁']);
  expect(getSelectableMaterialNames(7)).toStrictEqual(['鋁', '濃縮鋁', '高濃縮鋁']);
  expect(getSelectableMaterialNames(10)).toStrictEqual(['鈣礦石', '高密度鈣礦石']);

  store.setEquipmentLevel(EquipmentLevel.Level2);
  expect(getSelectableMaterialNames(0)).toStrictEqual(['乙太鋁', '濃縮乙太鋁']);
  expect(getSelectableMaterialNames(10)).toStrictEqual(['乙太鈣礦石', '高濃縮乙太鋁']);
  expect(getSelectableMaterialNames(15)).toStrictEqual(['乙太鈣礦石', '高密度乙太鈣礦石']);
});

test('disabled of selectable material', () => {
  const { store, controller } = createController();
  const getSelectableMaterialDisabled = 
    (i: number) => controller.getSelectableMaterials(i).map(p => p.disabled);
  
  store.setWeaponRefineEnabled(false);
  expect(getSelectableMaterialDisabled(0)).toStrictEqual([false]);
  store.setWeaponRefineEnabled(true);
  expect(getSelectableMaterialDisabled(0)).toStrictEqual([false]);
  
  store.setEquipmentLevel(EquipmentLevel.Level2);
  store.setWeaponRefineEnabled(false);
  expect(getSelectableMaterialDisabled(0)).toStrictEqual([false]);
  store.setWeaponRefineEnabled(true);
  expect(getSelectableMaterialDisabled(0)).toStrictEqual([false]);

  store.setEquipmentLevel(EquipmentLevel.Level3);
  store.setWeaponRefineEnabled(false);
  expect(getSelectableMaterialDisabled(0)).toStrictEqual([false, false]);
  expect(getSelectableMaterialDisabled(7)).toStrictEqual([false, false, false]);
  store.setWeaponRefineEnabled(true);
  expect(getSelectableMaterialDisabled(0)).toStrictEqual([false, true]);
  expect(getSelectableMaterialDisabled(7)).toStrictEqual([false, true, true]);
});