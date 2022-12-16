const bookshopBookModel = require('../models/bookshopbook.model');
const bookModel = require('../models/books.model');
const broker = require('../utils/broker');

const getBookshopBook = async(req, res ) => {
    let ID = req.params.ID;
    let ISBN = req.params.ISBN;
    
    try {
        const serviceData = await broker.getBookshopBookServiceData(ID, ISBN);

        await bookshopBookModel.create({
            ID_bookshop : ID, 
            ISBN : ISBN, 
            title: serviceData.titulo, 
            price: serviceData.precio, 
            url: serviceData.link, 
            image: serviceData.link_imagen}
        );

        let bookshopBook = await bookshopBookModel.findAll({
            where: {
                ISBN: ISBN,
                ID_bookshop: ID
            },
            order: [ 
                ['createdAt', 'DESC'],
            ],
        })
    
        if(bookshopBook !== undefined)
            res.status(200).json(bookshopBook);
        else
            res.status(404).json({error: 'Not Found'}); 

    } catch (error) {
        console.log("Error saving bookshop-book" + error);
    }

   
}

const getBookshopsBook = async(req, res ) => {
    let ISBN = req.params.ISBN;
    let promises = [];
    
    let serviceData = await broker.getBookshopsBookServiceData(ISBN);

    for (let i = 0; i < serviceData.length; i++){
        try {
            let item = serviceData[i];
            console.log(item);
            promises.push(await bookshopBookModel.create({
                ID_bookshop : item.id_bookshop,
                ISBN: item. ISBN,
                title: item.titulo,
                price: item.precio,
                url: item.link,
                image: item.link_imagen
            }));
        } catch (error) {
            console.log("Error saving bookshop-book" + error);
        }
    }

    Promise.all(promises);

    let bookshopbooks = await bookshopBookModel.findAll({
        where: {
            ISBN: ISBN
        },
        order: [ 
            ['createdAt', 'DESC'],
        ],
        limit: 5
    })

    if(bookshopbooks.length>0)
        res.status(200).json(bookshopbooks);
    else
        res.status(404).json({error: 'Not Found'}); 
   
}


module.exports = {
    getBookshopBook,
    getBookshopsBook
}