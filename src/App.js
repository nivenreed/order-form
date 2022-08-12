import React, { useState } from 'react';
import './App.css';
import CabinList from './components/CabinList';
import CabinSize from './components/CabinSize';
import Invoice from './components/invoice';
import OptionalExtras from './components/OptionalExtras';
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
  const filteredCabinName = cabinData.filter(
    (data) => data.cabin === selectedCabinName
  );
  const cabinWallOptions = filteredCabinName.map((data) => data.wallOptions);

  const cabinSize = filteredCabinName.map((data) => {
    return {
      width: data.width,
      depth: data.depth,
    };
  });
  // Optional Extras
  const [selectedVeranda, setSelectedVeranda] = useState(false);
  const [selectedRoofInsulation, setSelectedRoofInsulation] = useState(false);
  const [selectedFloorInsulation, setSelectedFloorInsulation] = useState(false);
  const [selectedWallInsulation, setSelectedWallInsulation] = useState(false);
  const [selectedBaseWork, setSelectedBaseWork] = useState(false);
  const [selectedAirCon, setSelectedAirCon] = useState(false);
  const [selectedCabinInstallation, setSelectedCabinInstallation] =
    useState(false);

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

  const verandaPrice = filteredPrice.map((data) => {
    return data.verandaAndBase;
  });

  const roofInsulationPrice = filteredPrice.map((data) => {
    return data.roofInsulation;
  });

  const floorInsulationPrice = filteredPrice.map((data) => {
    return data.floorInsulation;
  });

  const wallInsulationPrice = filteredPrice.map((data) => {
    return data.wallInsulation;
  });

  const baseWorkPrice = filteredPrice.map((data) => {
    return data.cabinBasework;
  });

  const airConPrice = 1495;

  const cabinInstallationPrice = filteredPrice.map((data) => {
    return data.cabinInstallation;
  });

  return (
    <>
      <div className="mainContainer">
        <div className="container">
          {currentScreen === '' && (
            <CabinList
              cabinName={cabinNames}
              selectedCabinName={selectedCabinName}
              setSelectedCabinName={setSelectedCabinName}
              currentScreen={currentScreen}
              setCurrentScreen={setCurrentScreen}
            />
          )}
          {(currentScreen === 'cabinName' ||
            currentScreen === 'optionalExtras') && (
            <CabinSize
              cabinWallOptions={cabinWallOptions}
              cabinSize={cabinSize}
              setCurrentScreen={setCurrentScreen}
              selectedWallOpt={selectedWallOpt}
              setSelectedWallOpt={setSelectedWallOpt}
              setSelectedSize={setSelectedSize}
            />
          )}
          {currentScreen === 'optionalExtras' && (
            <OptionalExtras
              setSelectedVeranda={setSelectedVeranda}
              setSelectedRoofInsulation={setSelectedRoofInsulation}
              setSelectedFloorInsulation={setSelectedFloorInsulation}
              selectedWallOpt={selectedWallOpt}
              setSelectedWallInsulation={setSelectedWallInsulation}
              setSelectedBaseWork={setSelectedBaseWork}
              setSelectedAirCon={setSelectedAirCon}
              setSelectedCabinInstallation={setSelectedCabinInstallation}
            />
          )}
        </div>
        <div className="container2">
          <Invoice
            selectedCabinName={selectedCabinName}
            selectedWallOpt={selectedWallOpt}
            selectedSize={selectedSize}
            cabinPrice={cabinPrice}
            selectedVeranda={selectedVeranda}
            verandaPrice={verandaPrice}
            selectedRoofInsulation={selectedRoofInsulation}
            roofInsulationPrice={roofInsulationPrice}
            floorInsulationPrice={floorInsulationPrice}
            selectedFloorInsulation={selectedFloorInsulation}
            selectedWallInsulation={selectedWallInsulation}
            wallInsulationPrice={wallInsulationPrice}
            selectedBaseWork={selectedBaseWork}
            baseWorkPrice={baseWorkPrice}
            selectedAirCon={selectedAirCon}
            airConPrice={airConPrice}
            selectedCabinInstallation={selectedCabinInstallation}
            cabinInstallationPrice={cabinInstallationPrice}
          />
        </div>
      </div>
    </>
  );
}

export default App;
