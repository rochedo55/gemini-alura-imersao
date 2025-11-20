let dados = []

async function carregarDados(){
    const resposta = await fetch("data.json")
    dados = await resposta.json()
    popularLista(dados)
}

function popularLista(dadosParaExibir){
    const secao = document.querySelector("main section")
    secao.innerHTML = "" // Limpa a seção antes de popular

    for(const item of dadosParaExibir){
        const article = document.createElement('article')
        article.classList.add('card')

        article.innerHTML = `
            <h2>${item.nome}</h2>
            <p>${item.descricao}</p>
            <a href="${item.link}" target="_blank">Saiba mais</a>
        `
        secao.appendChild(article)
    }
}

function iniciarBusca(){
    const termoBusca = document.getElementById('busca').value.toLowerCase()
    
    if (termoBusca === '') {
        alert("Por favor, digite algo para buscar.")
        return
    }

    const resultadoBusca = dados.filter(item => 
        item.nome.toLowerCase().includes(termoBusca)
    )

    popularLista(resultadoBusca)
}

function limparBusca() {
    document.getElementById('busca').value = ""
    popularLista(dados)
}

// Inicia o carregamento dos dados assim que a página é carregada
carregarDados()