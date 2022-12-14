const app = require ('../app');
const config = require ('../config/development');
const swaggerDocs = require('../utils/swagger');

async function main (){
    try {        
        app.listen(config.PORT);

        swaggerDocs(app, config.PORT);

        console.log("Served started on PORT:"+config.PORT);
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

main();