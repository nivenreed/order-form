import React from 'react';
import './index.css';

function OptionalExtras({
  setSelectedVeranda,
  setSelectedRoofInsulation,
  setSelectedFloorInsulation,
  selectedWallOpt,
  setSelectedWallInsulation,
  setSelectedBaseWork,
  setSelectedAirCon,
  setSelectedCabinInstallation,
}) {
  const verandaClick = () => {
    setSelectedVeranda((current) => !current);
  };
  const roofInsulationClick = () => {
    setSelectedRoofInsulation((current) => !current);
  };

  const floorInsulationClick = () => {
    setSelectedFloorInsulation((current) => !current);
  };
  const wallInsulationClick = () => {
    setSelectedWallInsulation((current) => !current);
  };
  const cabinBaseWorkClick = () => {
    setSelectedBaseWork((current) => !current);
  };

  const cabinInstallationClick = () => {
    setSelectedCabinInstallation((current) => !current);
  };

  const airConClick = () => {
    setSelectedAirCon((current) => !current);
  };

  return (
    <div className="optionalExtrasGrid">
      <h2 className="spanFour">Optional Extras</h2>
      <button onClick={verandaClick}>Veranda & Base</button>
      <button onClick={roofInsulationClick}>Roof Insulation</button>
      <button onClick={floorInsulationClick}>Floor Insulation</button>
      {selectedWallOpt === '45+45' && (
        <button onClick={wallInsulationClick}>Wall Insulation</button>
      )}
      <button onClick={cabinBaseWorkClick}>Cabin Structural Base</button>
      <button onClick={cabinInstallationClick}>Cabin Installation</button>
      <button onClick={airConClick}>Heating & Air-Con</button>
      <p>
        <button>-</button>Paint <button>+</button>
      </p>
    </div>
  );
}

export default OptionalExtras;
