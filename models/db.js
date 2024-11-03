const Sequelize = require('sequelize')

//conexão com banco de dados
const sequelize = new Sequelize('postapp', 'root', '280104', {
    host:"localhost", 
    dialect: 'mysql'
})


module.exports = {

    Sequelize: Sequelize,
    sequelize: sequelize
}