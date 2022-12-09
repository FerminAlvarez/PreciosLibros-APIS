const bookshopModel = require('../models/bookshops.model');

const getBookshops = async(req, res ) => {
    const bookshops = await bookshopModel.findAll();

    if(bookshops.rows.length>0)
        res.status(200).json(bookshops.rows);
    else
        res.status(404).json({error: 'Not Found'}); 
}

const insertBookshop = async(req, res ) => {
    let ID = req.body.ID;
    let name = req.body.name;

    bookshopModel.create(ID, name)
    .then((result) => {
        res.status(200).json({message: "Bookshop created succesfully"});
    })
    .catch ((error)=> {
        console.log(error)
        res.status(500).json({message: "Something went wrong"});
    });
}


module.exports = {
    getBookshops,
    insertBookshop
}