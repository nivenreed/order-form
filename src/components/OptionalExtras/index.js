import React from 'react';

function OptionalExtras({
  setSelectedRoofInsulation,
  setSelectedFloorInsulation,
  selectedWallOpt,
  setSelectedWallInsulation,
}) {
  const roofInsulationClick = () => {
    setSelectedRoofInsulation((current) => !current);
  };

  const floorInsulationClick = () => {
    setSelectedFloorInsulation((current) => !current);
  };
  const wallInsulationClick = () => {
    setSelectedWallInsulation((current) => !current);
  };

  return (
    <div>
      <h2>Optional Extras</h2>
      <button onClick={roofInsulationClick}>Roof Insulation</button>
      <button onClick={floorInsulationClick}>Floor Insulation</button>
      {selectedWallOpt === '45+45' && (
        <button onClick={wallInsulationClick}>Wall Insulation</button>
      )}
    </div>
  );
}

export default OptionalExtras;
