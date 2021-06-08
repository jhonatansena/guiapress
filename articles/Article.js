const Sequelize = require('sequelize');
const connection = require('../database/database')
const Category = require('../categories/Category')

const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Category.hasMany(Article);//one Category has many articles
Article.belongsTo(Category);//One Article belongs to one Category

// Article.sync({force: true}); // essa linha deve ser retirada para não ficar criado a tabela sempre que o projeto for sincronizado
module.exports = Article;