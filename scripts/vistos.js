import { paisesVistos } from "../data/paises-vistos.js";
import { criarHeaderHTML, adicionarEventoNavMenu } from "./header.js";
import { criarFooterHTML } from "./footer.js";

// FUNÇÕES //

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

          <div class="imagem-container">
            <a href="${pais.id}.html">
              <img src="${pais.imagem_turismo}">
            </a>
          </div>
      
          <div class="imagem-container">
            <a href="${pais.id}.html">
              <img src="${pais.imagem_negocios}">
            </a>
          </div>
      
          <div class="imagem-container">
            <a href="${pais.id}.html">
              <img src="${pais.imagem_estudos}">
            </a>
          </div>

            <div class="imagens-buttons">
              <i id="${pais.id}" class="fa-solid fa-chevron-left anterior-button js-anterior-button"></i>

              <i id="${pais.id}" class="fa-solid fa-chevron-right proximo-button js-proximo-button"></i>
            </div>
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