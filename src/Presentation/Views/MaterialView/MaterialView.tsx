import React from "react";
import { ChangeEvent, Component } from "react";
import PriceTextField from "../../Components/PriceTextField";

interface IProps {
  setPrice: (value: number, name: string) => void
  items: { label: string, propertyName: string, value: number }[][]
}

class MaterialView extends Component<IProps> {
  render() {
    const { setPrice, items } = this.props;
    return (
      <div className='block'>
        <div className="title">材料資訊</div>
        {items.map((m) => {
          const key: string = m.reduce(
            (str, item) => str + item.label,
            ''
          );
          return (
            <div key={key} className='input-group'>
              {m.map(n => 
              <PriceTextField 
                key={n.label}
                label={n.label}
                value={n.value.toString()}
                onChange={(e: number) => {
                  setPrice(e, n.propertyName);
                }}
              /> 
              )}
            </div>
          );
        })}
      </div>
    );    
  }
}

export default MaterialView;