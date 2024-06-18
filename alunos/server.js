const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb");

const url_con = "mongodb+srv://aulanode:node123@turma-junho.68fqkvo.mongodb.net/";
const database = "edir";

const bd = new mongodb.MongoClient(url_con);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(cors());

// router -> rota
app.get("/alunos", async function(req, res){

    const pasta = bd.db(database).collection("alunos");
    let retorno = await pasta.find({}).sort({nome: 1, cidade: 1});

    let lista = await retorno.toArray();

    res.json(lista);
});

app.get("/", function(req, res){
    res.send("Pagina inicial");
});

app.post("/cadastrar", function(req, res){
    
    res.json(req.body);
});

app.listen(3003, function(){
    console.log("servidor iniciado");
});
