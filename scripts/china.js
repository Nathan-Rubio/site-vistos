import { informacoes } from "../data/informacoes.js";

// FUNÇÕES //

// Adiciona o abrir e fechar do menu de navegação
function adicionarEventoNavMenu() {
  document.querySelector('.js-icone-menu').addEventListener('click', () => {
    const menu = document.getElementById('nav-menu');
    const main = document.getElementById('main');
  
    // Abre o menu
    if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'flex';
      let margem = 100 + 180 + 20;
      margem = margem.toString();
      main.style.marginTop = `${margem}px`;
    }
    // Fecha o menu
    else {
      menu.style.display = 'none';
      let margem = 100 + 20;
      margem = margem.toString();
      main.style.marginTop = `${margem}px`;
    }
  });
}

// Cria o HTML do Wrapper de informações
function criarWrapperInformacoesHTML() {
  let containerInformacoesHTML = '';

  let turismo;
  let negocios;
  let estudos;

  informacoes.forEach((informacao) => {
    if (informacao.id === "china-turismo") {
      turismo = informacao.informacoes;
    }

    if (informacao.id === "china-negocios") {
      negocios = informacao.informacoes;
    }

    if (informacao.id === "china-estudos") {
      estudos = informacao.informacoes;
    }
  });

  containerInformacoesHTML += turismo;
  containerInformacoesHTML += negocios;
  containerInformacoesHTML += estudos;

  document.querySelector('.js-wrapper').innerHTML = containerInformacoesHTML;
}


///////////////////////////////////////////////////////////////


// SCRIPT DA PÁGINA //

criarWrapperInformacoesHTML();
adicionarEventoNavMenu();