import React from 'react';
import './index.css';

function CabinList({
  cabinName,
  selectedCabinName,
  setSelectedCabinName,
  setCurrentScreen,
}) {
  const click = (data) => {
    setSelectedCabinName(data);
    setCurrentScreen('cabinName');
  };

  const cabin = cabinName.map((data, index) => (
    <button
      key={index}
      className={
        data === selectedCabinName ? 'cabinListBtnSelected' : 'cabinListBtn'
      }
      onClick={() => click(data)}
    >
      {data}
    </button>
  ));

  return (
    <>
      <h1>Creative Living</h1>
      <div className="cabinNameListGrid">{cabin}</div>
    </>
  );
}

export default CabinList;
