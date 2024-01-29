// FUNÇÕES //

export function criarHeaderHTML() {
  document.querySelector('.js-header').innerHTML = `
    <header class="header">
      <nav class="nav">
        <i class="fa-solid fa-bars nav-icone-menu js-icone-menu"></i>

        <a href="index.html">
          <img class="nav-logo" src="../imagens/logo.png" alt="logo">
        </a>
      </nav>

      <ul id="nav-menu" class="nav-menu">
        <li>VISTOS</li>
        <li>CIDADANIA</li>
        <li>ITEM 3</li>
        <li>ITEM 4</li>
        <li>ITEM 5</li>
      </ul>
    </header>
  `;
}