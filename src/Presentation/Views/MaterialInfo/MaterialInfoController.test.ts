import { EquipmentCategory, EquipmentLevel } from "../../../Core/Core";
import RefinePricePropsStore from "../../../Data/Store/RefinePricePropsStore";
import RefineUserPropsStore from "../../../Data/Store/RefineUserPropsStore";
import MaterialInfoController from "./MaterialInfoController";

function createController() {
  const refinePricePropsStore = new RefinePricePropsStore();
  const refineUserPropsStore = new RefineUserPropsStore();
  const controller = new MaterialInfoController({
    refinePricePropsStore,
    refineUserPropsStore,
  });
  return { 
    controller,
    refinePricePropsStore,
    refineUserPropsStore,
  };
}

test('get materials', () => {
  const { refineUserPropsStore, controller } = createController();
  expect(refineUserPropsStore.equipmentCategory).toBe(EquipmentCategory.Weapon);
  expect(refineUserPropsStore.equipmentCategory).toBe(EquipmentLevel.Level1);
  expect(controller.getMaterials().map(p => p.label)).toStrictEqual([
    '強化武器金屬-級數一', '鈽鐳礦石', '高密度鈽鐳礦石', '鐵匠的祝福'
  ]);

  refineUserPropsStore.setEquipmentLevel(EquipmentLevel.Level2);
  expect(controller.getMaterials().map(p => p.label)).toStrictEqual([
    '強化武器金屬-級數二', '鈽鐳礦石', '高密度鈽鐳礦石', '鐵匠的祝福'
  ]);

  refineUserPropsStore.setEquipmentLevel(EquipmentLevel.Level3);
  expect(controller.getMaterials().map(p => p.label)).toStrictEqual([
    '神之金屬', '濃縮神之金屬', '高濃縮神之金屬', '鈽鐳礦石', '高密度鈽鐳礦石', '鐵匠的祝福'
  ]);

  refineUserPropsStore.setEquipmentLevel(EquipmentLevel.Level4);
  expect(controller.getMaterials().map(p => p.label)).toStrictEqual([
    '神之金屬', '濃縮神之金屬', '高濃縮神之金屬', '鈽鐳礦石', '高密度鈽鐳礦石', '鐵匠的祝福'
  ]);

  refineUserPropsStore.setEquipmentLevel(EquipmentLevel.Level5);
  expect(controller.getMaterials().map(p => p.label)).toStrictEqual([
    '乙太神之金屬', '濃縮乙太神之金屬', '乙太鈽鐳', '高濃縮乙太神之金屬', '高密度乙太鈽鐳礦石', '鐵匠的祝福'
  ]);

  refineUserPropsStore.setEquipmentCategory(EquipmentCategory.Armor);
  refineUserPropsStore.setEquipmentLevel(EquipmentLevel.Level1);
  expect(controller.getMaterials().map(p => p.label)).toStrictEqual([
    '鋁', '濃縮鋁', '高濃縮鋁', '鈣礦石', '高密度鈣礦石', '鐵匠的祝福'
  ]);

  refineUserPropsStore.setEquipmentLevel(EquipmentLevel.Level2);
  expect(controller.getMaterials().map(p => p.label)).toStrictEqual([
    '乙太鋁', '濃縮乙太鋁', '乙太鈣礦石', '高濃縮乙太鋁', '高密度乙太鈣礦石', '鐵匠的祝福'
  ]);
});

test('set price', () => {
  const { refineUserPropsStore, refinePricePropsStore, controller } = createController();
  const setPrices = (value: number) => {
    controller.getMaterials().forEach(p => p.setPrice(value));
  };

  setPrices(10);
  expect(refinePricePropsStore.Phracon).toBe(10);
  expect(refinePricePropsStore.Bradium).toBe(10);
  expect(refinePricePropsStore.HDBradium).toBe(10);
  expect(refinePricePropsStore.blessingPrice).toBe(10);

  refineUserPropsStore.setEquipmentLevel(EquipmentLevel.Level2);
  setPrices(20);
  expect(refinePricePropsStore.Emveretarcon).toBe(20);
  expect(refinePricePropsStore.Bradium).toBe(20);
  expect(refinePricePropsStore.HDBradium).toBe(20);
  expect(refinePricePropsStore.blessingPrice).toBe(20);

  refineUserPropsStore.setEquipmentLevel(EquipmentLevel.Level3);
  setPrices(30);
  expect(refinePricePropsStore.Oridecon).toBe(30);
  expect(refinePricePropsStore.EnrichedOridecon).toBe(30);
  expect(refinePricePropsStore.HDOridecon).toBe(30);
  expect(refinePricePropsStore.Bradium).toBe(30);
  expect(refinePricePropsStore.HDBradium).toBe(30);
  expect(refinePricePropsStore.blessingPrice).toBe(30);

  refineUserPropsStore.setEquipmentLevel(EquipmentLevel.Level4);
  setPrices(40);
  expect(refinePricePropsStore.Oridecon).toBe(40);
  expect(refinePricePropsStore.EnrichedOridecon).toBe(40);
  expect(refinePricePropsStore.HDOridecon).toBe(40);
  expect(refinePricePropsStore.Bradium).toBe(40);
  expect(refinePricePropsStore.HDBradium).toBe(40);
  expect(refinePricePropsStore.blessingPrice).toBe(40);

  refineUserPropsStore.setEquipmentLevel(EquipmentLevel.Level5);
  setPrices(50);
  expect(refinePricePropsStore.Etherdeocon).toBe(50);
  expect(refinePricePropsStore.EnrichedEtherdeocon).toBe(50);
  expect(refinePricePropsStore.EtelBradium).toBe(50);
  expect(refinePricePropsStore.HDEtherdeocon).toBe(50);
  expect(refinePricePropsStore.HDEtelBradium).toBe(50);
  expect(refinePricePropsStore.blessingPrice).toBe(50);

  refineUserPropsStore.setEquipmentCategory(EquipmentCategory.Armor);
  refineUserPropsStore.setEquipmentLevel(EquipmentLevel.Level1);
  setPrices(60);
  expect(refinePricePropsStore.Elunium).toBe(60);
  expect(refinePricePropsStore.EnrichedElunium).toBe(60);
  expect(refinePricePropsStore.HDElunium).toBe(60);
  expect(refinePricePropsStore.Carnium).toBe(60);
  expect(refinePricePropsStore.HDCarnium).toBe(60);
  expect(refinePricePropsStore.blessingPrice).toBe(60);

  refineUserPropsStore.setEquipmentLevel(EquipmentLevel.Level2);
  setPrices(70);
  expect(refinePricePropsStore.Etherium).toBe(70);
  expect(refinePricePropsStore.EnrichedEthernium).toBe(70);
  expect(refinePricePropsStore.EtelCarnium).toBe(70);
  expect(refinePricePropsStore.HDEthernium).toBe(70);
  expect(refinePricePropsStore.HDEtelCarnium).toBe(70);
  expect(refinePricePropsStore.blessingPrice).toBe(70);
});
