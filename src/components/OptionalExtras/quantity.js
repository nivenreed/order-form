import React from 'react';

function Quantity({ value, setValue }) {
  //   const addClick = () => {
  //     setValue === value;
  //   };

  return (
    <div>
      <button>-</button>
      <input
        type="number"
        name="quantity"
        id="quantity"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button>+</button>
      <button>Add</button>
    </div>
  );
}

export default Quantity;
