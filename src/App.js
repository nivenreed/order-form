import React from 'react';
import './App.css';
import CabinList from './components/CabinList';
import cabinData from './data/cabin';

function App() {
  const cabinNameList1 = cabinData.map((data) => data.cabin);
  const cabinNames = [...new Set(cabinNameList1)];
  // const cabin = cabinNames.map((data, index),

  return <CabinList name={cabinNames} />;
}

export default App;
