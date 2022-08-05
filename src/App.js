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
  const [selectedSize, setSelectedSize] = useState('');
  const filtered = cabinData.filter((data) => data.cabin === selectedCabinName);
  const cabinWallOptions = filtered.map((data) => data.wallOptions);

  const cabinSize = filtered.map((data) => {
    return {
      width: data.width,
      depth: data.depth,
    };
  });

  // Invoice
  const filteredPrice = cabinData.filter(
    (data) =>
      data.cabin === selectedCabinName &&
      data.wallOptions === selectedWallOpt &&
      data.width === selectedSize.width &&
      data.depth === selectedSize.depth
  );

  const cabinPrice = filteredPrice.map((data) => {
    return data.price;
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
          selectedWallOpt={selectedWallOpt}
          setSelectedWallOpt={setSelectedWallOpt}
          setSelectedSize={setSelectedSize}
        />
      )}
      <Invoice
        selectedCabinName={selectedCabinName}
        selectedWallOpt={selectedWallOpt}
        selectedSize={selectedSize}
        cabinPrice={cabinPrice}
      />
    </>
  );
}

export default App;
