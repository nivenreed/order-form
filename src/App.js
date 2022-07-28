import React, { useState } from 'react';
import './App.css';
import CabinList from './components/CabinList';
import cabinData from './data/cabin';

function App() {
  const [selectedCabinName, setSelectedCabinName] = useState('');
  const cabinNameList1 = cabinData.map((data) => data.cabin);
  const cabinNames = [...new Set(cabinNameList1)];
  // const cabin = cabinNames.map((data, index),

  return (
    <CabinList
      cabinName={cabinNames}
      selectedCabinName={selectedCabinName}
      setSelectedCabinName={setSelectedCabinName}
    />
  );
}

export default App;
