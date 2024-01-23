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


///////////////////////////////////////////////////////////////


// SCRIPT DA PÁGINA //

adicionarEventoNavMenu();

document.querySelectorAll('.js-anterior-button').forEach((button) => {
  button.addEventListener('click', () => {
    const wrapper = document.getElementById('wrapper');
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
    const wrapper = document.getElementById('wrapper');
    const screenWidth = window.innerWidth;

    wrapper.scrollTo({
      left: wrapper.scrollLeft + screenWidth,
      top: 0,
      behavior: "smooth"
    });
  });
});