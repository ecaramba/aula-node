
var nome = "edir"; // string
var idade = 12; // number - int
var peso = 23.5; // number - float
var acordado = true; // boolean

var cidades = ["curitiba", "pinhais", "colombo"]; // array - vetor - lista

if (idade === "12")
{
    console.log("verdade");
} else {
    console.log("falso");
}

console.log(cidades[1]);

cidades.push("araucaria");

console.log(cidades);

// loops

var ini = 0;
var fim = cidades.length - 1;
while( ini <= fim )
{
    console.log(cidades[ini]);
    ini += 1;
}
