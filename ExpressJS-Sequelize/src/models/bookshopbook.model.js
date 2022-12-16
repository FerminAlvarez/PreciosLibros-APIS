const { DataTypes } = require('sequelize');
const {sequelize} = require('../database/database');
const book = require('./books.model');
const bookshop = require('./bookshops.model');

const bookshopbook = sequelize.define('bookshopbooks', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    ISBN: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    ID_bookshop: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    url: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    image: {
        type: DataTypes.TEXT
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

bookshopbook.hasOne(book, {
    onDelete: 'UPDATE',
    onUpdate: 'UPDATE',
    foreignKey: {
        name: 'ISBN'
    }
})

bookshopbook.hasOne(bookshop, {
    onDelete: 'UPDATE',
    onUpdate: 'UPDATE',
    foreignKey: {
        name: 'ID_bookshop'
    }
})

module.exports = bookshopbook;