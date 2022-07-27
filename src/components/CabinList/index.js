import React, { useState } from 'react';
import cabinData from '../../data/cabin';

function CabinList({ name }) {
  const click = (data) => {
    setCabinName(data);
  };
  const [cabinName, setCabinName] = useState('');
  // const cabinNameList1 = cabinData.map((data) => data.cabin);
  // const cabinNames = [...new Set(cabinNameList1)];
  const cabin = name.map((data, index) => (
    <li className="cabinNameList" key={index}>
      <button
        className={data === cabinName ? 'cabinListBtnSelected' : 'cabinListBtn'}
        onClick={() => click(data)}
      >
        {data}
      </button>
    </li>
  ));

  return (
    <>
      <h1>{cabinName ? cabinName : 'Select Cabin'}</h1>
      <ul className="NameList">{cabin}</ul>
    </>
  );
}

export default CabinList;
