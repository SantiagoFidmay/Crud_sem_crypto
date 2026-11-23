const {DataTypes} = require('sequelize')
const db = require('../db/conn')


const Movimento = db.define('movimento',{
    codMovimento: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idMaterial: {
        type: DataTypes.INTEGER,
        references: {
            model: 'materiais',
            key: 'codMaterial'
        },
        allowNull: false
    },
    tipo: {
        type: DataTypes.ENUM('ENTRADA','SAIDA'),
        allowNull: false
    },
    quantidadeMov: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    data: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
},{
    timestamps: false,
    tableName: 'movimentos'
})

module.exports = Movimento