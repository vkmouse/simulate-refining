import { EquipmentCategory, EquipmentLevel } from "../../../Core/Core";
import { query, queryDistinct } from "./RefineMaterialTableQuerier";

test('RefineMaterialTable query Weapon Level1', () => {
  const props = {
    equipmentCategory: EquipmentCategory.Weapon,
    equipmentLevel: EquipmentLevel.Level1,
  };
  const currentTable = query(props);
  const distinctTable = queryDistinct(props);

  expect(distinctTable.map(m => m.name)).toStrictEqual([
    'Phracon', 'Bradium', 'HDBradium'
  ]);
  expect(distinctTable.map(m => m.chineseName)).toStrictEqual([
    '強化武器金屬-級數一', '鈽鐳礦石', '高密度鈽鐳礦石'
  ]);
  for (let i = 0; i < 10; i++) {
    expect(currentTable[i].map(m => m.name)).toStrictEqual(['Phracon']);
  }
  for (let i = 10; i < 20; i++) {
    expect(currentTable[i].map(m => m.name)).toStrictEqual(['Bradium', 'HDBradium']);
  }
});

test('RefineMaterialTable query Weapon Level2', () => {
  const props = {
    equipmentCategory: EquipmentCategory.Weapon,
    equipmentLevel: EquipmentLevel.Level2,
  };
  const currentTable = query(props);
  const distinctTable = queryDistinct(props);

  expect(distinctTable.map(m => m.name)).toStrictEqual([
    'Emveretarcon', 'Bradium', 'HDBradium'
  ]);
  expect(distinctTable.map(m => m.chineseName)).toStrictEqual([
    '強化武器金屬-級數二', '鈽鐳礦石', '高密度鈽鐳礦石'
  ]);
  for (let i = 0; i < 10; i++) {
    expect(currentTable[i].map(m => m.name)).toStrictEqual(['Emveretarcon']);
  }
  for (let i = 10; i < 20; i++) {
    expect(currentTable[i].map(m => m.name)).toStrictEqual(['Bradium', 'HDBradium']);
  }
});

test('RefineMaterialTable query Weapon Level3 and Level4', () => {
  const equipmentLevels = [EquipmentLevel.Level3, EquipmentLevel.Level4];
  for (let i = 0; i < 2; i++) {
    const props = {
      equipmentCategory: EquipmentCategory.Weapon,
      equipmentLevel: equipmentLevels[i]
    };
    const currentTable = query(props);
    const distinctTable = queryDistinct(props);

    expect(distinctTable.map(m => m.name)).toStrictEqual([
      'Oridecon', 'EnrichedOridecon', 'HDOridecon', 'Bradium', 'HDBradium'
    ]);
    expect(distinctTable.map(m => m.chineseName)).toStrictEqual([
      '神之金屬', '濃縮神之金屬', '高濃縮神之金屬', '鈽鐳礦石', '高密度鈽鐳礦石'
    ]);
    for (let i = 0; i < 7; i++) {
      expect(currentTable[i].map(m => m.name)).toStrictEqual(['Oridecon', 'EnrichedOridecon']);
      expect(currentTable[i].map(m => m.chineseName)).toStrictEqual(['神之金屬', '濃縮神之金屬']);
    }
    for (let i = 7; i < 9; i++) {
      expect(currentTable[i].map(m => m.name)).toStrictEqual(['Oridecon', 'EnrichedOridecon', 'HDOridecon']);
      expect(currentTable[i].map(m => m.chineseName)).toStrictEqual(['神之金屬', '濃縮神之金屬', '高濃縮神之金屬']);
    }
    for (let i = 10; i < 20; i++) {
      expect(currentTable[i].map(m => m.name)).toStrictEqual(['Bradium', 'HDBradium']);
      expect(currentTable[i].map(m => m.chineseName)).toStrictEqual(['鈽鐳礦石', '高密度鈽鐳礦石']);
    }
  }
});

test('RefineMaterialTable query Weapon Level5', () => {
  const props = {
    equipmentCategory: EquipmentCategory.Weapon,
    equipmentLevel: EquipmentLevel.Level5,
  };
  const currentTable = query(props);
  const distinctTable = queryDistinct(props);
  
  expect(distinctTable.map(m => m.name)).toStrictEqual([
    'Etherdeocon', 'EnrichedEtherdeocon', 'EtelBradium', 'HDEtherdeocon', 'HDEtelBradium'
  ]);
  expect(distinctTable.map(m => m.chineseName)).toStrictEqual([
    '乙太神之金屬', '濃縮乙太神之金屬', '乙太鈽鐳', '高濃縮乙太神之金屬', '高密度乙太鈽鐳礦石'
  ]);
  for (let i = 0; i < 10; i++) {
    expect(currentTable[i].map(m => m.name)).toStrictEqual(['Etherdeocon', 'EnrichedEtherdeocon']);
  }
  for (let i = 10; i < 15; i++) {
    expect(currentTable[i].map(m => m.name)).toStrictEqual(['EtelBradium', 'HDEtherdeocon']);
  }
  for (let i = 15; i < 20; i++) {
    expect(currentTable[i].map(m => m.name)).toStrictEqual(['EtelBradium', 'HDEtelBradium']);
  }
});

test('RefineMaterialTable query Armor Level1', () => {
  const props = {
    equipmentCategory: EquipmentCategory.Armor,
    equipmentLevel: EquipmentLevel.Level1,
  };
  const currentTable = query(props);
  const distinctTable = queryDistinct(props);
  
  expect(distinctTable.map(m => m.name)).toStrictEqual([
    'Elunium', 'EnrichedElunium', 'HDElunium', 'Carnium', 'HDCarnium'
  ]);
  expect(distinctTable.map(m => m.chineseName)).toStrictEqual([
    '鋁', '濃縮鋁', '高濃縮鋁', '鈣礦石', '高密度鈣礦石'
  ]);
  for (let i = 0; i < 7; i++) {
    expect(currentTable[i].map(m => m.name)).toStrictEqual(['Elunium', 'EnrichedElunium']);
  }
  for (let i = 7; i < 9; i++) {
    expect(currentTable[i].map(m => m.name)).toStrictEqual(['Elunium', 'EnrichedElunium', 'HDElunium']);
  }
  for (let i = 10; i < 20; i++) {
    expect(currentTable[i].map(m => m.name)).toStrictEqual(['Carnium', 'HDCarnium']);
  }
});

test('RefineMaterialTable query Armor Level2', () => {
  const props = {
    equipmentCategory: EquipmentCategory.Armor,
    equipmentLevel: EquipmentLevel.Level2,
  };
  const currentTable = query(props);
  const distinctTable = queryDistinct(props);
  
  expect(distinctTable.map(m => m.name)).toStrictEqual([
    'Etherium', 'EnrichedEthernium', 'EtelCarnium', 'HDEthernium', 'HDEtelCarnium'
  ]);
  expect(distinctTable.map(m => m.chineseName)).toStrictEqual([
    '乙太鋁', '濃縮乙太鋁', '乙太鈣礦石', '高濃縮乙太鋁', '高密度乙太鈣礦石'
  ]);
  for (let i = 0; i < 10; i++) {
    expect(currentTable[i].map(m => m.name)).toStrictEqual(['Etherium', 'EnrichedEthernium']);
    expect(currentTable[i].map(m => m.chineseName)).toStrictEqual(['乙太鋁', '濃縮乙太鋁']);
  }
  for (let i = 10; i < 15; i++) {
    expect(currentTable[i].map(m => m.name)).toStrictEqual(['EtelCarnium', 'HDEthernium']);
    expect(currentTable[i].map(m => m.chineseName)).toStrictEqual(['乙太鈣礦石', '高濃縮乙太鋁']);
  }
  for (let i = 15; i < 20; i++) {
    expect(currentTable[i].map(m => m.name)).toStrictEqual(['EtelCarnium', 'HDEtelCarnium']);
    expect(currentTable[i].map(m => m.chineseName)).toStrictEqual(['乙太鈣礦石', '高密度乙太鈣礦石']);
  }
});