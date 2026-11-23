const resposta = document.getElementById('resposta')
const btn_consultar = document.getElementById('btn_consultar')

btn_consultar.addEventListener('click',(e)=>{
    e.preventDefault()

    const codMovimento = document.getElementById('codMovimento').value

    fetch(`http://localhost:3000/movimento/${codMovimento}`,{
        method: 'GET'
    })

    .then(res => res.json())
    .then(dados => {
        resposta.innerHTML = ``
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
    .catch((err)=>{
        console.error('erro ao consultar')
    })
})