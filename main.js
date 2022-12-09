

function addRow() {
  var table = document.getElementById("+");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "NEW CELL1";
  cell2.innerHTML = "NEW CELL2";
}

function deleteRow() {
  document.getElementById("table_ecole-pro").deleteRow(-1);
}

document.getElementById("add_ecole-pro").addEventListener("click",function() {
  addRow()
});

document.getElementById("del_ecole-pro").addEventListener("click",function() {
  deleteRow()
});

  
