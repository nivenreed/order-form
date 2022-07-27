import React, { useState } from 'react';
import cabinData from '../../data/cabin';

function CabinList({ name }) {
  const click = (data) => {
    setCabinName(data);
  };
  const [cabinName, setCabinName] = useState('Select Cabin');
  // const cabinNameList1 = cabinData.map((data) => data.cabin);
  // const cabinNames = [...new Set(cabinNameList1)];
  const cabin = name.map((data, index) => (
    <li className="cabinNameList" key={index}>
      <button
        className={data === cabinName ? 'cabinListBtnSelected' : 'cabinListBtn'}
        key={index}
        onClick={() => click(data)}
      >
        {data}
      </button>
    </li>
  ));

  return (
    <>
      <h1>{cabinName}</h1>
      <ul className="NameList">
        {cabin}
        {/* <li className="cabinNameList" key={index}>
          <button
            className={
              data === cabinName ? 'cabinListBtnSelected' : 'cabinListBtn'
            }
            key={index}
            onClick={() => click(data)}
          >
            {data}
          </button>
        </li> */}
      </ul>
    </>
  );
}

export default CabinList;
