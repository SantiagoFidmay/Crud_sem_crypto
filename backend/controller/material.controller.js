const Material = require('../models/Material')

const cadastrar = async(req,res)=>{
    const valores = req.body

    if(!valores.idObra || !valores.descricao || !valores.quantidade || !valores.codLote){
        return res.status(400).json({message: "Todos os campos são obrigatoriso!"})
    }

    try {
        await Material.create(valores)
        return res.status(201).json({message: "Dados cadastrados com sucesso!"})
    } catch (err) {
        console.error('erro ao cadastrar',err)
        return res.status(500).json({message: "Erro ao cadastrar"})
    }

}

const consultar = async(req,res)=>{
    const id = req.params.id

    try {
        const material = await Material.findByPk(id)
        if(!material){
            return res.status(404).json({message: " não encontrado!"})
        }
        return res.status(200).json(material)
    } catch (err) {
        console.error('erro ao consultar',err)
        return res.status(500).json({message: "Erro ao consultar"})
    }
}

const listar = async(req,res)=>{
    try {
        const materiais = await Material.findAll()
        if(!materiais){
            return res.status(404).json({message: " não encontrado!"})
        }
        return res.status(200).json(materiais)
    } catch (err) {
        console.error('erro ao listar',err)
        return res.status(500).json({message: "Erro ao listar"})    
    }
}

const apagar = async(req,res)=>{
    const id = req.params.id

    try {
        const material = await Material.findByPk(id)
        if(!material){
            return res.status(404).json({message: " não encontrado!"})
        }
        await Material.destroy({where: {codMaterial: id}})
        return res.status(200).json({message: "Dados excluidos"})

    } catch (err) {
        console.error('erro ao apagar',err)
        return res.status(500).json({message: "Erro ao apagar"})   
    }

}

module.exports = {cadastrar, consultar, listar, apagar}