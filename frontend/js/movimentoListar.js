const resposta = document.getElementById('resposta')
const btn_listar = document.getElementById('btn_listar')

btn_listar.addEventListener('click',(e)=>{
    e.preventDefault()


    fetch(`http://localhost:3000/movimentos`,{
        method: 'GET'
    })

    .then(res => res.json())
    .then(dados => {
        resposta.innerHTML = ``
        dados.forEach(dados => {
        resposta.innerHTML += `
        
        <table>
            <tr>
                <td>${dados.idMaterial}</td>
                <td>${dados.tipo}</td>
                <td>${dados.quantidadeMov}</td>
                <td>${dados.data}</td>
            </tr>
        </table>
        
        `
        })
       
    })
    .catch((err)=>{
        console.error('erro ao consultar')
    })
})