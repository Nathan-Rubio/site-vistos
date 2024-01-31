// FUNÇÕES //

export function criarFooterHTML() {
  document.querySelector('.js-footer').innerHTML = `
    <div class="footer-redes-sociais">
      <div class="footer-titulo-redes-sociais">
        REDES SOCIAIS
      </div>

      <div class="container-icons">
        <i class="fa-brands fa-whatsapp footer-icons"></i>

        <i class="fa-brands fa-instagram footer-icons"></i>
        
      </div>
    </div>

    <div class="footer-contatos">
      <div class="footer-titulo-contatos">
        CONTATOS
      </div>

      <div class="container-contatos">
        <div class="contato">
          <i class="fa-solid fa-phone footer-contato-icons"></i>

          <div class="contato-texto">
            +55 11 94334-4192
          </div>
        </div>
        
        <div class="contato">
          <i class="fa-solid fa-envelope footer-contato-icons"></i>

          <div class="contato-texto">
            splendor@gmail.com
          </div>
        </div>
      </div>
    </div>
  `;
}