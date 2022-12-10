const bookshopBookModel = require('../models/bookshopbook.model');
const broker = require('../utils/broker');

const getBookshopBook = async(req, res ) => {
    let ID = req.params.ID;
    let ISBN = req.params.ISBN;
    
    try {
        const serviceData = await broker.getBookshopBookServiceData(ID, ISBN);
        await bookshopBookModel.create(ID, ISBN, serviceData.titulo, serviceData.precio, serviceData.link, serviceData.link_imagen);
    } catch (error) {
        console.log("Error saving bookshop-book" + error);
    }

    const bookshopbook = await bookshopBookModel.findOne(ID, ISBN);

    if(bookshopbook.rows.length>0)
        res.status(200).json(bookshopbook.rows);
    else
        res.status(404).json({error: 'Not Found'}); 
}

const getBookshopsBook = async(req, res ) => {
    let ISBN = req.params.ISBN;
    let promises = [];
    let bookshopbooks = [];
    
    let serviceData = await broker.getBookshopsBookServiceData(ISBN);
    for await (item of serviceData){
        try {
            promises.push(await bookshopBookModel.create(item.id_bookshop, item.ISBN, item.titulo, item.precio, item.link, item.link_imagen));
            bookshopbooks.push(bookshopBookModel.createBookshopBookObject(item.id_bookshop, item.ISBN, item.titulo, item.precio, item.link, item.link_imagen));
        } catch (error) {
            console.log("Error saving bookshop-book" + error);
        }
    }

    Promise.all(promises);

    if(bookshopbooks.length>0)
        res.status(200).json(bookshopbooks);
    else
        res.status(404).json({error: 'Not Found'}); 
   
}


module.exports = {
    getBookshopBook,
    getBookshopsBook
}