const { Pool } = require('pg');
const config = require('../config/development');
const { Sequelize } = require('sequelize');

const pool = new Pool ({
    host: config.database.host,
    user: config.database.username,
    password: config.database.password,
    database: config.database.name,
    port: config.database.port,
})

const sequelize = new Sequelize(config.database.name, config.database.username, config.database.password, {
    dialect: 'postgres', 
    host: config.database.host,
    port: config.database.port
});

module.exports = {
    pool,
    sequelize
};