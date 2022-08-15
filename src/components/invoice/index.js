import React from 'react';
import './index.css';

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
  selectedBaseWork,
  baseWorkPrice,
  selectedAirCon,
  airConPrice,
  selectedCabinInstallation,
  cabinInstallationPrice,
  selectedPaint,
  value,
}) {
  const invoiceCabinPrice = cabinPrice.length > 0 ? cabinPrice[0] : 0;
  const invoiceVerandaPrice = !selectedVeranda ? 0 : verandaPrice[0];
  const invoiceRoofInsulation = !selectedRoofInsulation
    ? 0
    : roofInsulationPrice[0];
  const invoiceFloorInsulation = !selectedFloorInsulation
    ? 0
    : floorInsulationPrice[0];

  const invoiceWallInsulationPrice = !selectedWallInsulation
    ? 0
    : wallInsulationPrice[0];

  const invoiceBaseWorkPrice = !selectedBaseWork ? 0 : baseWorkPrice[0];

  const invoiceCabinInstallation = !selectedCabinInstallation
    ? 0
    : cabinInstallationPrice[0];

  const invoiceAirConPrice = !selectedAirCon ? 0 : airConPrice;

  const paintPrice = value * 95;

  const total =
    invoiceCabinPrice +
    invoiceVerandaPrice +
    invoiceRoofInsulation +
    invoiceFloorInsulation +
    invoiceWallInsulationPrice +
    invoiceBaseWorkPrice +
    invoiceCabinInstallation +
    invoiceAirConPrice;

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
              <td>&pound;{verandaPrice[0].toFixed(2)}</td>
            </tr>
          )}
          {selectedRoofInsulation && (
            <tr>
              <td colSpan={3}>{'Roof Insulation'}</td>
              <td>&pound;{roofInsulationPrice[0].toFixed(2)}</td>
            </tr>
          )}
          {selectedFloorInsulation && (
            <tr>
              <td colSpan={3}>{'Floor Insulation'}</td>
              <td>&pound;{floorInsulationPrice[0].toFixed(2)}</td>
            </tr>
          )}
          {selectedWallInsulation && (
            <tr>
              <td colSpan={3}>{'Wall Insulation'}</td>
              <td>&pound;{wallInsulationPrice[0].toFixed(2)}</td>
            </tr>
          )}
          {selectedBaseWork && (
            <tr>
              <td colSpan={3}>{'Cabin Structural Base'}</td>
              <td>&pound;{baseWorkPrice[0].toFixed(2)}</td>
            </tr>
          )}
          {selectedCabinInstallation && (
            <tr>
              <td colSpan={3}>{'Cabin Installation'}</td>
              <td>&pound;{cabinInstallationPrice[0].toFixed(2)}</td>
            </tr>
          )}
          {selectedAirCon && (
            <tr>
              <td colSpan={3}>{'Heating & Air-Con'}</td>
              <td>&pound;{airConPrice.toFixed(2)}</td>
            </tr>
          )}
          {selectedPaint && (
            <tr>
              <td colSpan={3}>{'Paint'}</td>
              <td>&pound;{paintPrice.toFixed(2)}</td>
            </tr>
          )}
          <tr>
            <td colSpan={3}>Total</td>
            <td>&pound;{total.toFixed(2)}</td>
          </tr>
          <tr>
            <td colSpan={3}>Deposit</td>
            <td>&pound;{deposit.toFixed(2)}</td>
          </tr>
          <tr>
            <td colSpan={3}>Balance</td>
            <td>&pound;{balance.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Invoice;
