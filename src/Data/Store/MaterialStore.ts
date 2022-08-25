import { action, makeObservable, observable } from "mobx";
import RefineMaterial from "../../Domain/Model/RefineMaterial";
import RefineMaterials from "../../Domain/Model/RefineMaterials";

export default class MaterialStore implements RefineMaterials {
  @observable blessing = 0;
  @observable Phracon = 0;
  @observable Emveretarcon = 0;

  @observable Oridecon = 0;
  @observable EnrichedOridecon = 0;
  @observable HDOridecon = 0;
  @observable Etherdeocon = 0;
  @observable EnrichedEtherdeocon = 0;
  @observable HDEtherdeocon = 0;

  @observable Bradium = 0;
  @observable HDBradium = 0;
  @observable EtelBradium = 0;
  @observable HDEtelBradium = 0;

  @observable Elunium = 0;
  @observable EnrichedElunium = 0;
  @observable HDElunium = 0;
  @observable Ethernium = 0;
  @observable EnrichedEthernium = 0;
  @observable HDEthernium = 0;

  @observable Carnium = 0;
  @observable HDCarnium = 0;
  @observable EtelCarnium = 0;
  @observable HDEtelCarnium = 0;

  constructor() {
    makeObservable(this);
  }

  @action setPrice(value: number, name: string) {
    type objectKey = keyof RefineMaterials
    const key = name as objectKey;
    if (this[key] !== value) {
      this[key] = value;
    }
  }

  getPrice(material: RefineMaterial) {
    type objectKey = keyof RefineMaterials
    const key = material.constructor.name as objectKey;
    return this[key];
  }
}
