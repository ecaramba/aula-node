// caneta bic
// encapsulamento
class Caneta {
    // atributos -> propriedades -> adjetivo
    cor = "Azul";
    vazia = false;
    

    constructor(cor)
    {
        this.cor = cor;
    }

    // metodo -> função -> verbo
    escrever(){
        var vazia = true;
        console.log("escreveu bastante");
        this.vazia = true;
    }
    
}

class Caneta2 extends Caneta {
    botaoApertado = false;
}

class Caneta3 extends Caneta2 {
    
}

// instância
var bic1 = new Caneta("Azul");
var bic2 = new Caneta("Vermelho");
var bic3 = new Caneta("Preto");
var bic4 = bic3; // referencia a um objeto
var bic5 = new Caneta2("Verde");

// bic2.cor = "Preta";
// bic4.cor = "Vermelha";


if (bic3 == bic4)
{
    console.log("verdade");
} else {
    console.log("falso");
}

// invocando o metodo
bic1.escrever();

bic1.vazia = false;

console.log(bic1, bic2, bic3, bic4)
bic5.escrever();
console.log(bic5);
