import { informacoes } from "../data/informacoes.js";
import { criarHeaderHTML, adicionarEventoNavMenu } from "./header.js";
import { criarFooterHTML } from "./footer.js";

// FUNÇÕES //

// Cria o HTML do Wrapper de informações
function criarWrapperInformacoesHTML() {
  let containerInformacoesHTML = '';

  let turismo;
  let negocios;
  let estudos;

  informacoes.forEach((informacao) => {
    if (informacao.id === "eua-turismo") {
      turismo = informacao.informacoes;
    }

    if (informacao.id === "eua-negocios") {
      negocios = informacao.informacoes;
    }

    if (informacao.id === "eua-estudos") {
      estudos = informacao.informacoes;
    }
  });

  containerInformacoesHTML += turismo;
  containerInformacoesHTML += negocios;
  containerInformacoesHTML += estudos;

  document.querySelector('.js-wrapper').innerHTML = containerInformacoesHTML;
}


///////////////////////////////////////////////////////////////


// SCRIPT DA PÁGINA //

criarHeaderHTML();
criarWrapperInformacoesHTML();
criarFooterHTML();
adicionarEventoNavMenu();