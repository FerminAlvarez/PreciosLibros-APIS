const app = require ('../app');
const config = require ('../config/development');
const swaggerDocs = require('../utils/swagger');
const {sequelize} = require ('../database/database');

//Models
const bookModel = require ('../models/books.model');
//const bookshopsModel = require ('../models/bookshops.model');
//const bookshopserviceModel = require ('../models/bookshopservice.model');
//const bookshopbookModel = require ('../models/bookshopbook.model');


async function main (){
    try {        
        await sequelize.sync();
        //await sequelize.sync({ force: true })
        console.log('Connection with database has been established successfully.');
        app.listen(config.PORT);

        swaggerDocs(app, config.PORT);

        console.log("Served started on PORT:"+config.PORT);
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

main();