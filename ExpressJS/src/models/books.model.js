const database = require('../database/database');
const table = "books";

async function findAll(){
    return database.query(`SELECT * FROM ${table}`);
}

async function insertBook(ISBN){
    return database.query(`INSERT INTO ${table} VALUES (${ISBN})`);
}

module.exports = {
    findAll,
    insertBook
}