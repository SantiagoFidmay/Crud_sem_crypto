const Movimento = require('../models/Movimento')

const cadastrar = async(req,res)=>{
    const valores = req.body

    if(!valores.idMaterial || !valores.tipo || !valores.quantidadeMov || !valores.data){
        return res.status(400).json({message: "Todos os campos são obrigatoriso!"})
    }

    try {
        await Movimento.create(valores)
        return res.status(201).json({message: "Dados cadastrados com sucesso!"})
    } catch (err) {
        console.error('erro ao cadastrar',err)
        return res.status(500).json({message: "Erro ao cadastrar"})
    }

}

const consultar = async(req,res)=>{
    const id = req.params.id

    try {
        const movimento = await Movimento.findByPk(id)
        if(!movimento){
            return res.status(404).json({message: " não encontrado!"})
        }
        return res.status(200).json(movimento)
    } catch (err) {
        console.error('erro ao consultar',err)
        return res.status(500).json({message: "Erro ao consultar"})
    }
}

const listar = async(req,res)=>{
    try {
        const movimentos = await Movimento.findAll()
        if(!movimentos){
            return res.status(404).json({message: " não encontrado!"})
        }
        return res.status(200).json(movimentos)
    } catch (err) {
        console.error('erro ao listar',err)
        return res.status(500).json({message: "Erro ao listar"})    
    }
}

const apagar = async(req,res)=>{
    const id = req.params.id

    try {
        const movimento = await Movimento.findByPk(id)
        if(!movimento){
            return res.status(404).json({message: " não encontrado!"})
        }
        await Movimento.destroy({where: {codMovimento: id}})
        return res.status(200).json({message: "Dados excluidos"})

    } catch (err) {
        console.error('erro ao apagar',err)
        return res.status(500).json({message: "Erro ao apagar"})   
    }

}

module.exports = {cadastrar, consultar, listar, apagar}