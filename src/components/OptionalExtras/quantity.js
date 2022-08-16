import React, { useState } from 'react';

function Quantity({ value, setValue, setSelectedPaint }) {
  const [paintValue, setPaintValue] = useState(0);
  const addClick = () => {
    setValue === setPaintValue;
    setSelectedPaint((current) => !current);
  };

  console.log(paintValue);

  return (
    <div>
      <input
        type="number"
        name="quantity"
        id="quantity"
        onChange={(e) => setPaintValue(e.target.value)}
        value={value}
      />
      <button onClick={addClick}>Add</button>
    </div>
  );
}

export default Quantity;
