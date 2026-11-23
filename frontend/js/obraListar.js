const resposta = document.getElementById('resposta')
const btn_listar = document.getElementById('btn_listar')

btn_listar.addEventListener('click',(e)=>{
    e.preventDefault()


    fetch(`http://localhost:3000/obras`,{
        method: 'GET'
    })

    .then(res => res.json())
    .then(dados => {
        resposta.innerHTML = ``
        dados.forEach(dados => {
        resposta.innerHTML += `
        
        <table>
            <tr>
                <td>${dados.codIdentificacao}</td>
                <td>${dados.nome}</td>
                <td>${dados.cnpj}</td>
            
            </tr>
        </table>
        
        `
        })
        
    })
    .catch((err)=>{
        console.error('erro ao consultar')
    })
})