import './App.css';
import React from 'react';
import { Provider } from 'mobx-react';
import RootStore from './Data/RootStore';
import EquipmentInfoViewModel from './Presentation/Views/EquipmentInfo/EquipmentInfoViewModel';
import MaterialInfoViewModel from './Presentation/Views/MaterialInfo/MaterialInfoViewModel';
import RefineInfoViewModel from './Presentation/Views/RefineInfo/RefineInfoViewModel';
import RefineRangeViewModel from './Presentation/Views/RefineRange/RefineRangeViewModel';
import RefineProcessViewModel from './Presentation/Views/RefineProcess/RefineProcessViewModel';
import RefineSimulationViewModel from './Presentation/Views/RefineSimulation/RefineSimulationViewModel';
import RefineStatsViewModel from './Presentation/Views/RefineStats/RefineStatsViewModel';

function Title() {
  return (
    <div className='input-groups'>
      <span className='title'>RO 精煉模擬器</span>
      <span>最後更新日期: 2022.09.08</span>
    </div>
  );
}

class App extends React.Component {
  rootStore: RootStore = new RootStore();

  render() {
    return (
      <div className='container'>
        <Title />
        <Provider {...this.rootStore}>
          <EquipmentInfoViewModel />
          <MaterialInfoViewModel />
          <RefineInfoViewModel />
          <RefineRangeViewModel />
          <RefineProcessViewModel />
          <RefineSimulationViewModel />
          <RefineStatsViewModel />
        </Provider>
        <div style={{height: 300}}></div>
      </div>
    );
  }
}

export default App;
