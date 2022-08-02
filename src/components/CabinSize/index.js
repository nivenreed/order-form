import React from 'react';

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

  const displayCabinSize = cabinSize.map((data, index) => 
    [size: { {data.width}m x {data.depth}m}, ]  
  ;

  // const displayCabinSize = cabinSize.map((data, index) => (
  //   <li key={index}>
  //     <button>
  //       {data.width}m x {data.depth}m
  //     </button>
  //   </li>
  // ));

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
