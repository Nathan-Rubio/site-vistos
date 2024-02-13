import { paisesVistos } from "../data/paises-vistos.js";
import { criarHeaderHTML, adicionarEventoNavMenu } from "./header.js";
import { criarFooterHTML } from "./footer.js";

// FUNÇÕES //

// atualiza qual dot vai ser ativado
function atualizarDots(id, index) {
  const dots = document.getElementById(`owl-dots-${id}`);
  const buttons = dots.querySelectorAll('button');

  buttons.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add('ativo');
    } else {
      dot.classList.remove('ativo');
    }
  });
}

// Inicializa os dots no indice 0
function InicializarDots() {
  const paises = paisesVistos;

  paises.forEach((pais) => {
    atualizarDots(`${pais.id}`, 0);
  });
}

// Adiciona o movimento do carrossel de imagens no grid
function adicionarEventoImagemButtons() {
  // Movimento para a imagem anterior
  document.querySelectorAll('.js-anterior-button').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.id;
      const wrapper = document.getElementById(`wrapper-${id}`);
      const screenWidth = window.innerWidth;
      const index = Math.max(0, Math.round((wrapper.scrollLeft / screenWidth) - 1));

      wrapper.scrollTo({
        left: wrapper.scrollLeft - screenWidth,
        top: 0,
        behavior: 'smooth',
      });

      console.log(index);

      atualizarDots(id, index);
    });
  });

  // Movimento para a próxima imagem
  document.querySelectorAll('.js-proximo-button').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.id;
      const wrapper = document.getElementById(`wrapper-${id}`);
      const screenWidth = window.innerWidth;
      const index = Math.min(2, Math.round((wrapper.scrollLeft / screenWidth) + 1));

      wrapper.scrollTo({
        left: wrapper.scrollLeft + screenWidth,
        top: 0,
        behavior: 'smooth',
      });

      console.log(index);

      atualizarDots(id, index);
    });
  });
}


// Cria o HTML do Grid
function criarGridHTML() {
  const paises = paisesVistos;

  let gridHTML = [];

  paises.forEach((pais) => {
    gridHTML += `
      <div class="container-pais">
        <div class="pais-nome">${pais.nome}</div>

        <div id="wrapper-${pais.id}" class="wrapper-imagens">

          <div class="imagem-container">
            <a href="informacoes.html?pais=${pais.id}&posicao=0">
              <img src="${pais.imagem_turismo}">
              <div class="texto-img">TURISMO</div>
            </a>
          </div>
      
          <div class="imagem-container">
            <a href="informacoes.html?pais=${pais.id}&posicao=1">
              <img src="${pais.imagem_negocios}">
              <div class="texto-img">NEGÓCIOS</div>
            </a>
          </div>
      
          <div class="imagem-container">
            <a href="informacoes.html?pais=${pais.id}&posicao=2">
              <img src="${pais.imagem_estudos}">
              <div class="texto-img">ESTUDOS</div>
            </a>
          </div>  
        </div>

        <div class="imagens-buttons">
            <i id="${pais.id}" class="fa-solid fa-chevron-left anterior-button js-anterior-button"></i>

            <i id="${pais.id}" class="fa-solid fa-chevron-right proximo-button js-proximo-button"></i>
        </div>

        <div id="owl-dots-${pais.id}" class="owl-dots">
            <button></button>

            <button></button>

            <button></button>
        </div>

        <div class="pais-footer"></div>
      </div>
    `;
  });

  document.querySelector('.js-grid').innerHTML = gridHTML;
}


///////////////////////////////////////////////////////////////


// SCRIPT DA PÁGINA //

criarHeaderHTML();
criarGridHTML();
criarFooterHTML();
adicionarEventoNavMenu();
adicionarEventoImagemButtons();
InicializarDots();