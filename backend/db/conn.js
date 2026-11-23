const {Sequelize} = require('sequelize')

const db = new Sequelize('db_santiago2','root','senai',{
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
})

module.exports = db
