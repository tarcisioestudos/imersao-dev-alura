/**
 * @file Lógica principal
 * @description
 * Arquivo responsável por: carregar, buscar, ordenar e renderizar
 * os cards da base de conhecimento a partir do arquivo data.json.
 * @author Tarcisio Souza
 * @author Gemini AI (Assistência na refatoração e implementação)
 */

/** @type {HTMLElement} O container onde os cards de linguagens serão inseridos. */
const cardContainer = document.querySelector(".card-container");

/** @type {HTMLInputElement} O campo de input onde o usuário digita o termo de busca. */
const campoBusca = document.querySelector("#campo-busca");

/** @type {Array<Object>} O array original que armazena todos os dados de linguagens. */
let dados = [];

// Carrega os dados uma única vez ao iniciar a página
document.addEventListener("DOMContentLoaded", async () => {
    try {
        const resposta = await fetch("data.json");
        dados = await resposta.json();
        
        // Aplica a ordenação na carga inicial
        const dadosOrdenados = ordenarDados(dados);
        renderizarCards(dadosOrdenados);
    } catch (error) {
        console.error("Erro ao carregar os dados:", error);
    }
});

/**
 * Função para ordenar um array de dados alfabeticamente pelo campo 'nome'
 * de forma case-insensitive.
 * 
 * @param {Array<Object>} dadosArray - O array de objetos de linguagens de programação a ser ordenado.
 * @returns {Array<Object>} O array de objetos ordenado.
 */
function ordenarDados(dadosArray) {
    // Cria uma cópia dos dados para não modificar o original ao usar o método sort.
    // Que compara os nomes de forma case-insensitive (Boa prática)
    return [...dadosArray].sort((a, b) => {
        const nomeA = a.nome.toLowerCase();
        const nomeB = b.nome.toLowerCase();
        
        if (nomeA < nomeB) {
            return -1;
        }
        if (nomeA > nomeB) {
            return 1;
        }
        return 0;
    });
}


/**
 * Função que faz o processo de busca, lendo o valor do campoBusca, filtrando os dados,
 * ordenando os resultados e chamando a renderização dos cards.
 * * Esta função é chamada pelo evento 'onsubmit' do formulário no HTML.
 * 
 * @returns {void} Não retorna valor.
 */
function iniciarBusca() {
    // 1. Obtém o termo de busca
    const termoBusca = campoBusca.value.trim().toLowerCase();

    let dadosFiltrados = dados;

    if (termoBusca) {
        // 2. Filtra os dados: a linguagem deve ter o termo no 'nome' OU na 'descricao'
        dadosFiltrados = dados.filter(dado => {
            const nomeMinusculo = dado.nome.toLowerCase();
            const descricaoMinuscula = dado.descricao.toLowerCase();
            
            return nomeMinusculo.includes(termoBusca) || descricaoMinuscula.includes(termoBusca);
        });
    }

    // 3. Ordena os dados filtrados antes de renderizar
    const dadosFiltradosEOrdenados = ordenarDados(dadosFiltrados);
    
    // 4. Renderiza os cards
    renderizarCards(dadosFiltradosEOrdenados);
}

/**
 * Limpa o container de cards e cria e insere os novos elementos HTML 
 * para cada item na lista fornecida.
 * 
 * @param {Array<Object>} listaDeDados - O array de objetos (linguagens) a ser exibido.
 * @returns {void} Não retorna valor.
 */
function renderizarCards (listaDeDados) {
    // Limpa o conteúdo atual do container
    cardContainer.innerHTML = "";

    if (listaDeDados.length === 0) {
        // Se não houver resultados, exibe uma mensagem
        cardContainer.innerHTML = `
            <article class="card">
                <h2>Nenhum resultado encontrado</h2>
                <p>Nenhuma linguagem de programação ou termo corresponde à sua busca.</p>
            </article>
        `;
        return;
    }

    // Itera sobre a lista e cria os elementos HTML
    for (let dado of listaDeDados) {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
            <h2>${dado.nome}</h2>
            <p><strong>Ano de Lançamento:</strong> ${dado.ano}</p>
            <p>${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Saiba mais</a>
        `
        cardContainer.appendChild(article);
    }
}
