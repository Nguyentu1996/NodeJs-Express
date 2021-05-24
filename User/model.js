const { Sequelize, Model, DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {

    return sequelize.define('User', {
        userName: DataTypes.STRING,
        description: DataTypes.TEXT,
        dob: DataTypes.DATE,
        isDelete: DataTypes.BOOLEAN,
        image: DataTypes.STRING,
        role: DataTypes.NUMBER,
        password: DataTypes.STRING
    }, {
        // Other model options go here
        indexes: [{ unique: true, fields: ['userName'] }],
        // don't forget to enable timestamps!
        timestamps: true,
        // I want updatedAt to actually be called updateTimestamp
        updatedAt: 'updateTimestamp',
        deletedAt: 'destroyTime'
    });
}


