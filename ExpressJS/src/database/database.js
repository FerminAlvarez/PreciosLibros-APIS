const { Pool } = require('pg');
const config = require('../config/development');

const pool = new Pool ({
    host: config.database.host,
    user: config.database.username,
    password: config.database.password,
    database: config.database.name,
    port: config.database.port,
})

module.exports = pool;