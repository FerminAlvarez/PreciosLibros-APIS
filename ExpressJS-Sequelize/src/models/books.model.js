const { DataTypes } = require('sequelize');
const {sequelize} = require('../database/database');

const book = sequelize.define('book', {
    ISBN: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: false
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

module.exports = book;