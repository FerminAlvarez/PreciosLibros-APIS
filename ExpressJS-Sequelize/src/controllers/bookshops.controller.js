const bookshopModel = require('../models/bookshops.model');
const bookshopbook = require('../models/bookshopbook.model');


const getBookshops = async(req, res ) => {
    const bookshops = await bookshopModel.findAll();

    if(bookshops.length>0)
        res.status(200).json(bookshops);
    else
        res.status(404).json({error: 'Not Found'}); 
}

const getBookshop = async(req, res ) => {
    let ID = req.params.ID;
    
    const bookshops = await bookshopbook.findAll({where: {ID_bookshop : ID}})

    if(bookshops.length>0)
        res.status(200).json(bookshops);
    else
        res.status(404).json({error: 'Not Found'}); 
}

const insertBookshop = async(req, res ) => {
    let ID = req.params.ID;
    let name = req.body.name;

    bookshopModel.create({ID_bookshop: ID, name: name})
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
    getBookshop,
    insertBookshop
}