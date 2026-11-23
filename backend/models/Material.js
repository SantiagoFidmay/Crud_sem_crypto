const {DataTypes} = require('sequelize')
const db = require('../db/conn')


const Material = db.define('material',{
    codMaterial: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idObra: {
        type: DataTypes.INTEGER,
        references: {
            model: 'obras',
            key: 'codObra'
        },
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    codLote: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    timestamps: false,
    tableName: 'materiais'
})

module.exports = Material