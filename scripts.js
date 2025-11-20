let dados = []

async function carregarDados(){
    let resposta = await fetch("data.json")
    dados = await resposta.json()
    popularLista()
}

function popularLista(){
    const secao = document.querySelector("main section")
    secao.innerHTML = "" // Limpa a seção antes de popular

    for(const item of dados){
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

// Inicia o carregamento dos dados assim que a página é carregada
carregarDados()