const express = require("express");
const route = express.Router();

const cadServico = require("../model/servico").cadastrar;

route.post("/novo", async function(req, res){

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

});

module.exports = route;