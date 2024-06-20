// CRUD
// Create -> Cadastrar
// Read -> Ler
// Update -> alterar
// Delete -> Deletar

const mongodb = require("mongodb");
const url_con = "mongodb+srv://aulanode:node123@turma-junho.68fqkvo.mongodb.net/";
const database = "edir";

const mongo = new mongodb.MongoClient(url_con);
const db =  mongo.db(database).collection("servicos");

/**
 * Cadastra um novo serviço
 * @param {object} dados 
 */
async function cadastrar(dados)
{

    dados.data_cadastro = new Date();

    let retorno = await db.insertOne(dados);
    return retorno;
}

/**
 * Deleta o serviço informado
 * @param {string} id 
 */
function deletar(id)
{

}

/**
 * Altera o registro com o valor novo
 * @param {string} id 
 * @param {object} novo 
 */
function alterar(id, novo)
{

}

/**
 * Lista todos os serviços
 */
async function listar()
{
    let retorno = await db.find({});
    return await retorno.toArray();
}

module.exports = {
    listar: listar,
    alterar: alterar,
    deletar: deletar,
    cadastrar: cadastrar
}