import React from 'react';

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
    <li className="cabinNameList" key={index}>
      <button
        className={
          data === selectedCabinName ? 'cabinListBtnSelected' : 'cabinListBtn'
        }
        onClick={() => click(data)}
      >
        {data}
      </button>
    </li>
  ));

  return (
    <>
      <h1>Creative Living</h1>
      <div className="divNameList">
        <ul className="nameList">{cabin}</ul>
      </div>
    </>
  );
}

export default CabinList;
