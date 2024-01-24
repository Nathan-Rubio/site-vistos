import { paisesVistos } from "./paises-vistos.js";

// FUNÇÕES //

// Adiciona o abrir e fechar do menu de navegação
function adicionarEventoNavMenu() {
  document.querySelector('.js-icone-menu').addEventListener('click', () => {
    const menu = document.getElementById('nav-menu');
    const main = document.getElementById('main');
  
    // Abre o menu
    if (menu.style.display === 'none') {
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
        <div id="wrapper-${pais.id}" class="wrapper-imagens">
          <a href="china.html"><img src="${pais.imagem_turismo}"></a>
          <img src="${pais.imagem_negocios}">
          <img src="${pais.imagem_estudos}">

          <div class="imagens-buttons">
            <i id="${pais.id}" class="fa-solid fa-less-than anterior-button js-anterior-button"></i>
            <i id="${pais.id}" class="fa-solid fa-greater-than proximo-button js-proximo-button"></i>
          </div>
        </div>
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