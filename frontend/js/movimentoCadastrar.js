const resposta = document.getElementById('resposta')
const btn_cadastrar = document.getElementById('btn_cadastrar')

btn_cadastrar.addEventListener('click', (e)=>{
    e.preventDefault()

    const idMaterial = document.getElementById('idMaterial').value
    const tipo = document.getElementById('tipo').value
    const quantidadeMov = document.getElementById('quantidadeMov').value
    const data = document.getElementById('data').value
   

    const valores = {
        idMaterial: idMaterial,
        tipo: tipo,
        quantidadeMov: quantidadeMov,
        data: data
    }

    fetch('http://localhost:3000/movimento',{
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