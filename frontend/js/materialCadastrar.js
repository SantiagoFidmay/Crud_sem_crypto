const resposta = document.getElementById('resposta')
const btn_cadastrar = document.getElementById('btn_cadastrar')

btn_cadastrar.addEventListener('click', (e)=>{
    e.preventDefault()

    const idObra = document.getElementById('idObra').value
    const descricao = document.getElementById('descricao').value
    const quantidade = document.getElementById('quantidade').value
    const codLote = document.getElementById('codLote').value


    const valores = {
        idObra: idObra,
        descricao: descricao,
        quantidade: quantidade,
        codLote: codLote
    }

    fetch('http://localhost:3000/material',{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(valores)
    })
    .then(res => res.json())
    .then(dados =>{
        resposta.innerHTML = ``
        resposta.innerHTML = `<p>${dados.message}</p>`
    })
    .catch((err)=>{
        console.error('Erro ao cadastrar',err)
        resposta.innerHTML = `<p>Erro ao cadastrar</p>`

    })
})