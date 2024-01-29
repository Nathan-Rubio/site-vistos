// FUNÇÕES //

// Cria o HTML do header presente em todas as páginas
export function criarHeaderHTML() {
  document.querySelector('.js-header').innerHTML = `
    <header class="header">
      <nav class="nav">
        <i class="fa-solid fa-bars nav-icone-menu js-icone-menu"></i>

        <a href="index.html">
          <img class="nav-logo" src="imagens/logo.png" alt="logo">
        </a>
      </nav>

      <ul id="nav-menu" class="nav-menu">
        <a href="vistos.html">
          <li>VISTOS</li>
        </a>
        <a href="cidadania.html">
          <li>CIDADANIA</li>
        </a>
        <li>ITEM 3</li>
        <li>ITEM 4</li>
        <li>ITEM 5</li>
      </ul>
    </header>
  `;
}

// Adiciona o abrir e fechar do menu de navegação
export function adicionarEventoNavMenu() {
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