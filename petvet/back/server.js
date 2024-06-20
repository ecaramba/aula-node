const express = require("express");
const app = express();

const servico = require("./controller/servico");

app.use("/servico", servico);


app.listen(3003, function(){
    console.log("servidor iniciado");
});

// MVC
// Model -> dados
// View -> visual -> frontend
// Controller -> controlador -> regras de negocio

