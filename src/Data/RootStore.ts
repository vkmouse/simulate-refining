import EquipmentStore from "./Store/EquipmentStore";
import MaterialStore from "./Store/MaterialStore";
import RefineProcessStore from "./Store/RefineProcessStore";
import RefineRangeStore from "./Store/RefineRangeStore";
import SimulateResultStore from "./Store/SimulateResultStore";

export default class RootStore {
  equipmentStore: EquipmentStore;
  materialStore: MaterialStore;
  refineRangeStore: RefineRangeStore;
  refineProcessStore: RefineProcessStore;
  simulateResultStore: SimulateResultStore;

  static type = {
    EQUIPMENT: 'equipmentStore',
    MATERIAL: 'materialStore',
    REFINE_RANGE: 'refineRangeStore',
    REFINE_PROCESS: 'refineProcessStore',
    SIMULATE_RESULT: 'simulateResultStore',
  };

  constructor() {
    this.equipmentStore = new EquipmentStore();
    this.materialStore = new MaterialStore();
    this.refineRangeStore = new RefineRangeStore();
    this.refineProcessStore = new RefineProcessStore();
    this.simulateResultStore = new SimulateResultStore();
  }

  getStores = () => ({
    [RootStore.type.EQUIPMENT]: this.equipmentStore,
    [RootStore.type.MATERIAL]: this.materialStore,
    [RootStore.type.REFINE_RANGE]: this.refineRangeStore,
    [RootStore.type.REFINE_PROCESS]: this.refineProcessStore,
    [RootStore.type.SIMULATE_RESULT]: this.simulateResultStore,
  });
}