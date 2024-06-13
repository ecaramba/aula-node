const express = require("express");
const app = express();

app.get("/contato", function(req, res){
    res.send("pagina de contato");
});
app.get("/", function(req, res){
    res.send("Pagina inicial");
})

app.listen(3003, function(){
    console.log("servidor iniciado");
});
