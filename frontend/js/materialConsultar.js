const resposta = document.getElementById('resposta')
const btn_consultar = document.getElementById('btn_consultar')

btn_consultar.addEventListener('click',(e)=>{
    e.preventDefault()

    const codMaterial = document.getElementById('codMaterial').value

    fetch(`http://localhost:3000/material/${codMaterial}`,{
        method: 'GET'
    })

    .then(res => res.json())
    .then(dados => {
        resposta.innerHTML = ``
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
    .catch((err)=>{
        console.error('erro ao consultar')
    })
})