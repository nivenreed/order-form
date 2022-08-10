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
  selectedWallInsulation,
  wallInsulationPrice,
}) {
  const total = parseInt(cabinPrice) + parseInt(roofInsulationPrice);
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
            <th colSpan={4}>Optional Extras</th>
          </tr>
          {selectedRoofInsulation && (
            <tr>
              <td colSpan={3}>
                {selectedRoofInsulation ? 'Roof Insulation' : ''}
              </td>
              <td>£{selectedRoofInsulation ? roofInsulationPrice : ''}</td>
            </tr>
          )}
          {selectedFloorInsulation && (
            <tr>
              <td colSpan={3}>
                {selectedFloorInsulation ? 'Floor Insulation' : ''}
              </td>
              <td>£{selectedFloorInsulation ? floorInsulationPrice : ''}</td>
            </tr>
          )}
          {selectedWallInsulation && (
            <tr>
              <td colSpan={3}>
                {selectedWallInsulation ? 'Wall Insulation' : ''}
              </td>
              <td>£{selectedWallInsulation ? wallInsulationPrice : ''}</td>
            </tr>
          )}
          <tr>
            <td colSpan={3}>Total</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Invoice;
