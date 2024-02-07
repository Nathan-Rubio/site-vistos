import { informacoes } from "../data/informacoes.js";
import { criarHeaderHTML, adicionarEventoNavMenu } from "./header.js";
import { criarFooterHTML } from "./footer.js";

// FUNÇÕES //

// Atualiza a apresentação do botão de próximo e anterior
function atualizarButtons(posicao) {
  const wrapper = document.getElementById('wrapper');
  const screenWidth = window.innerWidth;
  const anterior = document.getElementById('anterior');
  const proximo = document.getElementById('proximo');

  // Primeiro container
  if (posicao === 0){
    anterior.style.display = 'none';
    proximo.style.display = 'flex';
  }
  // Último Container
  else if (posicao >= 2*screenWidth) {
    console.log('entrou');
    anterior.style.display = 'flex';
    proximo.style.display = 'none';
  }
  // Qualquer outro caso
  else {
    console.log('entrou');
    anterior.style.display = 'flex';
    proximo.style.display = 'flex';
  }

  console.log(posicao);
}

// Adiciona o movimento do carrossel das informações
function adicionarEventoButtons() {
  
  // Movimento para a imagem anterior
  document.querySelector('.js-anterior-button').addEventListener('click', () => {
    const wrapper = document.getElementById('wrapper');
    const screenWidth = window.innerWidth;

    wrapper.scrollTo({
      left: wrapper.scrollLeft - screenWidth,
      top: 0,
      behavior: 'smooth',
    });

    // Atualiza a Representação dos buttons
    const posicao = wrapper.scrollLeft - screenWidth;
    atualizarButtons(posicao);
  });

  // Movimento para a próxima imagem
  document.querySelector('.js-proximo-button').addEventListener('click', () => {
    const wrapper = document.getElementById('wrapper');
    const screenWidth = window.innerWidth;
    console.log(wrapper.scrollLeft + screenWidth);

    if ((wrapper.scrollLeft + screenWidth) <= (2*screenWidth)) {
      wrapper.scrollTo({
        left: wrapper.scrollLeft + screenWidth,
        top: 0,
        behavior: 'smooth',
      });
    }

    // Atualiza a Representação dos buttons
    const posicao = wrapper.scrollLeft + screenWidth;
    atualizarButtons(posicao);
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

criarHeaderHTML();
criarWrapperInformacoesHTML();
criarFooterHTML();
adicionarEventoNavMenu();
adicionarEventoButtons();
atualizarButtons(0);