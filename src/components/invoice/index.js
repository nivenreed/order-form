import React from 'react';

function Invoice({
  selectedCabinName,
  selectedSize,
  cabinPrice,
  selectedVeranda,
  verandaPrice,
  selectedWallOpt,
  selectedRoofInsulation,
  roofInsulationPrice,
  selectedFloorInsulation,
  floorInsulationPrice,
  selectedWallInsulation,
  wallInsulationPrice,
}) {
  const invoiceCabinPrice = cabinPrice.length < 0 ? 0 : cabinPrice[0];
  const invoiceVerandaPrice = !selectedVeranda ? 0 : verandaPrice[0];
  const invoiceRoofInsulation = !selectedRoofInsulation
    ? 0
    : roofInsulationPrice[0];
  const invoiceFloorInsulation = !selectedFloorInsulation
    ? 0
    : floorInsulationPrice[0];

  const total =
    invoiceCabinPrice +
    invoiceVerandaPrice +
    invoiceRoofInsulation +
    invoiceFloorInsulation;

  const deposit = total / 2;
  const balance = total - deposit;

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
            <td>£{cabinPrice[0] !== undefined && cabinPrice[0].toFixed(2)}</td>
          </tr>
          <tr>
            <th colSpan={4}>Optional Extras</th>
          </tr>
          {selectedVeranda && (
            <tr>
              <td colSpan={3}>{'Veranda and Base'}</td>
              <td>£{verandaPrice[0].toFixed(2)}</td>
            </tr>
          )}
          {selectedRoofInsulation && (
            <tr>
              <td colSpan={3}>{'Roof Insulation'}</td>
              <td>£{roofInsulationPrice[0].toFixed(2)}</td>
            </tr>
          )}
          {selectedFloorInsulation && (
            <tr>
              <td colSpan={3}>{'Floor Insulation'}</td>
              <td>£{floorInsulationPrice[0].toFixed(2)}</td>
            </tr>
          )}
          {selectedWallInsulation && (
            <tr>
              <td colSpan={3}>{'Wall Insulation'}</td>
              <td>£{wallInsulationPrice.toFixed(2)}</td>
            </tr>
          )}
          <tr>
            <td colSpan={3}>Total</td>
            <td>£{total.toFixed(2)}</td>
          </tr>
          <tr>
            <td colSpan={3}>Deposit</td>
            <td>£{deposit.toFixed(2)}</td>
          </tr>
          <tr>
            <td colSpan={3}>Balance</td>
            <td>£{balance.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Invoice;
