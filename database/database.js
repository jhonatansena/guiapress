const Sequelize = require('sequelize');
require('dotenv/config');


const connection = new Sequelize(process.env.DATA_BASE, 
   process.env.USERNAME, process.env.PASSWORD,
 {
    dialect: process.env.DIALECT,
    host: process.env.HOST,
    logging: false,
    timezone: "-03:00"
 }
);

module.exports = connection;