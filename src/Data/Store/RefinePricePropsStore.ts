import { action, makeObservable, observable } from "mobx";
import { RefinePriceProps } from "../../Core/Simulator";

class RefinePricePropsStore implements RefinePriceProps {
  @observable blessingPrice = 0;
  @observable equipmentPrice = 0;
  @observable refinePriceBeforeTen = 0;
  @observable refinePriceAfterTen = 0;

  @observable Phracon = 0;
  @observable Emveretarcon = 0;
  @observable Oridecon = 0;
  @observable Etherdeocon = 0;
  @observable Bradium = 0;
  @observable EtelBradium = 0;

  @observable EnrichedOridecon = 0;
  @observable HDOridecon = 0;
  @observable EnrichedEtherdeocon = 0;
  @observable HDBradium = 0;
  @observable HDEtherdeocon = 0;
  @observable HDEtelBradium = 0;

  @observable Elunium = 0;
  @observable Etherium = 0;
  @observable Carnium = 0;
  @observable EtelCarnium = 0;

  @observable EnrichedElunium = 0;
  @observable HDElunium = 0;
  @observable EnrichedEthernium = 0;
  @observable HDEtelCarnium = 0;
  @observable HDEthernium = 0;
  @observable HDCarnium = 0;

  constructor() {
    makeObservable(this);
  }
  
  @action setEquipmentPrice(value: number) {
    this.equipmentPrice = value;
  }

  @action setRefinePriceBeforeTen(value: number) {
    this.refinePriceBeforeTen = value;
  }

  @action setRefinePriceAfterTen(value: number) {
    this.refinePriceAfterTen = value;
  }

  @action setPrice(name: string, value: number) {
    this[name as keyof RefinePriceProps] = value;
  }

  getPrice(name: string) {
    return this[name as keyof RefinePriceProps];
  }
}

export default RefinePricePropsStore;