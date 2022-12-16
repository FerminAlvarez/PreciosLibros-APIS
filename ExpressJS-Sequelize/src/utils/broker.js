const bookshopserviceModel = require('../models/bookshopservice.model');
const service = require('../services/service');

async function getBookshopBookServiceData(ID, ISBN) {
    return await bookshopserviceModel.findOne({where : {ID_bookshop : ID}})
        .then((data) => data.dataValues.url)
        .then((url) => {
            return service.getBookPrice(url, ISBN)
        });
}

async function getBookshopsBookServiceData(ISBN) {
    return await bookshopserviceModel.findAll()
        .then((data)=> {
            return getArrayServiceBookshopsBookServiceData(data, ISBN)
        });
}

async function getArrayServiceBookshopsBookServiceData(URLObject, ISBN){
    let promises = [];
    for (let i = 0; i<URLObject.length; i++){
        try {
            promises.push(await service.getBookPrice(URLObject[i].dataValues.url, ISBN).then( 
                (data) => {return {id_bookshop: URLObject[i].dataValues.ID_bookshop, ISBN: ISBN, ...data }}
            ));
        } catch (error) {
            console.log("Book not founded on service" + error);
        }
    }
    return await Promise.all(promises);
}


module.exports = {
    getBookshopBookServiceData,
    getBookshopsBookServiceData
}