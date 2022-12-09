const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const options = {
    swaggerDefinition : {
        openapi: "3.0.0",
        info: {
            title: 'Precios Libros API - Express JS',
            version: '1.0.0'
        }
    },
    apis : ['./src/components/attributes/routes.js']
}

const swaggerSpec = swaggerJSDoc(options);

function swaggerDocs(app){
    app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
}
module.exports = swaggerDocs;