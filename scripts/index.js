import { bannerIndex } from "../data/index-banner.js";
import { criarHeaderHTML, adicionarEventoNavMenu } from "./header.js";
import { criarFooterHTML } from "./footer.js";

// FUNÇÕES //

// Adiciona o movimento do carrossel de imagens no grid
function adicionarEventoImagemButtons() {
  const anteriorButton = document.querySelector('.js-anterior-button');

  anteriorButton.addEventListener('click', () => {
    const wrapper = document.getElementById('wrapper');
    const screenWidth = window.innerWidth;

    wrapper.scrollTo({
      left: wrapper.scrollLeft - screenWidth,
      top: 0,
      behavior: "smooth"
    });
  });

  const proximoButton = document.querySelector('.js-proximo-button');

  proximoButton.addEventListener('click', () => {
    const wrapper = document.getElementById('wrapper');
    const screenWidth = window.innerWidth;

    wrapper.scrollTo({
      left: wrapper.scrollLeft + screenWidth,
      top: 0,
      behavior: "smooth"
    });
  });
}

// Cria o HTML do Grid
function criarGridHTML() {
  const banner = bannerIndex;

  let imagemHTML = [];

  banner.forEach((item) => {
    imagemHTML += `
      <div class="imagem-container">
        <a href="${item.id}.html">
          <img src="${item.imagem}">
        </a>
      </div>
    `;
  });

  document.querySelector('.js-grid').innerHTML = `
    <div class="container-pais">
        <div id="wrapper" class="wrapper-imagens">

          ${imagemHTML}

          <div class="imagens-buttons">
            <i class="fa-solid fa-chevron-left anterior-button js-anterior-button"></i>

            <i class="fa-solid fa-chevron-right proximo-button js-proximo-button"></i>
          </div>
        </div>
    </div>
  `;
}


///////////////////////////////////////////////////////////////


// SCRIPT DA PÁGINA //

criarHeaderHTML();
criarGridHTML();
criarFooterHTML();
adicionarEventoNavMenu();
adicionarEventoImagemButtons();