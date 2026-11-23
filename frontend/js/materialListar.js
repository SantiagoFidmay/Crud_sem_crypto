const resposta = document.getElementById('resposta')
const btn_listar = document.getElementById('btn_listar')

btn_listar.addEventListener('click',(e)=>{
    e.preventDefault()


    fetch(`http://localhost:3000/materiais`,{
        method: 'GET'
    })

    .then(res => res.json())
    .then(dados => {
        resposta.innerHTML = ``
        dados.forEach(dados => {
        resposta.innerHTML += `
        
        <table>
            <tr>
                <td>${dados.idObra}</td>
                <td>${dados.descricao}</td>
                <td>${dados.quantidade}</td>
                <td>${dados.codLote}</td>
            </tr>
        </table>
        
        `
        })
       
    })
    .catch((err)=>{
        console.error('erro ao consultar')
    })
})