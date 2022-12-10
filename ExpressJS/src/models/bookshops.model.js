const database = require('../database/database');
const table = "bookshops";

async function findAll(){
    return database.query(`SELECT id_bookshop, name FROM ${table}`);
}

async function findAllBooks(ID){
    return database.query(`SELECT id_bookshop, name FROM bookshop_book WHERE id_bookshop = ${ID}`);
}

async function create(ID, name){
    return database.query(`INSERT INTO ${table} VALUES (${ID} , '${name}')`);
}

module.exports = {
    findAll,
    findAllBooks,
    create
}