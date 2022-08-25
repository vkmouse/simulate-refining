import React, { ChangeEvent } from 'react';
import { inject, observer } from 'mobx-react';
import RootStore from '../../../Data/RootStore';
import MaterialStore from '../../../Data/Store/MaterialStore';
import MaterialView from './MaterialView';
import EquipmentStore from '../../../Data/Store/EquipmentStore';
import { EquipmentCategory, EquipmentLevel } from '../../../Core/Core';

interface IProps {
  materialStore: MaterialStore;
  equipmentStore: EquipmentStore
}

@inject(RootStore.type.MATERIAL, RootStore.type.EQUIPMENT )
@observer
class MaterialViewModel extends React.Component<IProps> {
  static defaultProps = {} as IProps;
  private store: MaterialStore;
  private equipmentStore: EquipmentStore;

  constructor(props: IProps) {
    super(props);
    this.store = props.materialStore;
    this.equipmentStore = props.equipmentStore;
  }

  setPrice = (value: number, name: string): void => {
    this.store?.setPrice(value, name);
  };

  getItems = () => {
    const itemsGroup = {
      [EquipmentCategory.Weapon]: {
        [EquipmentLevel.Level1]: [
          [{label: '強化武器金屬-級數一', propertyName: 'Phracon', value: this.store.Phracon}, 
           {label: '鈽鐳礦石', propertyName: 'Bradium', value: this.store.Bradium},
           {label: '高密度鈽鐳礦石', propertyName: 'HDBradium', value: this.store.HDBradium}],
          [{label: '鐵匠的祝福', propertyName: 'blessing', value: this.store.blessing}]],
        [EquipmentLevel.Level2]: [
          [{label: '強化武器金屬-級數二', propertyName: 'Emveretarcon', value: this.store.Emveretarcon}, 
           {label: '鈽鐳礦石', propertyName: 'Bradium', value: this.store.Bradium},
           {label: '高密度鈽鐳礦石', propertyName: 'HDBradium', value: this.store.HDBradium}],
          [{label: '鐵匠的祝福', propertyName: 'blessing', value: this.store.blessing}]],
        [EquipmentLevel.Level3]: [
          [{label: '神之金屬', propertyName: 'Oridecon', value: this.store.Oridecon}, 
           {label: '濃縮神之金屬', propertyName: 'EnrichedOridecon', value: this.store.EnrichedOridecon},
           {label: '高濃縮神之金屬', propertyName: 'HDOridecon', value: this.store.HDOridecon}],
          [{label: '鈽鐳礦石', propertyName: 'Bradium', value: this.store.Bradium},
           {label: '高密度鈽鐳礦石', propertyName: 'HDBradium', value: this.store.HDBradium},
           {label: '鐵匠的祝福', propertyName: 'blessing', value: this.store.blessing}]],
        [EquipmentLevel.Level4]: [
          [{label: '神之金屬', propertyName: 'Oridecon', value: this.store.Oridecon}, 
           {label: '濃縮神之金屬', propertyName: 'EnrichedOridecon', value: this.store.EnrichedOridecon},
           {label: '高濃縮神之金屬', propertyName: 'HDOridecon', value: this.store.HDOridecon}],
          [{label: '鈽鐳礦石', propertyName: 'Bradium', value: this.store.Bradium},
           {label: '高密度鈽鐳礦石', propertyName: 'HDBradium', value: this.store.HDBradium},
           {label: '鐵匠的祝福', propertyName: 'blessing', value: this.store.blessing}]],  
        [EquipmentLevel.Level5]: [
          [{label: '乙太神之金屬', propertyName: 'Etherdeocon', value: this.store.Etherdeocon}, 
           {label: '濃縮乙太神之金屬', propertyName: 'EnrichedEtherdeocon', value: this.store.EnrichedEtherdeocon},
           {label: '乙太鈽鐳', propertyName: 'EtelBradium', value: this.store.EtelBradium}],
          [{label: '高濃縮乙太神之金屬', propertyName: 'HDEtherdeocon', value: this.store.HDEtherdeocon},
           {label: '高密度乙太鈽鐳礦石', propertyName: 'HDEtelBradium', value: this.store.HDEtelBradium},
           {label: '鐵匠的祝福', propertyName: 'blessing', value: this.store.blessing}]]
      },
      [EquipmentCategory.Armor]: {
        [EquipmentLevel.Level1]: [
          [{label: '鋁', propertyName: 'Elunium', value: this.store.Elunium}, 
           {label: '濃縮鋁', propertyName: 'EnrichedElunium', value: this.store.EnrichedElunium},
           {label: '高濃縮鋁', propertyName: 'HDElunium', value: this.store.HDElunium}],
          [{label: '鈣礦石', propertyName: 'Carnium', value: this.store.Carnium},
           {label: '高密度鈣礦石', propertyName: 'HDCarnium', value: this.store.HDCarnium},
           {label: '鐵匠的祝福', propertyName: 'blessing', value: this.store.blessing}]],
        [EquipmentLevel.Level2]: [
          [{label: '乙太鋁', propertyName: 'Ethernium', value: this.store.Ethernium}, 
           {label: '濃縮乙太鋁', propertyName: 'EnrichedEthernium', value: this.store.EnrichedEthernium},
           {label: '乙太鈣礦石', propertyName: 'EtelCarnium', value: this.store.EtelCarnium}],
          [{label: '高濃縮乙太鋁', propertyName: 'HDEthernium', value: this.store.HDEthernium},
           {label: '高密度乙太鈣礦石', propertyName: 'HDEtelCarnium', value: this.store.HDEtelCarnium},
           {label: '鐵匠的祝福', propertyName: 'blessing', value: this.store.blessing}]],
        [EquipmentLevel.Level3]: [],
        [EquipmentLevel.Level4]: [],
        [EquipmentLevel.Level5]: []
      }
    };
    return itemsGroup[this.equipmentStore.category][this.equipmentStore.level];
  };

  render() {
    return (
      <MaterialView 
        setPrice={this.setPrice}
        items={this.getItems()} 
      />
    );
  }
}

export default MaterialViewModel;