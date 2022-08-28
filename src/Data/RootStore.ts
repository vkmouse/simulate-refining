import EquipmentStore from "./Store/EquipmentStore";
import MaterialStore from "./Store/MaterialStore";
import RefineProcessStore from "./Store/RefineProcessStore";
import RefineRangeStore from "./Store/RefineRangeStore";
import RefineStore from "./Store/RefineStore";
import SimulateResultStore from "./Store/SimulateResultStore";

export default class RootStore {
  equipmentStore: EquipmentStore;
  materialStore: MaterialStore;
  refineStore: RefineStore;
  refineRangeStore: RefineRangeStore;
  refineProcessStore: RefineProcessStore;
  simulateResultStore: SimulateResultStore;

  static type = {
    EQUIPMENT: 'equipmentStore',
    MATERIAL: 'materialStore',
    REFINE: 'refineStore',
    REFINE_RANGE: 'refineRangeStore',
    REFINE_PROCESS: 'refineProcessStore',
    SIMULATE_RESULT: 'simulateResultStore',
  };

  constructor() {
    this.equipmentStore = new EquipmentStore();
    this.materialStore = new MaterialStore();
    this.refineStore = new RefineStore();
    this.refineRangeStore = new RefineRangeStore();
    this.refineProcessStore = new RefineProcessStore();
    this.simulateResultStore = new SimulateResultStore();
  }

  getStores = () => ({
    [RootStore.type.EQUIPMENT]: this.equipmentStore,
    [RootStore.type.MATERIAL]: this.materialStore,
    [RootStore.type.REFINE]: this.refineStore,
    [RootStore.type.REFINE_RANGE]: this.refineRangeStore,
    [RootStore.type.REFINE_PROCESS]: this.refineProcessStore,
    [RootStore.type.SIMULATE_RESULT]: this.simulateResultStore,
  });
}