const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 3000
const hostname = 'localhost'

const conn = require('./db/conn')

const funcionarioController = require('./controller/funcionario.controller')
const materialController = require('./controller/material.controller')
const movimentoController = require('./controller/movimento.controller')
const obraController = require('./controller/obra.controller')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.post('/funcionario',funcionarioController.cadastrar)
app.post('/material',materialController.cadastrar)
app.post('/movimento',movimentoController.cadastrar)
app.post('/obra',obraController.cadastrar)

app.get('/funcionario/:id',funcionarioController.consultar)
app.get('/material/:id',materialController.consultar)
app.get('/movimento/:id',movimentoController.consultar)
app.get('/obra/:id',obraController.consultar)

app.get('/funcionarios',funcionarioController.listar)
app.get('/materiais',materialController.listar)
app.get('/movimentos',movimentoController.listar)
app.get('/obras',obraController.listar)


app.delete('/funcionario/:id',funcionarioController.apagar)
app.delete('/material/:id',materialController.apagar)
app.delete('/movimento/:id',movimentoController.apagar)
app.delete('/obra/:id',obraController.apagar)

conn.sync()
    .then(()=>{
        app.listen(PORT, hostname, ()=>{
            console.log(`Servidor rodando em http://${hostname}:${PORT}`)
        })
    })
    .catch((err)=>{
        console.error('Erro ao rodar o servidor',err)
    })