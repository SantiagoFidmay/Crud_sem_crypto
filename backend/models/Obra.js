const {DataTypes} = require('sequelize')
const db = require('../db/conn')


const Obra = db.define('obra',{
    codObra: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    codIdentificacao: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cnpj: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
   
},{
    timestamps: false,
    tableName: 'obras'
})

module.exports = Obra