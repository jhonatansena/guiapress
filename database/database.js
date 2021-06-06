const Sequelize = require('sequelize');

const connection = new Sequelize('guiapress', 'root', 'root',
 {
    dialect: 'mysql',
    host:'localhost',
    logging: false
 }
);

module.exports = connection;