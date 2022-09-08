import { EquipmentCategory, EquipmentLevel } from "../../../Core/Core";
import { RefineMaterial, RefineMaterialProps } from "../../../Core/Refinement";
import Bradium from "../../Refinement/Material/Bradium";
import Carnium from "../../Refinement/Material/Carnium";
import Elunium from "../../Refinement/Material/Elunium";
import Emveretarcon from "../../Refinement/Material/Emveretarcon";
import EnrichedElunium from "../../Refinement/Material/EnrichedElunium";
import EnrichedEtherdeocon from "../../Refinement/Material/EnrichedEtherdeocon";
import EnrichedEthernium from "../../Refinement/Material/EnrichedEthernium";
import EnrichedOridecon from "../../Refinement/Material/EnrichedOridecon";
import EtelBradium from "../../Refinement/Material/EtelBradium";
import EtelCarnium from "../../Refinement/Material/EtelCarnium";
import Etherdeocon from "../../Refinement/Material/Etherdeocon";
import Etherium from "../../Refinement/Material/Etherium";
import HDBradium from "../../Refinement/Material/HDBradium";
import HDCarnium from "../../Refinement/Material/HDCarnium";
import HDElunium from "../../Refinement/Material/HDElunium";
import HDEtelBradium from "../../Refinement/Material/HDEtelBradium";
import HDEtelCarnium from "../../Refinement/Material/HDEtelCarnium";
import HDEtherdeocon from "../../Refinement/Material/HDEtherdeocon";
import HDEthernium from "../../Refinement/Material/HDEthernium";
import HDOridecon from "../../Refinement/Material/HDOridecon";
import Oridecon from "../../Refinement/Material/Oridecon";
import Phracon from "../../Refinement/Material/Phracon";

interface DataProps {
  equipmentCategory: EquipmentCategory
  equipmentLevel: EquipmentLevel
  refineLevel: number
  refineMaterials: RefineMaterial[]
}

interface IProps {
  equipmentCategory: EquipmentCategory
  equipmentLevel: EquipmentLevel
  refineLevel: number
  refineMaterial: RefineMaterial
}

class RefineMaterialTable {
  private static table: RefineMaterialTable | undefined = undefined;
  private materials: RefineMaterialProps[];
  private data: DataProps[];

  static getData(): DataProps[] {
    if (this.table === undefined) {
      this.table = new RefineMaterialTable();
    }
    return this.table.data;
  }

  static getMaterials(): RefineMaterialProps[] {
    if (this.table === undefined) {
      this.table = new RefineMaterialTable();
    }
    return this.table.materials;
  }

  private constructor() {
    this.materials = [
      new Phracon(),
      new Emveretarcon(),

      new Oridecon(),
      new EnrichedOridecon(),
      new HDOridecon(),
      new Bradium(),
      new HDBradium(),

      new Etherdeocon(),
      new EnrichedEtherdeocon(),
      new EtelBradium(),
      new HDEtherdeocon(),
      new HDEtelBradium(),

      new Elunium(),
      new EnrichedElunium(),
      new HDElunium(),
      new Carnium(),
      new HDCarnium(),

      new Etherium(),
      new EnrichedEthernium(),
      new EtelCarnium(),
      new HDEthernium(),
      new HDEtelCarnium(),      
    ];

    this.data = [];

    this.materials.forEach(material => {
      for (let i = 0; i < material.refinableEquipmentCategory.length; i++) {
        for (let j = 0; j < material.refinableEquipmentLevel.length; j++) {
          for (let k = 0; k < material.refinableLevel.length; k++) {
            this.addMaterialData({
              equipmentCategory: material.refinableEquipmentCategory[i],
              equipmentLevel: material.refinableEquipmentLevel[j],
              refineLevel: material.refinableLevel[k],
              refineMaterial: material
            });
          }
        }
      }
    });
  }

  private addMaterialData(props: IProps) {
    const { equipmentCategory, equipmentLevel, refineLevel, refineMaterial } = props;
    const found = this.data.find(p => 
      p.equipmentCategory === equipmentCategory &&
      p.equipmentLevel === equipmentLevel &&
      p.refineLevel == refineLevel);
    if (found == undefined) {
      this.data.push({
        equipmentCategory,
        equipmentLevel,
        refineLevel,
        refineMaterials: [refineMaterial]
      });
    } else {
      found.refineMaterials.push(refineMaterial);
    }
  }
}

export default RefineMaterialTable;