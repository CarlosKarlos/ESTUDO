const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', '280104', {
    host:"localhost", 
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar:" + erro)
})

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }

})


const Usuario = sequelize.define('usuarios', {
    nome:{
    type: Sequelize.STRING
    },

    sobrenome: {
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})


Usuario.create({
    nome: "Carlos",
    sobrenome: "Lima",
    idade: 20,
    email: "Carlos@mail.com"
})