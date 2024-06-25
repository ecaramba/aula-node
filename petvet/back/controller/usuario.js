// logar
const express = require("express");
const route = express.Router();
const logar = require("../model/usuario")

route.post("/logar", async function(req, res){
    let dados = req.body;
    
    let retorno = await logar(dados.usuario, dados.senha);
    if (retorno) {
        res.json(retorno); 
    } else {
        let msg = {
            erro: "Usuário ou senha incorretos"
        };
        res.json(msg)
    }
});

module.exports = route;
