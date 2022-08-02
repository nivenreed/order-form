import React, { useState } from 'react';
import './App.css';
import CabinList from './components/CabinList';
import CabinSize from './components/CabinSize';
import Invoice from './components/invoice';
import cabinData from './data/cabin';

function App() {
  // variables for CabinList
  const [selectedCabinName, setSelectedCabinName] = useState('');
  const [currentScreen, setCurrentScreen] = useState('');
  const cabinNameList = cabinData.map((data) => data.cabin);
  const cabinNames = [...new Set(cabinNameList)];

  // variables for CabinSize
  const [selectedWallOpt, setSelectedWallOpt] = useState('');
  const filtered = cabinData.filter((data) => data.cabin === selectedCabinName);
  const cabinWallOptions = filtered.map((data) => data.wallOptions);

  const cabinSize = filtered.map((data) => {
    return {
      width: data.width,
      depth: data.depth,
    };
  });

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
      {currentScreen === 'cabinName' && (
        <CabinSize
          cabinWallOptions={cabinWallOptions}
          filtered={filtered}
          cabinSize={cabinSize}
          setCurrentScreen={setCurrentScreen}
          setSelectedWallOpt={setSelectedWallOpt}
        />
      )}
      <Invoice selectedCabinName={selectedCabinName} />
    </>
  );
}

export default App;
