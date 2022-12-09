const bookModel = require('../models/books.model');

const getBooks = async(req, res ) => {
    const books = await bookModel.findAll();

    if(books.rows.length>0)
        res.status(200).json(books.rows);
    else
        res.status(404).json({error: 'Not Found'}); 
}

const insertBook = async(req, res ) => {
    let ISBN = req.params.ISBN;
    bookModel.insertBook(ISBN)
    .then((result) => {
        res.status(200).json({message: "Book created succesfully"});
    })
    .catch ((error)=> {
        res.status(500).json({message: "Something went wrong"});
    });
}


module.exports = {
    getBooks,
    insertBook
}