import React from 'react';
import cabinData from '../../data/cabin';
import '../../App.css';

function CabinList() {
  const click = (data) => {
    console.log(data);
  };
  const cabinNameList1 = cabinData.map((data) => data.cabin);
  const cabinNames = [...new Set(cabinNameList1)];
  const cabin = cabinNames.map((data, index) => (
    <li className="cabinNameList" key={index}>
      <button className="cabinListBtn" key={index} onClick={() => click(data)}>
        {data}
      </button>
    </li>
  ));

  return <ul className="NameList">{cabin}</ul>;
}

export default CabinList;
