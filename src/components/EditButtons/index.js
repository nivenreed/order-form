import React from 'react';

function NextEdit({
  setCurrentScreen,
  currentScreen,
  setChangeInvoiceClassName,
}) {
  const changeCabinSizeClick = () => {
    setCurrentScreen('');
  };

  const quoteBtnClick = () => {
    setCurrentScreen('quote');
    setChangeInvoiceClassName((current) => !current);
  };

  return (
    <div>
      {currentScreen !== '' && currentScreen !== 'cabinName' && (
        <button onClick={changeCabinSizeClick}>Change Cabin</button>
      )}
      <button onClick={quoteBtnClick}>Print Quote</button>
    </div>
  );
}

export default NextEdit;
