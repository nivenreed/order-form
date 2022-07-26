import React, { useState } from 'react';
import cabinData from '../../data/cabin';

function CabinList() {
  const click = (data) => {
    setCabinName(data);
    console.log(data);
  };
  const [cabinName, setCabinName] = useState('Select Cabin');
  const [btnSelected, isbtnSelected] = useState(false);
  const cabinNameList1 = cabinData.map((data) => data.cabin);
  const cabinNames = [...new Set(cabinNameList1)];
  const cabin = cabinNames.map((data, index) => (
    <li className="cabinNameList" key={index}>
      <button className="cabinListBtn" key={index} onClick={() => click(data)}>
        {data}
      </button>
    </li>
  ));

  return (
    <>
      <h1> {cabinName} </h1>
      <ul className="NameList">{cabin}</ul>
    </>
  );
}

export default CabinList;
