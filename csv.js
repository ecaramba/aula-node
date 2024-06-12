const csv = require("csv-parse");
const fs = require("fs");

fs.readFile("alunos.csv", "utf8", function(erro, dados){
    // console.log(dados);
    csv.parse(dados, function(erro, valores){
        console.log(valores[2][1]);   
    })
})





