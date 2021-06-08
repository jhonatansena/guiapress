const Sequelize = require('sequelize');
require('dotenv/config');


const connection = new Sequelize(process.env.DATA_BASE, 
   process.env.USERNAME, process.env.PASSWORD,
 {
    dialect: 'mysql',
    host:'localhost',
    logging: false
 }
);

module.exports = connection;