import { EquipmentCategory, EquipmentLevel } from "../../Core/Core";
import RefineMaterial from "../Model/RefineMaterial";
import Bradium from "./RefiningMaterial/Bradium";
import Carnium from "./RefiningMaterial/Carnium";
import Elunium from "./RefiningMaterial/Elunium";
import Emveretarcon from "./RefiningMaterial/Emveretarcon";
import EnrichedElunium from "./RefiningMaterial/EnrichedElunium";
import EnrichedEtherdeocon from "./RefiningMaterial/EnrichedEtherdeocon";
import EnrichedEthernium from "./RefiningMaterial/EnrichedEthernium";
import EnrichedOridecon from "./RefiningMaterial/EnrichedOridecon";
import EtelBradium from "./RefiningMaterial/EtelBradium";
import EtelCarnium from "./RefiningMaterial/EtelCarnium";
import Etherdeocon from "./RefiningMaterial/Etherdeocon";
import Etherium from "./RefiningMaterial/Etherium";
import HDBradium from "./RefiningMaterial/HDBradium";
import HDCarnium from "./RefiningMaterial/HDCarnium";
import HDElunium from "./RefiningMaterial/HDElunium";
import HDEtelBradium from "./RefiningMaterial/HDEtelBradium";
import HDEtelCarnium from "./RefiningMaterial/HDEtelCarnium";
import HDEtherdeocon from "./RefiningMaterial/HDEtherdeocon";
import HDEthernium from "./RefiningMaterial/HDEthernium";
import HDOridecon from "./RefiningMaterial/HDOridecon";
import Oridecon from "./RefiningMaterial/Oridecon";
import Phracon from "./RefiningMaterial/Phracon";

class RefineMaterialTable {
  private static table: Map<EquipmentCategory, Map<EquipmentLevel, Map<number, RefineMaterial[]>>>;

  static getTable() {
    if (this.table == undefined) {
      this.createTable();
    }
    return this.table;
  }

  static createTable() {
    this.table = new Map();
    const materials: RefineMaterial[] = [
      new Phracon,
      new Emveretarcon,
      new Oridecon,
      new Etherdeocon,
      new Bradium(),
      new EtelBradium,

      new EnrichedOridecon,
      new HDOridecon,
      new EnrichedEtherdeocon,
      new HDBradium,
      new HDEtherdeocon,
      new HDEtelBradium,

      new Elunium,
      new Etherium,
      new Carnium,
      new EtelCarnium,

      new EnrichedElunium,
      new HDElunium,
      new EnrichedEthernium,
      new HDEtelCarnium,
      new HDEthernium,
      new HDCarnium,
    ];
    materials.forEach(m => {
      this.addCategory(m);
    });
  }

  static addCategory(material: RefineMaterial) {
    this.createCategoryIfNeeded(material);
    this.addLevel(material);
  }

  static createCategoryIfNeeded(material: RefineMaterial) {
    const category = material.refinableEquipmentCategory;
    if (!this.table.has(category)) {
      this.table.set(category, new Map());
    }
  }

  static addLevel(material: RefineMaterial) {
    for (const equipmentLevel in EquipmentLevel) {
      const level = equipmentLevel as EquipmentLevel;
      if (material.refinableEquipmentLevel[level]) {
        this.createLevelIfNeeded(level, material);
        this.addRefineLevels(level, material);
      }
    }
  }

  static createLevelIfNeeded(level: EquipmentLevel, material: RefineMaterial) {
    const category = material.refinableEquipmentCategory;
    if (!this.table.get(category)?.has(level)) {
      this.table.get(category)?.set(level, new Map());
    }
  }

  static addRefineLevels(level: EquipmentLevel, material: RefineMaterial) {
    for (let refineLevel = 0; refineLevel < 20; refineLevel++) {
      if (material.refinableLevel[refineLevel]) {
        this.createRefineLevelIfNeeded(refineLevel, level, material);
        this.addRefineLevel(refineLevel, level, material);
      }
    }
  }

  static createRefineLevelIfNeeded(refineLevel: number, level: EquipmentLevel, material: RefineMaterial) {
    const category = material.refinableEquipmentCategory;
    if (!this.table.get(category)?.get(level)?.has(refineLevel)) {
      this.table.get(category)?.get(level)?.set(refineLevel, []);
    }
  }

  static addRefineLevel(refineLevel: number, level: EquipmentLevel, material: RefineMaterial) {
    const category = material.refinableEquipmentCategory;
    this.table.get(category)?.get(level)?.get(refineLevel)?.push(material);
  }
}

export default RefineMaterialTable;