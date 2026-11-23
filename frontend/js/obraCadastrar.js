const resposta = document.getElementById('resposta')
const btn_cadastrar = document.getElementById('btn_cadastrar')

btn_cadastrar.addEventListener('click', (e)=>{
    e.preventDefault()

    const codIdentificacao = document.getElementById('codIdentificacao').value
    const nome = document.getElementById('nome').value
    const cnpj = document.getElementById('cnpj').value



    const valores = {
        codIdentificacao: codIdentificacao,
        nome: nome,
        cnpj: cnpj
    }

    fetch('http://localhost:3000/obra',{
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

