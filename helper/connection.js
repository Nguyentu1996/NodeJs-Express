const { Sequelize } = require('sequelize');
var connection = {}
module.exports = connection;


initialize();
async function initialize() {

    // connect to db
    // const sequelize = new Sequelize('sqlite::memory:');
    // Option 2: Passing parameters separately (sqlite)
    const sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: 'storage/db/database.sqlite'
    });

    // init models and add them to the exported db object
    connection.Item = require('../Item/model')(sequelize);
    connection.User = require('../User/model')(sequelize);


    await sequelize.sync();

}

