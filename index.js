const express = require("express");
const app = express();
const porta = 8080;
const connection = require("./database/database");

// connection.authenticate()
//         .then(()=>{
//             console.log("Conexão com o banco de dados realizada com sucesso.")
//         }).catch((error) => {
//             res.render("index")
//         })

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




app.get("/", (req, res) => {
    // res.send("Bem vindo ao meu site");
    res.render("index");
})

app.listen(porta, () => {
    console.log("O servidor está rodando na porta: " + porta);
})