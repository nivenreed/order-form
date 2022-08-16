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
  setIsQtyShown,
  isQtyShown,
  paintQty,
  setPaintQty,
  setSelectedPaint,
  isPreservativeQtyShown,
  setIsPreservativeQtyShown,
  preservativeQty,
  setPreservativeQty,
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

  const paintClick = () => {
    setIsQtyShown((current) => !current);
    setSelectedPaint((current) => !current);
  };
  const preservativeClick = () => {
    setIsPreservativeQtyShown((current) => !current);
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
      <button onClick={preservativeClick}>Preservative</button>
      {isPreservativeQtyShown === true && (
        <input
          type="number"
          name="quantity"
          id="quantity"
          min={0}
          onChange={(e) => setPreservativeQty(e.target.value)}
          value={preservativeQty}
        />
      )}
      <button onClick={paintClick}>Paint</button>
      {isQtyShown === true && (
        <input
          type="number"
          name="quantity"
          id="quantity"
          min={0}
          onChange={(e) => setPaintQty(e.target.value)}
          value={paintQty}
        />
      )}
    </div>
  );
}

export default OptionalExtras;
