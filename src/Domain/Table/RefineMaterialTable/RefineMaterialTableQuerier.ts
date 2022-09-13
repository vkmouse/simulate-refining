import { RefineMaterial, RefineMaterialProps } from "../../../Core/Refinement";
import { RefineMaterialQueryProps } from "../../../Core/Table";
import RefineMaterialTable from "./RefineMaterialTable";

export function query(props: RefineMaterialQueryProps): RefineMaterial[][] {
  const equal = (lhs: RefineMaterialQueryProps, rhs: RefineMaterialQueryProps) => {
    return lhs.equipmentCategory === rhs.equipmentCategory && 
           lhs.equipmentLevel === rhs.equipmentLevel;
  };

  const data = RefineMaterialTable.getData();
  const output = data.filter(p => equal(p, props)).map(p => p.refineMaterials);

  if (output.length === 0) {
    throw "[RefineMaterialTable] query error";
  } else {
    return output;
  }
}

export function queryDistinct(props: RefineMaterialQueryProps): RefineMaterial[] {
  const predicate = (lhs: RefineMaterialProps, rhs: RefineMaterialQueryProps) => {
    return lhs.refinableEquipmentCategory.includes(rhs.equipmentCategory) && 
           lhs.refinableEquipmentLevel.includes(rhs.equipmentLevel);
  };

  const data = RefineMaterialTable.getMaterials();
  const output = data.filter(p => predicate(p, props));

  if (output.length === 0) {
    throw "[RefineMaterialTable] query distinct error";
  } else {
    return output;
  }
}

export function queryByChineseName(name: string): RefineMaterial {
  const data = RefineMaterialTable.getMaterials();
  const found = data.find(p => p.chineseName === name);

  if (found === undefined) {
    throw "[RefineMaterialTable] queryByChineseName error";
  } else {
    return found;
  }
}
