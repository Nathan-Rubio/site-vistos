// FUNÇÕES //

export function criarFooterHTML() {
  document.querySelector('.js-footer').innerHTML = `
    <div class="footer-redes-sociais">
      <div class="footer-titulo-redes-sociais">
        REDES SOCIAIS
      </div>

      <div class="container-redes-sociais">
        <div class="rede-social">
          <a href=#>
            <i class="fa-brands fa-whatsapp footer-rede-social-icons"></i>
          </a>

          <a href=#>
            <div class="texto">
              WhatsApp
            </div>
          </a>
        </div>
        
        <div class="rede-social">
          <a href=#>
            <i class="fa-brands fa-instagram footer-rede-social-icons"></i>
          </a>        

          <a href=#>
            <div class="texto">
              Instagram
            </div>
          </a>
        </div>
      </div>
    </div>

    <div class="footer-contatos">
      <div class="footer-titulo-contatos">
        CONTATOS
      </div>

      <div class="container-contatos">
        <div class="contato">
          <i class="fa-solid fa-phone footer-contato-icons"></i>

          <div class="texto">
            +55 11 94334-4192
          </div>
        </div>
        
        <div class="contato">
          <i class="fa-solid fa-envelope footer-contato-icons"></i>

          <div class="texto">
            splendor@gmail.com
          </div>
        </div>
      </div>
    </div>
  `;
}