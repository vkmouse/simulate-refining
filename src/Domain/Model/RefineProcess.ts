import { RefineQueryTable } from "../../Core/Core";
import RefineMaterial from "./RefineMaterial";

interface RefineProcess {
  selectedMaterials: RefineQueryTable<RefineMaterial[]>
  enableBlessings: RefineQueryTable<boolean[]>
}

export default RefineProcess;