const express = require("express");
const app = express();
const porta = 8080;
const connection = require("./database/database");
const categoriesController = require('./categories/CategoriesController');
const articlesController = require('./articles/ArticlesController')

const Article = require("./articles/Article")
const Category = require("./categories/Category")

connection.authenticate()
.then(() => {
    console.log("Autenticação feita com sucesso no banco de dados!")
})
.catch((msgErro) => {
    console.log(msgErro)
})

app.set('view engine', 'ejs')

app.use(express.static('public'));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', categoriesController)  

app.use('/', articlesController)

app.get("/", (req, res) => {
Article.findAll({
    order:[
        ['id', 'DESC']
    ]
}).then(articles => {
    Category.findAll().then(categories => {
        res.render("index", {articles: articles, categories: categories});
    })
    
})

app.get("/:slug", (req, res) => {
    var slug = req.params.slug;

    Article.findOne({
        where: {
            slug: slug
        }
    }).then(article => {
        if(article != undefined){
            Category.findAll().then(categories => {
                res.render("article", {article: article, categories: categories});
            })
        }else{
            res.redirect("/");
        }
    }).catch(error => {
        res.redirect("/");
    })
})

    
})


app.get("/category/:slug", (req, res) => {
    var slug = req.params.slug
    Category.findOne({
        where: {
            slug: slug
         },
         include: [{model: Article}]
    }).then(category =>{
        if(category != undefined){

            Category.findAll().then(categories => {
                res.render("index", {articles: category.articles, categories: categories})
            })

        }else{
            res.redirect("/")
        }
    }).catch(error => {
        res.redirect("/")
    })
})

app.listen(porta, () => {
    console.log("O servidor está rodando na porta: " + porta);
})