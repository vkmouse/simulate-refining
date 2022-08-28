import './App.css';
import React, { Component } from 'react';
import RootStore from './Data/RootStore';
import { observer, Provider } from 'mobx-react';
import EquipmentViewModel from './Presentation/Views/EquipmentView/EquipmentViewModel';
import MaterialViewModel from './Presentation/Views/MaterialView/MaterialViewModel';
import RefineRangeViewModel from './Presentation/Views/RefineRangeView/RefineRangeViewModel';
import RefineProcessViewModel from './Presentation/Views/RefineProcessView/RefineProcessViewModel';
import SimulateResultViewModel from './Presentation/Views/SimulateResultView/SimulateResultViewModel';
import SimulateViewModel from './Presentation/Views/SimulateView/SimulateViewModel';
import RefineViewModel from './Presentation/Views/RefineView/RefineViewModel';

function Title() {
  return <div className='title'>RO 精煉模擬器</div>;
}

@observer
export default class App extends Component {
  rootStore: RootStore = new RootStore();

  render() {
    return (
      <div className='container'>
        <Title />
        <Provider {...this.rootStore}>
          <EquipmentViewModel />
          <MaterialViewModel />
          <RefineViewModel />
          <RefineRangeViewModel />
          <RefineProcessViewModel />
          <SimulateViewModel />
          <SimulateResultViewModel />
        </Provider>
        <div style={{height: 300}}></div>
      </div>
    );
  }
}
