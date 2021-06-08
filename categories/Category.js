const Sequelize = require("sequelize");
const connection = require('../database/database')

const Category = connection.define('categories', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// Category.sync({force: true})//essa linha deve ser removida após o projeto mapear o banco de dados com taabelas e relacionamentos
module.exports = Category;