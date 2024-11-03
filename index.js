const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const Post = require('./models/Post');

// Configurações
// Template engine
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}));
app.set('view engine', 'handlebars');

// Body parser (já integrado no Express)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Rotas
app.get('/', function(req, res) {
    Post.findAll().then(function(posts) {
        res.render('home', {
            posts: posts
        });
    }).catch(function(erro) {
        res.send("Erro ao buscar postagens: " + erro);
    });
});

app.get('/cad', function (req, res) {
    res.render('formularios');
});

app.post('/add', function (req, res) {
    // Aqui, salvamos o conteúdo no banco usando o modelo Post
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    })
    .then(() => {
      res.redirect('/')
    })
    .catch((erro) => {
        res.send("Erro ao criar o post: " + erro);
    });
});

// Inicia o servidor
app.listen(8081, function () {
    console.log("Servidor rodando na URL http://localhost:8081");
});
