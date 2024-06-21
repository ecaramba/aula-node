const express = require("express");
const app = express();
const cors = require("cors");

const servico = require("./controller/servico");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/servico", servico);

app.listen(3003, function(){
    console.log("servidor iniciado");
});

// MVC
// Model -> dados
// View -> visual -> frontend
// Controller -> controlador -> regras de negocio

