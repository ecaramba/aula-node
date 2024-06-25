const mongodb = require("mongodb");
const url_con = process.env.URL_MONGO;
const database = process.env.DATABASE;

const mongo = new mongodb.MongoClient(url_con);
const db =  mongo.db(database);

module.exports = db;