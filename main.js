console.log("test");


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


let total = 0;

for (const note of notes) {
  total += note;
}

const moyenne = total / notes.length;
console.log(moyenne);



if ( averageTotal >= 4) {
      document.getElementById("averageTotal").innerHTML = "Réussi";
    } else {
      document.getElementById("averageTotal").innerHTML = "Raté";
      document.body.reussiOuEchec.style.backgroundColor = "red"
    }


for (const iterator of document.getElementsByClassName) {
  
}













// delet last row

// function deleteRow1() {
//   document.getElementById("table-1").deleteRow(-1);
// }
// document.getElementById("delButton-1").addEventListener("click", function () {
//   deleteRow1();
// });
