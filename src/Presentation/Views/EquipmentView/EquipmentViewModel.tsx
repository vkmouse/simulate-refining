import { inject, observer } from 'mobx-react';
import RootStore from '../../../Data/RootStore';
import EquipmentController from './EquipmentController';

@inject(RootStore.type.EQUIPMENT)
@observer
export default class EquipmentViewModel extends EquipmentController {}
