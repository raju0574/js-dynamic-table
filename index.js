window.onload = onReady;
function onReady() {
  var dynamicTable = document.getElementById('DynamicTable');
  var rows = dynamicTable.querySelector('#Rows');
  var columns = dynamicTable.querySelector('#Columns');
  var rowsCount, columnsCount;

  dynamicTable.addEventListener('submit', createTable);

  function createTable(event) {
    event.preventDefault();
    rowsCount = parseInt(rows.value);
    columnsCount = parseInt(columns.value);
    
    if(isNaN(rowsCount) || isNaN(columnsCount)) {
      alert("Please enter a number between 1-9");
      return;
    }
    var tableElement = getTableElement();
    document.body.appendChild(tableElement);
  }

  function getTableElement() {
    var table = document.createElement('table');

    var header = table.createTHead();
 
    var row = header.insertRow(-1);
 
    for (var i = 0; i < columnsCount; i++) {
     
        var headerCell = document.createElement('th');
     
        headerCell.innerText = "Header"+ i;
     
        row.appendChild(headerCell);
     
    }
      var tBody = document.createElement('tbody');
   
      table.appendChild(tBody);

      for (var i = 0; i < rowsCount; i++) { // each row
     
    row = tBody.insertRow(-1);
   
    for (var j = 0; j < columnsCount; j++) { // each column
     
      var cell = row.insertCell(-1);
       
      cell.innerText = "cell" + i + j;
   
    }
 
}
return table;
  }
}