const express = require("express");
const route = express.Router();

const cadServico = require("../model/servico").cadastrar;
const listar = require("../model/servico").listar;
const deletar = require("../model/servico").deletar;
const atualizar = require("../model/servico").alterar;

route.post("/novo", async function(req, res){

    try {
        let exe = req.body;
        let retorno = await cadServico(exe);
        res.json(retorno);
    } catch (erro) {
        res.status(500);
        res.send("Ocorreu um problema ao cadastar o serviço")
    }

});

route.get("/lista", async function(req, res){
    let retorno = await listar();
    res.json(retorno);
});

route.post("/deletar/:id", async function(req, res){
    let id = req.params["id"];
    let retorno = await deletar(id);
    res.json(retorno);
});

route.post("/alterar/:id", async function(req, res) {
    let id = req.params["id"];
    let novo = req.body;
    try {
        let retorno = await atualizar(id, novo);
        res.json(retorno);
    } catch (erro) {
       
        res.status(500).send(erro.message);
    }

});

module.exports = route;