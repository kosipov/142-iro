import {JSON} from "./resource.js";
import {azsTable} from "./elements.js";

const body = document.querySelector(".body");
const search = body.querySelector(".body__table__search");
const table = body.querySelector(".body__table");
const createTableCell = (value) => `<td>${value}</td>`;

const initTable = (values) => {
  initEmptyTable();
  values.forEach((value) => {
    let insertElement = createTableCell(value.address + value.name)
    let arr = [];
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
};

const filterTable = (searchValue) => {
  const table = body.querySelector(".body__table");
  initEmptyTable();
  const foundValues = JSON.filter((value) => value.address.includes(searchValue) || value.name.includes(searchValue));
  initTable(foundValues);
}

const initEmptyTable = () => {
  table.replaceChildren('');
  table.insertAdjacentHTML('beforeend', azsTable())
}


initTable(JSON);
search.addEventListener('input', (event) => filterTable(event.target.value));

