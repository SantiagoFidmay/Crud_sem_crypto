const resposta = document.getElementById('resposta')
const btn_consultar = document.getElementById('btn_consultar')

btn_consultar.addEventListener('click',(e)=>{
    e.preventDefault()

    const codObra = document.getElementById('codObra').value

    fetch(`http://localhost:3000/obra/${codObra}`,{
        method: 'GET'
    })

    .then(res => res.json())
    .then(dados => {
        resposta.innerHTML = ``
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
    .catch((err)=>{
        console.error('erro ao consultar')
    })
})