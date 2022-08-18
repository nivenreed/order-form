import React from 'react';
import './index.css';

function OptionalExtras({
  setSelectedVeranda,
  selectedVeranda,
  setSelectedRoofInsulation,
  selectedRoofInsulation,
  setSelectedFloorInsulation,
  selectedFloorInsulation,
  selectedWallOpt,
  selectedWallInsulation,
  setSelectedWallInsulation,
  setSelectedBaseWork,
  selectedBaseWork,
  selectedAirCon,
  setSelectedAirCon,
  selectedCabinInstallation,
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
      <button
        className={selectedVeranda ? 'optExtraBtnSelected' : 'optExtraBtn'}
        onClick={verandaClick}
      >
        Veranda & Base
      </button>
      <button
        className={
          selectedRoofInsulation ? 'optExtraBtnSelected' : 'optExtraBtn'
        }
        onClick={roofInsulationClick}
      >
        Roof Insulation
      </button>
      <button
        className={
          selectedFloorInsulation ? 'optExtraBtnSelected' : 'optExtraBtn'
        }
        onClick={floorInsulationClick}
      >
        Floor Insulation
      </button>
      {selectedWallOpt === '45+45' && (
        <button
          className={
            selectedWallInsulation ? 'optExtraBtnSelected' : 'optExtraBtn'
          }
          onClick={wallInsulationClick}
        >
          Wall Insulation
        </button>
      )}
      <button
        className={selectedBaseWork ? 'optExtraBtnSelected' : 'optExtraBtn'}
        onClick={cabinBaseWorkClick}
      >
        Cabin Structural Base
      </button>
      <button
        className={
          selectedCabinInstallation ? 'optExtraBtnSelected' : 'optExtraBtn'
        }
        onClick={cabinInstallationClick}
      >
        Cabin Installation
      </button>
      <button
        className={selectedAirCon ? 'optExtraBtnSelected' : 'optExtraBtn'}
        onClick={airConClick}
      >
        Heating & Air-Con
      </button>
      <button
        className={
          isPreservativeQtyShown ? 'optExtraBtnSelected' : 'optExtraBtn'
        }
        onClick={preservativeClick}
      >
        Preservative
      </button>
      {isPreservativeQtyShown && (
        <input
          type="number"
          name="quantity"
          id="quantity"
          min={0}
          onChange={(e) => setPreservativeQty(e.target.value)}
          value={preservativeQty}
        />
      )}
      <button
        className={isQtyShown ? 'optExtraBtnSelected' : 'optExtraBtn'}
        onClick={paintClick}
      >
        Paint
      </button>
      {isQtyShown && (
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
