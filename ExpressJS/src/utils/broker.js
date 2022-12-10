const bookshopserviceModel = require('../models/bookshopservice.model');
const service = require('../services/service');

async function getBookshopBookServiceData(ID, ISBN) {
    return await bookshopserviceModel.findOne(ID)
        .then((data) => (data.rows[0].url))
        .then((url) => {
            return service.getBookPrice(url, ISBN)
        });
}

async function getBookshopsBookServiceData(ISBN) {
    return await bookshopserviceModel.findall()
        .then((data) => data.rows)
        .then((data)=> {
            return getArrayServiceBookshopsBookServiceData(data, ISBN)
        });
}

async function getArrayServiceBookshopsBookServiceData(URLObject, ISBN){
    let promises = [];
    for await (itemURL of URLObject){
        promises.push(await service.getBookPrice(itemURL.url, ISBN).then( 
            (data) => {return {id_bookshop: itemURL.id_bookshop, ISBN: ISBN, ...data }}
        ));
    }
    return await Promise.all(promises);
}


module.exports = {
    getBookshopBookServiceData,
    getBookshopsBookServiceData
}