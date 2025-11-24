# 📚 Base de Conhecimento de Linguagens de Programação

## Sobre o Projeto

Este é um projeto simples de **Base de Conhecimento** construído inteiramente com **HTML, CSS e JavaScript puro**. O objetivo principal é carregar dados de linguagens de programação (essa lista contém desde as linguagens mais mainstream até algumas de nicho e com grande valor histórico ou especializado) de um arquivo JSON (`data.json`) e permitir que o usuário **busque e filtre** essas linguagens de forma dinâmica e em tempo real. Os resultados são exibidos em formato de cards e são sempre ordenados alfabeticamente.

---

## 🛠️ Tecnologias Utilizadas

O projeto utiliza o chamado *vanilla stack* (pilha pura) para garantir leveza e desempenho.

* **HTML5:** Estrutura da página.
* **CSS3:** Estilização moderna (Dark Mode) e *design responsivo*.
* **JavaScript (ES6+):** Lógica de carregamento de dados (`fetch`), ordenação (`sort`), filtragem (`filter`) e manipulação do DOM (`renderizarCards`).
* **JSDoc:** Utilizado para documentar as funções no `script.js`.

---

## 🚀 Funcionalidades

* **Carregamento Assíncrono:** Os dados são carregados do `data.json` uma única vez ao iniciar a página.
* **Busca Dinâmica:** Permite pesquisar por termos tanto no **nome** quanto na **descrição** da linguagem.
* **Ordenação Padrão:** Os resultados são sempre exibidos em ordem alfabética (case-insensitive) pelo nome da linguagem.
* **Responsividade:** O layout é otimizado para funcionar bem em telas de desktop e dispositivos móveis.

---

## ⚙️ Como Executar Localmente

Você não precisa de um servidor web ou ambiente de *build* para executar este projeto.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/tarcisioestudos/imersao-dev-alura.git
    ```
2.  **Navegue até a pasta:**
    ```bash
    cd imersao-dev-alura-main
    ```
3.  **Abra no navegador:**
    * Simplesmente clique duas vezes no arquivo `index.html`.
    * Alternativamente, abra o `index.html` usando a extensão "Live Server" (se estiver usando VS Code) para garantir que o `fetch` funcione corretamente.

---

## 📄 Estrutura do Projeto

| Arquivo/Pasta | Descrição |
| :--- | :--- |
| `index.html` | Contém a estrutura da página (cabeçalho, campo de busca e container dos cards). |
| `style.css` | Folha de estilos responsável pelo visual (Dark Mode e responsividade). |
| `script.js` | Contém toda a lógica JavaScript: `fetch`, `ordenarDados`, `iniciarBusca` e `renderizarCards`. |
| `data.json` | A fonte de dados, contendo os objetos de linguagens de programação. |
| `README.md` | O arquivo que você está lendo agora. |

---

## 👤 Autor

* **Tarcisio Souza** - Criador e Desenvolvedor Principal.
* **Gemini AI** - Assistência em refatoração, JSDoc e ajustes de estilo.

---
