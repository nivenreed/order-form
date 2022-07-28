import React from 'react';

function Invoice({ selectedCabinName }) {
  return (
    <div className="invoice">
      <table>
        <tr>
          <th className="invoiceCabinName">Cabin Name</th>
          <th className="invoiceSize">Size</th>
          {/* <th className="invoiceQty">Qty</th> */}
          <th className="invoicePrice">Price</th>
        </tr>
        <tr>
          <td>
            {selectedCabinName === '' ? 'select cabin' : selectedCabinName}
          </td>
          <td>Size</td>
          <td>£1000</td>
        </tr>
      </table>
    </div>
  );
}

export default Invoice;
