const bookModel = require('../models/books.model');

const getBooks = async(req, res ) => {
    const books = await bookModel.findAll();

    if(books.length>0)
        res.status(200).json(books);
    else
        res.status(404).json({error: 'Not Found'}); 
}

const insertBook = async(req, res ) => {
    let ISBN = req.body.ISBN;

    try{
        await bookModel.create({
            ISBN
        })
        res.status(200).json({message: "Book created succesfully"});
    } catch (error){
        return res.status(400).json({message: "Something went wrong "});
    }    
}


module.exports = {
    getBooks,
    insertBook
}