// test delet last row in table (only for "ecole-pro")
function deleteRow() {
  document.getElementById("table_ecole-pro").deleteRow(-1);
}

document.getElementById("del_ecole-pro").addEventListener("click", function () {
  deleteRow();
});
