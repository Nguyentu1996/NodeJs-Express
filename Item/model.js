const { Sequelize, Model, DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    return sequelize.define('Item', {
        item: DataTypes.STRING,
        description: DataTypes.TEXT,
        createDate: DataTypes.DATE,
        isDelete: DataTypes.BOOLEAN,
        image: DataTypes.STRING
    }, {
        // Other model options go here

    });
}


