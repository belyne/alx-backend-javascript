// Triple slash directive to include dependencies from crud.d.ts
/// <reference path="./crud.d.ts" />

// Import RowID and RowElement from interface.ts
import { RowID, RowElement } from './interface';

// Import CRUD functions from crud.js
import * as CRUD from 'crud';

// Create an object called row with the type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Call insertRow function
const newRowID: RowID = CRUD.insertRow(row);
console.log(`Insert row ${JSON.stringify(row)}`);

// Update the row with an age field set to 23
row.age = 23;

// Call updateRow function
CRUD.updateRow(newRowID, row);
console.log(`Update row ${newRowID} ${JSON.stringify(row)}`);

// Call deleteRow function
CRUD.deleteRow(newRowID);
console.log(`Delete row id ${newRowID}`);
