import React from 'react';
import './index.css';

function CabinSize({
  cabinWallOptions,
  cabinSize,
  setSelectedWallOpt,
  setSelectedSize,
  setCurrentScreen,
}) {
  const wallOptClick = (data) => {
    setSelectedWallOpt(data);
  };

  const deDupeWallOpt = [...new Set(cabinWallOptions)];
  const displayWallOptions = deDupeWallOpt.map((data, index) => (
    <button key={index} onClick={() => wallOptClick(data)}>
      {data}mm
    </button>
  ));

  const sizeClick = (data) => {
    setSelectedSize(data);
    setCurrentScreen('optionalExtras');
  };

  const deDupeSize = [];

  for (let i = 0; i <= cabinSize.length - 1; i++) {
    let value = cabinSize[i];
    const inArray = deDupeSize.find((i) => {
      return i.width === value.width && i.depth === value.depth;
    });
    if (inArray === undefined) {
      deDupeSize.push(value);
    }
  }
  const displayCabinSize = deDupeSize.map((data, index) => (
    <button key={index} onClick={() => sizeClick(data, data)}>
      {data.width}m x {data.depth}m
    </button>
  ));

  return (
    <>
      <div className="cabinSizesGrid">
        <h2 className="spanTwo">Select Wall Thickness</h2>
        {displayWallOptions}
        <h2 className="spanTwo">Size</h2>
        {displayCabinSize}
      </div>
    </>
  );
}

export default CabinSize;
