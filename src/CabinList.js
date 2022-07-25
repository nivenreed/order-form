import React from 'react';
import './App.css';
import cabinData from './data/cabin';

function CabinList() {
  const click = (event) => {
    console.log(event.target.innerHTML);
  };
  const cabinNameList1 = cabinData.map((data) => data.cabin);
  const cabinNames = [...new Set(cabinNameList1)];
  const cabin = cabinNames.map((data, index) => (
    <li key={index}>
      <button key={index} onClick={click}>
        {data}{' '}
      </button>
    </li>
  ));

  return <ul>{cabin}</ul>;
}

export default CabinList;
