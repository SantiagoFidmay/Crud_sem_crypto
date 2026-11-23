const conn = require('./db/conn')
const {Funcionario, Material, Movimento, Obra} = require('./models/rel')

async function syncDataBase() {
    try {
        await conn.sync({force: true})
        console.log('Sincronizando com o banco')
    } catch (err) {
        console.error('erro ao sincronizar com o banco')

    }finally{
        await conn.close()
        console.log('Sincronizando com o banco')

    }
}


module.exports = syncDataBase()
