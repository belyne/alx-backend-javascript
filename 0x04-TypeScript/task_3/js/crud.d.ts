// Import RowID and RowElement from interface.ts
/// <reference path="./interface.ts" />

// Declare ambient types for crud functions
declare module 'crud' {
  export function insertRow(row: RowElement): RowID;
  export function deleteRow(rowId: RowID): void;
  export function updateRow(rowId: RowID, row: RowElement): RowID;
}
