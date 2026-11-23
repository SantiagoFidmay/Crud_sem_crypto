const Funcionario = require('../models/Funcionario')

const cadastrar = async(req,res)=>{
    const valores = req.body

    if(!valores.nome || !valores.email || !valores.senha){
        return res.status(400).json({message: "Todos os campos são obrigatoriso!"})
    }

    try {
        await Funcionario.create(valores)
        return res.status(201).json({message: "Dados cadastrados com sucesso!"})
    } catch (err) {
        console.error('erro ao cadastrar',err)
        return res.status(500).json({message: "Erro ao cadastrar"})
    }

}

const consultar = async(req,res)=>{
    const id = req.params.id

    try {
        const funcionario = await Funcionario.findByPk(id)
        if(!funcionario){
            return res.status(404).json({message: " não encontrado!"})
        }
        return res.status(200).json(funcionario)
    } catch (err) {
        console.error('erro ao consultar',err)
        return res.status(500).json({message: "Erro ao consultar"})
    }
}

const listar = async(req,res)=>{
    try {
        const funcionarios = await Funcionario.findAll()
        if(!funcionarios){
            return res.status(404).json({message: " não encontrado!"})
        }
        return res.status(200).json(funcionarios)
    } catch (err) {
        console.error('erro ao listar',err)
        return res.status(500).json({message: "Erro ao listar"})    
    }
}

const apagar = async(req,res)=>{
    const id = req.params.id

    try {
        const funcionario = await Funcionario.findByPk(id)
        if(!funcionario){
            return res.status(404).json({message: " não encontrado!"})
        }
        await Funcionario.destroy({where: {codFuncionario: id}})
        return res.status(200).json({message: "Dados excluidos"})

    } catch (err) {
        console.error('erro ao apagar',err)
        return res.status(500).json({message: "Erro ao apagar"})   
    }

}

module.exports = {cadastrar, consultar, listar, apagar}