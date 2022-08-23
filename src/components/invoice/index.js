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
  paintQty,
  preservativeQty,
  isPreservativeQtyShown,
  paintPrice,
  preservativePrice,
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

  const invoicePaintPrice = !paintPrice ? 0 : paintPrice;

  const invoicePreservativePrice = !preservativePrice ? 0 : preservativePrice;

  const total =
    invoiceCabinPrice +
    invoiceVerandaPrice +
    invoiceRoofInsulation +
    invoiceFloorInsulation +
    invoiceWallInsulationPrice +
    invoiceBaseWorkPrice +
    invoiceCabinInstallation +
    invoiceAirConPrice +
    invoicePaintPrice +
    invoicePreservativePrice;

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
            <td>
              {cabinPrice[0] !== undefined &&
                Intl.NumberFormat('en-UK', {
                  style: 'currency',
                  currency: 'GBP',
                }).format(cabinPrice[0])}
            </td>
          </tr>
          <tr>
            <th colSpan={4}>Optional Extras</th>
          </tr>
          {selectedVeranda && (
            <tr>
              <td colSpan={3}>{'Veranda and Base'}</td>
              <td>
                {Intl.NumberFormat('en-UK', {
                  style: 'currency',
                  currency: 'GBP',
                }).format(verandaPrice[0])}
              </td>
            </tr>
          )}
          {selectedRoofInsulation && (
            <tr>
              <td colSpan={3}>{'Roof Insulation'}</td>
              <td>
                {Intl.NumberFormat('en-UK', {
                  style: 'currency',
                  currency: 'GBP',
                }).format(roofInsulationPrice[0])}
              </td>
            </tr>
          )}
          {selectedFloorInsulation && (
            <tr>
              <td colSpan={3}>{'Floor Insulation'}</td>
              <td>
                {Intl.NumberFormat('en-UK', {
                  style: 'currency',
                  currency: 'GBP',
                }).format(floorInsulationPrice[0])}
              </td>
            </tr>
          )}
          {selectedWallInsulation && (
            <tr>
              <td colSpan={3}>{'Wall Insulation'}</td>
              <td>
                {Intl.NumberFormat('en-UK', {
                  style: 'currency',
                  currency: 'GBP',
                }).format(wallInsulationPrice[0])}
              </td>
            </tr>
          )}
          {selectedBaseWork && (
            <tr>
              <td colSpan={3}>{'Cabin Structural Base'}</td>
              <td>
                {Intl.NumberFormat('en-UK', {
                  style: 'currency',
                  currency: 'GBP',
                }).format(baseWorkPrice[0])}
              </td>
            </tr>
          )}
          {selectedCabinInstallation && (
            <tr>
              <td colSpan={3}>{'Cabin Installation'}</td>
              <td>
                {Intl.NumberFormat('en-UK', {
                  style: 'currency',
                  currency: 'GBP',
                }).format(cabinInstallationPrice[0])}
              </td>
            </tr>
          )}
          {selectedAirCon && (
            <tr>
              <td colSpan={3}>{'Heating & Air-Con'}</td>
              <td>
                {Intl.NumberFormat('en-UK', {
                  style: 'currency',
                  currency: 'GBP',
                }).format(airConPrice)}
              </td>
            </tr>
          )}
          {selectedPaint && (
            <tr>
              <td>{'Paint'}</td>
              <td>Qty</td>
              <td>{paintQty}</td>
              <td>
                {Intl.NumberFormat('en-UK', {
                  style: 'currency',
                  currency: 'GBP',
                }).format(paintPrice)}
              </td>
            </tr>
          )}
          {isPreservativeQtyShown && (
            <tr>
              <td>{'Preservative'}</td>
              <td>Qty</td>
              <td>{preservativeQty}</td>
              <td>
                {Intl.NumberFormat('en-UK', {
                  style: 'currency',
                  currency: 'GBP',
                }).format(preservativePrice)}
              </td>
            </tr>
          )}
          <tr>
            <td colSpan={3}>Total</td>
            <td>
              {Intl.NumberFormat('en-UK', {
                style: 'currency',
                currency: 'GBP',
              }).format(total)}
            </td>
          </tr>
          <tr>
            <td colSpan={3}>Deposit</td>
            <td>
              {Intl.NumberFormat('en-UK', {
                style: 'currency',
                currency: 'GBP',
              }).format(deposit)}
            </td>
          </tr>
          <tr>
            <td colSpan={3}>Balance</td>
            <td>
              {Intl.NumberFormat('en-UK', {
                style: 'currency',
                currency: 'GBP',
              }).format(balance)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Invoice;
