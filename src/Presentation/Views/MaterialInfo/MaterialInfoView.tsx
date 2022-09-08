import React from "react";
import TextField from "../../Components/NumberTextField";

interface IProps {
  data: {
    label: string
    value: number
    maxValue?: number
    onChange?: (value: number) => void
  }[]
}

class MaterialInfoView extends React.Component<IProps> {
  render() {
    const { data } = this.props;
    const table = [];
    for (let i = 0; i < data.length; i = i + 3) {
      table.push(data.slice(i, i + 3));
    }
    return (
      <div className='block'>
        <div className="title">材料資訊</div>
          {table.map((data, i) => 
            // eslint-disable-next-line react/no-unknown-property
            <div className='input-group' key={i}>
              {data.map((p, j) => 
                <TextField key={j} {...p}/>
              )}
            </div>
          )}
      </div>
    );    
  }
}

export default MaterialInfoView;