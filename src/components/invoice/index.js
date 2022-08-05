import React from 'react';

function Invoice({ selectedCabinName, selectedSize, cabinPrice }) {
  return (
    <div className="invoice">
      <table>
        <thead>
          <tr>
            <th className="invoiceCabinName">Cabin Name</th>
            <th className="invoiceSize">Size</th>
            <th className="invoicePrice">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {selectedCabinName === '' ? 'select cabin' : selectedCabinName}
            </td>
            <td>
              {selectedSize === '' ? 'Select Size ' : selectedSize.width}m x
              {selectedSize.depth}m
            </td>
            <td>£{cabinPrice}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Invoice;
