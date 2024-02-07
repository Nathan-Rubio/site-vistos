import { informacoes } from "../data/informacoes.js";
import { criarHeaderHTML, adicionarEventoNavMenu } from "./header.js";
import { criarFooterHTML } from "./footer.js";

// FUNÇÕES //

// Atualiza a apresentação do botão de próximo e anterior
function atualizarButtons(index) {
  const anterior = document.getElementById('anterior');
  const proximo = document.getElementById('proximo');

  // Primeiro container
  if (index == 0){
    anterior.style.display = 'none';
    proximo.style.display = 'flex';
  }
  // Último Container
  else if (index == 2) {
    anterior.style.display = 'flex';
    proximo.style.display = 'none';
  }
  // Qualquer outro caso
  else {
    anterior.style.display = 'flex';
    proximo.style.display = 'flex';
  }

  console.log('index:', index);
}

// Inicializa a página de acordo com a posição fornecida na url
function inicializarPagina(){
  const params = new URLSearchParams(window.location.search);
  const posicao = params.get('posicao');

  const wrapper = document.getElementById('wrapper');
  const screenWidth = window.innerWidth;

  console.log((posicao * screenWidth));

  wrapper.scrollTo({
    left: wrapper.scrollLeft + (posicao * screenWidth),
    top: 0,
  });

  atualizarButtons(posicao);
}



// Adiciona o movimento do carrossel das informações
function adicionarEventoButtons() {
  
  // Movimento para a imagem anterior
  document.querySelector('.js-anterior-button').addEventListener('click', () => {
    const wrapper = document.getElementById('wrapper');
    const screenWidth = window.innerWidth;
    const index = Math.max(0, Math.round((wrapper.scrollLeft / screenWidth) - 1));

    wrapper.scrollTo({
      left: wrapper.scrollLeft - screenWidth,
      top: 0,
      behavior: 'smooth',
    });

    // Atualiza a Representação dos buttons
    atualizarButtons(index);
  });

  // Movimento para a próxima imagem
  document.querySelector('.js-proximo-button').addEventListener('click', () => {
    const wrapper = document.getElementById('wrapper');
    const screenWidth = window.innerWidth;
    const index = Math.min(2, Math.round((wrapper.scrollLeft / screenWidth) + 1));

    if ((wrapper.scrollLeft + screenWidth) <= (2*screenWidth)) {
      wrapper.scrollTo({
        left: wrapper.scrollLeft + screenWidth,
        top: 0,
        behavior: 'smooth',
      });
    }

    // Atualiza a Representação dos buttons
    atualizarButtons(index);
  });
}

// Cria o HTML do Wrapper de informações
function criarWrapperInformacoesHTML() {
  const params = new URLSearchParams(window.location.search);
  const pais = params.get('pais');

  let containerInformacoesHTML = '';

  let turismo;
  let negocios;
  let estudos;

  informacoes.forEach((informacao) => {
    if (informacao.id === pais + "-turismo") {
      turismo = informacao.informacoes;
    }

    if (informacao.id === pais + "-negocios") {
      negocios = informacao.informacoes;
    }

    if (informacao.id === pais + "-estudos") {
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

criarHeaderHTML();
criarWrapperInformacoesHTML();
criarFooterHTML();
adicionarEventoNavMenu();
adicionarEventoButtons();
inicializarPagina();