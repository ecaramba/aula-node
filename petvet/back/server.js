const express = require("express");
const app = express();

const cadServico = require("./model/servico").cadastrar;

app.post("/servico", async function(req, res){

    try {
        let exe = {
            
            nome: "Banho",
            preco: 40.00,
            profissional: "João",
            tipo: "Pet"
        };
        let retorno = await cadServico(exe);
        res.json(retorno);
    } catch (erro) {
        res.status(500);
        res.send("Ocorreu um problema ao cadastar o serviço")
    }

})

app.listen(3003, function(){
    console.log("servidor iniciado");
});

// MVC
// Model -> dados
// View -> visual -> frontend
// Controller -> controlador -> regras de negocio

