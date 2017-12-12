window.onload = onReady;
function onReady() {
  var dynamicTable = document.getElementById('DynamicTable'),
    dynamicTableForm = dynamicTable.querySelector('#DynamicTableForm'),
    dynamicTableContainer = dynamicTable.querySelector('#TableContainer'),
    rows = dynamicTable.querySelector('#Rows'),
    columns = dynamicTable.querySelector('#Columns'),
    rowsCount, columnsCount;

  dynamicTableForm.addEventListener('submit', createTable);

  function createTable(event) {
    var tableElement;

    event.preventDefault();
    rowsCount = parseInt(rows.value);
    columnsCount = parseInt(columns.value);
    
    if(isNaN(rowsCount) || isNaN(columnsCount)) {
      alert("Please enter a number between 1-9");
      return;
    }
    tableElement = getTableElement();
    dynamicTableContainer.removeChild(dynamicTableContainer.firstChild);
    dynamicTableContainer.appendChild(tableElement);
  }

  function getTableElement() {
    var table = document.createElement('table'),
        tBody = document.createElement('tbody'),
        hCellDF = document.createDocumentFragment(),
        header = table.createTHead(),
        hRow = header.insertRow(-1),
        bRow,
        bCell,
        headerCell;

    for (var i = 0; i < columnsCount; i++) {
        headerCell = document.createElement('th');
     
        headerCell.innerText = "Header "+ (i + 1);
        hCellDF.appendChild(headerCell);
    }

    hRow.appendChild(hCellDF);
    table.appendChild(tBody);

    for (var i = 0; i < rowsCount; i++) { 
          bRow = tBody.insertRow(-1);

      for (var j = 0; j < columnsCount; j++) {
          bCell = bRow.insertCell(-1);
          bCell.innerText = "cell " + (i + 1) + (j + 1);
      }

    }
    return table;
  }
  
}