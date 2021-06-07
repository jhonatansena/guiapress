const express = require("express");
const app = express();
const porta = 8080;
const connection = require("./database/database");
const categoriesController = require('./categories/CategoriesController');
const articlesController = require('./articles/ArticlesController')

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
    // res.send("Bem vindo ao meu site");
    res.render("index");
})

app.listen(porta, () => {
    console.log("O servidor está rodando na porta: " + porta);
})