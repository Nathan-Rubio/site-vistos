import { paisesVistos } from "./paises-vistos.js";

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

// Adiciona o movimento do carrossel de imagens no grid
function adicionarEventoImagemButtons() {
  document.querySelectorAll('.js-anterior-button').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.id;
      const wrapper = document.getElementById(`wrapper-${id}`);
      const screenWidth = window.innerWidth;
  
      wrapper.scrollTo({
        left: wrapper.scrollLeft - screenWidth,
        top: 0,
        behavior: "smooth"
      });
    });
  });
  
  document.querySelectorAll('.js-proximo-button').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.id;
      const wrapper = document.getElementById(`wrapper-${id}`);
      const screenWidth = window.innerWidth;
  
      wrapper.scrollTo({
        left: wrapper.scrollLeft + screenWidth,
        top: 0,
        behavior: "smooth"
      });
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

          <a href="${pais.id}.html">
            <img src="${pais.imagem_turismo}">
          </a>

          <a href="${pais.id}.html">
            <img src="${pais.imagem_negocios}">
          </a>

          <a href="${pais.id}.html">
            <img src="${pais.imagem_estudos}">
          </a>

          <div class="imagens-buttons">
            <i id="${pais.id}" class="anterior-button js-anterior-button"></i>

            <i id="${pais.id}" class="proximo-button js-proximo-button"></i>
          </div>

          <div class="texto-imagem">TESTETESTETESTETESTE</div>
        </div>
        <div class="pais-footer"></div>
      </div>
    `;
  });

  document.querySelector('.js-grid').innerHTML = gridHTML;
}


///////////////////////////////////////////////////////////////


// SCRIPT DA PÁGINA //

criarGridHTML();
adicionarEventoNavMenu();
adicionarEventoImagemButtons();