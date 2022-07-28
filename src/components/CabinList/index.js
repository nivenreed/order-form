import React from 'react';

function CabinList({ cabinName, selectedCabinName, setSelectedCabinName }) {
  const click = (data) => {
    setSelectedCabinName(data);
  };
  // const cabinNameList1 = cabinData.map((data) => data.cabin);
  // const cabinNames = [...new Set(cabinNameList1)];
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
      <h1>{selectedCabinName === '' ? 'select cabin' : selectedCabinName}</h1>
      <ul className="nameList">{cabin}</ul>
    </>
  );
}

export default CabinList;
