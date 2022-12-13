// creation des objets

let notes = {

  ecole_pro: {
      semestre1: [],
      mod1: [],
      moy: [],
  },

  cours_inter: {
      semestre1: [],
      mod1: [],
      moy: [],
  },

  cdb: {
      mathSemestre1: [],
      mathSemestre2: [],
      mathSemestre3: [],
      anglaisSemestre1: [],
      anglaisSemestre2: [],
      anglaisSemestre3: [],
      anglaisSemestre4: [],
      anglaisSemestre5: [],
      moy: [],
  },

  culture_G: {
      cultGSemestre1: [],
      cultGSemestre2: [],
      cultGSemestre3: [],
      cultGSemestre4: [],
      cultGSemestre5: [],
      cultGSemestre6: [],
      cultGSemestre7: [],
      cultGSemestre8: [],
      moy: [],
  },

  TPI: {
      semestre1: [],
      mod1: [],
      moy: [],
  },
};


let table = document.getElementsByClassName("table")
console.log(table)


// function for add new row in table
function addButton(index) {
  document.getElementById("addButton-" + index).addEventListener("click", function (){

  });
}

// test delet last row in table (only for "ecole-pro")
function deleteRow() {
  document.getElementById("table_ecole-pro").deleteRow(-1);
}

document.getElementById("delButton-1").addEventListener("click", function () {
  deleteRow();
});
