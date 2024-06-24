const express = require("express");
const app = express();
const cors = require("cors");

const servico = require("./controller/servico");

const env = process.env.AMBIENTE;

// let porta = "";
// if (env == "DEV") {
//     porta = 3003;
// } else {
//     porta = 80;
// }
// if ternario
let porta = (env == "DEV")? 3003 : 80;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/servico", servico);

app.listen(porta, function(){
    console.log("servidor iniciado");
    // console.log(process.env);
});

// MVC
// Model -> dados
// View -> visual -> frontend
// Controller -> controlador -> regras de negocio

