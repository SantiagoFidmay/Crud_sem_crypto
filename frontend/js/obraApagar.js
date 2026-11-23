const resposta = document.getElementById('resposta')
const btn_apagar = document.getElementById('btn_apagar')

btn_apagar.addEventListener('click', (e)=>{
    e.preventDefault()

    const codObra = document.getElementById('codObra').value
    
    fetch(`http://localhost:3000/obra/${codObra}`,{
        method: 'DELETE',
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