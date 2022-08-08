import React from 'react';

function OptionalExtras({
  setSelectedRoofInsulation,
  setSelectedFloorInsulation,
}) {
  const roofInsulationClick = () => {
    setSelectedRoofInsulation((current) => !current);
  };

  const floorInsulationClick = () => {
    setSelectedFloorInsulation((current) => !current);
  };

  return (
    <div>
      <h2>Optional Extras</h2>
      <button onClick={roofInsulationClick}>Roof Insulation</button>
      <button onClick={floorInsulationClick}>Floor Insulation</button>
    </div>
  );
}

export default OptionalExtras;
