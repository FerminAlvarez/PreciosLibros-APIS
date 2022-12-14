const database = require('../database/database');
const table = "bookshops_services";

async function findOne(ID){
    return database.query(`SELECT * FROM ${table} WHERE id_bookshop = '${ID}'`);
}

async function findall(){
    return database.query(`SELECT * FROM ${table}`);
}

module.exports = {
    findOne,
    findall
}