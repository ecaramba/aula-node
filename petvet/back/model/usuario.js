
const sha1 = require("sha1");

const conf = require("./conf");
const collection = conf.collection("usuarios");

/**
 * loga o usuario
 * @param {*} email 
 * @param {*} senha 
 * @returns {Object} | false
 */
async function logar(email, senha)
{
    let filtro = {
        _id: email,
        senha: sha1(senha)
    };
    let retorno = await collection.findOne(filtro);
    return retorno;
}

module.exports = logar;