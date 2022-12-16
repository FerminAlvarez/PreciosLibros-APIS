const { DataTypes } = require('sequelize');
const bookshop = require('./bookshopbook.model');
const {sequelize} = require('../database/database');

const bookshopservice = sequelize.define('bookshopservice', {
    ID_bookshop: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        allowNull: false
    },
    url: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    createdAt: {
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    updatedAt: {
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
  } 
})

bookshopservice.hasOne(bookshop, {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT',
    foreignKey: {
        name: 'ID_bookshop'
    }
})

module.exports = bookshopservice;