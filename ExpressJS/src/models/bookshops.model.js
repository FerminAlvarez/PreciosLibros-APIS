const database = require('../database/database');
const table = "bookshops";

async function findAll(){
    return database.query(`SELECT * FROM ${table}`);
}

async function create(ID, name){
    return database.query(`INSERT INTO ${table} VALUES (${ID} , '${name}')`);
}

module.exports = {
    findAll,
    create
}