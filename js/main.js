import {JSON} from "./resource.js";

const body = document.querySelector(".body");
const table = document.querySelector(".body__table");
const createTableCell = (value) => `<td>${value}</td>`;

initTable();

function initTable() {
  JSON.forEach((value) => {
    let insertElement = createTableCell(value.address + value.name)
    let fuelElements = ``;
    value.fuels.forEach((fuelValue) => {
      fuelElements += createTableCell(fuelValue.price)
    });
    table.insertAdjacentHTML('beforeend',
      `<tr>
      ${insertElement}
      ${fuelElements}
    </tr>`
      )
  });
}
