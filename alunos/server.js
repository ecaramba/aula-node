const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

// router -> rota
app.get("/alunos", function(req, res){

    let lista = [
        {
            nome: "Pedro",
            email: "pedro@aluno.com",
            cidade: "Curitiba",
            telefone: "(11)1234-4321"
        },
        {
            nome: "Mauro",
            email: "mauro@gmail.com",
            cidade: "Pinhais",
            telefone: "(31)2222-4321"
        },
        {
            nome: "Luiz",
            email: "luiz@abc.com",
            cidade: "Curitiba",
            telefone: "(21)5555-4321"
        },
        {
            nome: "Maria",
            email: "maria@gmail.com",
            cidade: "Araucaria",
            telefone: "(11)5466-4321"
        }
    ];

    res.json(lista);
});

app.get("/", function(req, res){
    res.send("Pagina inicial");
})

app.listen(3003, function(){
    console.log("servidor iniciado");
});
