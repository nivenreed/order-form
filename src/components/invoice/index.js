import React from 'react';

function Invoice({
  selectedCabinName,
  selectedSize,
  cabinPrice,
  selectedWallOpt,
  selectedRoofInsulation,
  roofInsulationPrice,
  selectedFloorInsulation,
  floorInsulationPrice,
}) {
  return (
    <div className="invoice">
      <table>
        <thead>
          <tr>
            <th className="invoiceCabinName">Cabin Name</th>
            <th className="invoiceWallThickness">Wall Thickness</th>
            <th className="invoiceSize">Size</th>
            <th className="invoicePrice">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {selectedCabinName === '' ? 'select cabin' : selectedCabinName}
            </td>
            <td>{selectedWallOpt}mm</td>
            <td>
              {selectedSize === '' ? 'Select Size ' : selectedSize.width}m x
              {selectedSize.depth}m
            </td>
            <td>£{cabinPrice}</td>
          </tr>
          <tr>
            <td colSpan={3}>
              {selectedRoofInsulation === true ? 'Roof Insulation' : ''}
            </td>
            <td>
              {selectedRoofInsulation === true ? roofInsulationPrice : ''}
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              {selectedFloorInsulation === true ? 'Floor Insulation' : ''}
            </td>
            <td>
              {selectedFloorInsulation === true ? floorInsulationPrice : ''}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Invoice;
