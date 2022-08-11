import React from 'react';

function CabinSize({
  cabinWallOptions,
  cabinSize,
  setSelectedWallOpt,
  selectedWallOpt,
  setSelectedSize,
  setCurrentScreen,
}) {
  const wallOptClick = (data) => {
    setSelectedWallOpt(data);
    // setCurrentScreen('cabinSize');
    console.log('selectedWallOpt =', selectedWallOpt);
  };

  const deDupeWallOpt = [...new Set(cabinWallOptions)];
  const displayWallOptions = deDupeWallOpt.map((data, index) => (
    <li className="cabinWallWallOpt" key={index}>
      <button onClick={() => wallOptClick(data)}>{data}mm</button>
    </li>
  ));

  const sizeClick = (data) => {
    setSelectedSize(data);
    setCurrentScreen('optionalExtras');
  };

  const deDupeSize = [];

  for (let i = 0; i <= cabinSize.length - 1; i++) {
    let value = cabinSize[i];
    const inArray = deDupeSize.find((i) => {
      // you can console.log in here if you need to
      return i.width === value.width && i.depth === value.depth;
    });
    if (inArray === undefined) {
      deDupeSize.push(value);
    }
  }
  const displayCabinSize = deDupeSize.map((data, index) => (
    <li key={index}>
      <button onClick={() => sizeClick(data, data)}>
        {data.width}m x {data.depth}m
      </button>
    </li>
  ));

  return (
    <>
      <div>
        <h1>Select Wall Thickness</h1>
        <ul>{displayWallOptions}</ul>
        <h1>Size</h1>
        <ul>{displayCabinSize}</ul>
      </div>
    </>
  );
}

export default CabinSize;
