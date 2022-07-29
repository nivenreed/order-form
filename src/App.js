import React, { useState } from 'react';
import './App.css';
import CabinList from './components/CabinList';
import Invoice from './components/invoice';
import cabinData from './data/cabin';

function App() {
  const [selectedCabinName, setSelectedCabinName] = useState('');
  const cabinNameList1 = cabinData.map((data) => data.cabin);
  const cabinNames = [...new Set(cabinNameList1)];

  return (
    <>
      <CabinList
        cabinName={cabinNames}
        selectedCabinName={selectedCabinName}
        setSelectedCabinName={setSelectedCabinName}
      />
      <Invoice selectedCabinName={selectedCabinName} />
    </>
  );
}

export default App;
