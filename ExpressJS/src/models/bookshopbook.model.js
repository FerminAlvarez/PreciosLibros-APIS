const database = require('../database/database');
const bookModel = require('./books.model');
const table = "bookshop_book";

function createBookshopBookObject(ID_bookshop, ISBN, title, price, url, image){
    return {
        ID_bookshop: ID_bookshop,
        ISBN: ISBN,
        title: title, 
        price: price,
        url: url,
        image: image
    }
}

async function findOne(ID_bookshop, ISBN){
    return database.query(`SELECT id_bookshop, ISBN, price, title, url, image, createdat as updatedat FROM ${table} WHERE ISBN = '${ISBN}' AND id_bookshop = '${ID_bookshop}' ORDER BY createdat DESC;`);
}

async function create(ID_bookshop, ISBN, title, price, url, image){
    try {
        await bookModel.create(ISBN);
    } catch (error) {
        console.log("Error saving book to use with bookshopbook" + error);
    }
    return database.query(`INSERT INTO ${table}(id_bookshop, ISBN, title, price, url, image) VALUES ('${ID_bookshop}' , '${ISBN}' , '${title}' , '${price}' , '${url}', '${image}')`);
}

module.exports = {
    findOne,
    create,
    createBookshopBookObject
}