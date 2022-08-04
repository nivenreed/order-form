import React from 'react';
import CabinList from '../CabinList';

function CabinSize({
  cabinWallOptions,
  cabinSize,
  setSelectedWallOpt,
  setCurrentScreen,
}) {
  const deDupeWallOpt = [...new Set(cabinWallOptions)];
  const displayWallOptions = deDupeWallOpt.map((data, index) => (
    <li className="cabinWallWallOpt" key={index}>
      <button onClick={() => click(data)}>{data}mm</button>
    </li>
  ));

  const click = (data) => {
    setSelectedWallOpt(data);
    setCurrentScreen('cabinSize');
  };

  const deDupeSize = [];

  for (let i = 0; i <= cabinSize.length; i++) {
    let value = cabinSize[i];
    // console.log(
    //   deDupeSize.find((i) => i.width === value.width && i.depth === value.depth)
    // );
    if (
      deDupeSize.find((i) => i.width !== value.width && i.depth !== value.depth)
    )
      deDupeSize.push(value);
    console.log(i.width === value);
    // console.log('value', value);
    // console.log('i', i);
    // console.log('deDupe =', deDupeSize);
  }
  const displayCabinSize = cabinSize.map((data, index) => (
    <li key={index}>
      <button>
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
