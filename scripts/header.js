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

        <ul id="nav-menu-desktop" class="nav-menu-desktop">
          <a href="vistos.html">
            <li>VISTOS</li>
          </a>
          <a href="cidadanias.html">
            <li>CIDADANIAS</li>
          </a>
        </ul>
      </nav>

      <ul id="nav-menu-mobile" class="nav-menu-mobile">
        <a href="vistos.html">
          <li>VISTOS</li>
        </a>
        <a href="cidadanias.html">
          <li>CIDADANIAS</li>
        </a>
      </ul>
    </header>
  `;
}

// Adiciona o abrir e fechar do menu de navegação
export function adicionarEventoNavMenu() {
  document.querySelector('.js-icone-menu').addEventListener('click', () => {
    const menu = document.getElementById('nav-menu-mobile');
    const main = document.getElementById('main');
  
    // Abre o menu
    if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'flex';
      const quantidadeBotoes = 2;
      const tamanhoBotao = 36;
      let margem = 100 + (quantidadeBotoes * tamanhoBotao) + 20;
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