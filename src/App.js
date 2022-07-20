import React from 'react';
import Tweet from './CabinList';
import cabinData from './data/cabin';

function App(){

const cabinNameList1 = cabinData.map(data => data.cabin)
const cabinNames = [...new Set(cabinNameList1)] 
const cabin = cabinNames.map((data, index)=> (
  <li key={index}>
  <button>{data} </button>
  </li>
  // console.log();
  // <li key={index}>{data}  </li>
))
return (
  <ul>
    {cabin}
  </ul>
)
}


export default App;