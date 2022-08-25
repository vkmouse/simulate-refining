interface RefineMaterials {
  blessing: number
  Phracon: number
  Emveretarcon: number

  Oridecon: number
  EnrichedOridecon: number
  HDOridecon: number
  Etherdeocon: number
  EnrichedEtherdeocon: number
  HDEtherdeocon: number

  Bradium: number
  HDBradium: number
  EtelBradium: number
  HDEtelBradium: number

  Elunium: number
  EnrichedElunium: number
  HDElunium: number
  Ethernium: number
  EnrichedEthernium: number
  HDEthernium: number

  Carnium: number
  HDCarnium: number
  EtelCarnium: number
  HDEtelCarnium: number
}

export default RefineMaterials;

// Weapon/Level1
// 0  <= x < 10    Phr        Phracon                 強化武器金屬-級數一
// 10 <= x < 20    Bra        Bradium                 鈽鐳礦石
// 10 <= x < 20    HDBra      HD Bradium              高密度鈽鐳礦石
// 7  <= x < 14    blessing   Blacksmith Blessing     鐵匠的祝福

// Weapon/Level2
// 0  <= x < 10    Emv        Emveretarcon            強化武器金屬-級數二
// 10 <= x < 20    Bra        Bradium                 鈽鐳礦石
// 10 <= x < 20    HDBra      HD Bradium              高密度鈽鐳礦石
// 7  <= x < 14    blessing   Blacksmith Blessing     鐵匠的祝福

// Weapon/Level3,Level4
// 0  <= x < 10    Ori        Oridecon                神之金屬
// 0  <= x < 10    EOri       Enriched Oridecon       濃縮神之金屬
// 0  <= x < 10    HDOri      HD Oridecon             高濃縮神之金屬
// 10 <= x < 20    Bra        Bradium                 鈽鐳礦石
// 10 <= x < 20    HDBra      HD Bradium              高密度鈽鐳礦石
// 7  <= x < 14    blessing   Blacksmith Blessing     鐵匠的祝福

// Weapon/Level5
// 0  <= x < 10    EtelOri    Etherdeocon             乙太神之金屬
// 0  <= x < 10    EEtelOri   Enriched Etherdeocon    濃縮乙太神之金屬
// 11 <= x < 20    EtelBra    Etel Bradium            乙太鈽鐳
// 11 <= x < 15    HDEtelOri  HD Etherdeocon          高濃縮乙太神之金屬
// 15 <= x < 20    HDEtelBra  HD Etel Bradium         高密度乙太鈽鐳礦石
// 7  <= x < 14    blessing   Blacksmith Blessing     鐵匠的祝福

// Armor/Level1
// 0  <= x < 10    Elu        Elunium                 鋁
// 0  <= x < 10    EElu       Enriched Elunium        濃縮鋁
// 0  <= x < 10    HDElu      HD Elunium              高濃縮鋁
// 10 <= x < 20    Car        Carnium                 鈣礦石
// 10 <= x < 20    HDCar      HD Carnium              高密度鈣礦石 
// 7  <= x < 14    blessing   Blacksmith Blessing     鐵匠的祝福

// Armor/Level2
// 0  <= x < 10    EtelElu    Ethernium               乙太鋁
// 0  <= x < 10    EEtelElu   Enriched Ethernium      濃縮乙太鋁
// 11 <= x < 20    EtelCar    Etel Carnium            乙太鈣礦石
// 11 <= x < 15    HDEtelElu  HD Ethernium            高濃縮乙太鋁
// 15 <= x < 20    HDEtelCar  HD Etel Carnium         高密度乙太鈣礦石
// 7  <= x < 14    blessing   Blacksmith Blessing     鐵匠的祝福