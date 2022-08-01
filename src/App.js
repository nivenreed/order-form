import React, { useState } from 'react';
import './App.css';
import CabinList from './components/CabinList';
import CabinSize from './components/CabinSize';
import Invoice from './components/invoice';
import cabinData from './data/cabin';

function App() {
  const [selectedCabinName, setSelectedCabinName] = useState('');
  const [currentScreen, setCurrentScreen] = useState('');
  const cabinNameList1 = cabinData.map((data) => data.cabin);
  const cabinNames = [...new Set(cabinNameList1)];

  return (
    <>
      {currentScreen === '' && (
        <CabinList
          cabinName={cabinNames}
          selectedCabinName={selectedCabinName}
          setSelectedCabinName={setSelectedCabinName}
          currentScreen={currentScreen}
          setCurrentScreen={setCurrentScreen}
        />
      )}
      {currentScreen === 'cabinName' && <CabinSize />}
      <Invoice selectedCabinName={selectedCabinName} />
    </>
  );
}

export default App;
