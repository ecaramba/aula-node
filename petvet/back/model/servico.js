// CRUD
// Create -> Cadastrar
// Read -> Ler
// Update -> alterar
// Delete -> Deletar

const mongodb = require("mongodb");
const conf = require("./conf");

const db =  conf.collection("servicos");

const ObjectId = mongodb.ObjectId;

/**
 * Cadastra um novo serviço
 * @param {Object} dados 
 */
async function cadastrar(dados)
{

    dados.data_cadastro = new Date();
    dados.preco = parseFloat(dados.preco);

    let retorno = await db.insertOne(dados);
    return retorno;
}

/**
 * Deleta o serviço informado
 * @param {string} id 
 */
async function deletar(id)
{
    let novo = new ObjectId(id);
    return await db.deleteOne({_id: novo});
    
}

/**
 * Altera o registro com o valor novo
 * @param {string} id 
 * @param {object} novo 
 */
async function alterar(id, novo)
{
    novo.data_alterado = new Date();
    novo.preco = parseFloat(novo.preco);
    
    let novoId = new ObjectId(id);
    let atualizacao = {
        $set: novo
    };

    let retorno = await db.updateOne({_id: novoId}, atualizacao);

    return retorno;

}

/**
 * Lista todos os serviços
 * @param {string} id | null 
 * @returns Array | Object
 */
async function listar(id)
{
    if (!id) {
        let retorno = await db.find({});
        return await retorno.toArray();
    } else {
        let retorno = await db.findOne({_id: new ObjectId(id)});
        return retorno;
    }
}

module.exports = {
    listar: listar,
    alterar: alterar,
    deletar: deletar,
    cadastrar: cadastrar
}