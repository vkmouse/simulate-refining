import { EquipmentCategory, EquipmentLevel } from "./Core";
import { RefineMaterial } from "./Refinement";

export interface RefineUserProps {
  blessingEnabledList: boolean[]
  equipmentCategory: EquipmentCategory
  equipmentLevel: EquipmentLevel
  materials: RefineMaterial[]
  numSamples: number
  start: number
  end: number
  weaponRefineEnabled: boolean
}

export interface RefinePriceProps {
  blessingPrice: number
  equipmentPrice: number
  refinePriceBeforeTen: number
  refinePriceAfterTen: number

  Phracon: number,
  Emveretarcon: number,
  Oridecon: number,
  Etherdeocon: number,
  Bradium: number,
  EtelBradium: number,

  EnrichedOridecon: number,
  HDOridecon: number,
  EnrichedEtherdeocon: number,
  HDBradium: number,
  HDEtherdeocon: number,
  HDEtelBradium: number,

  Elunium: number,
  Etherium: number,
  Carnium: number,
  EtelCarnium: number,

  EnrichedElunium: number,
  HDElunium: number,
  EnrichedEthernium: number,
  HDEtelCarnium: number,
  HDEthernium: number,
  HDCarnium: number,
}

export interface RefineStatsProps {
  cost: number
  numBlessings: number
  numSuccess: number
  refineLevel: number
  refineTimes: number
}
