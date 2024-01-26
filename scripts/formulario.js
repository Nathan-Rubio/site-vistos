// FUNÇÕES //

// Adiciona o abrir e fechar do menu de navegação
function adicionarEventoNavMenu() {
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

// Auto Completa o endereço de acordo com o CEP oferecido
function autocompletarCEP() {
  // Pego do site: https://blog.andersonmamede.com.br/autocomplete-de-endereco-pelo-CEP/

  // Registra o evento blur do campo "cep", ou seja, a pesquisa será feita
  // quando o usuário sair do campo "cep"
  $("#cep").blur(function(){
    // Remove tudo o que não é número para fazer a pesquisa
    const cep = this.value.replace(/[^0-9]/, "");

    // Validação do CEP; caso o CEP não possua 8 números, então cancela
    // a consulta
    if(cep.length != 8){
      return false;
    }

    // A url de pesquisa consiste no endereço do webservice + o cep que
    // o usuário informou + o tipo de retorno desejado (entre "json",
    // "jsonp", "xml", "piped" ou "querty")
    const url = "https://viacep.com.br/ws/"+cep+"/json/";

    console.log('url: ', url);

    // Faz a pesquisa do CEP, tratando o retorno com try/catch para que
    // caso ocorra algum erro (o cep pode não existir, por exemplo) a
    // usabilidade não seja afetada, assim o usuário pode continuar//
    // preenchendo os campos normalmente

    $.getJSON(url, function(dadosRetorno){
      try{
        // Preenche os campos de acordo com o retorno da pesquisa
        $("#endereco").val(dadosRetorno.logradouro);
        $("#bairro").val(dadosRetorno.bairro);
        $("#cidade").val(dadosRetorno.localidade);
        $("#uf").val(dadosRetorno.uf);
      }
      catch(ex) {
        
      }
    });
  });
}


///////////////////////////////////////////////////////////////


// SCRIPT DA PÁGINA //

adicionarEventoNavMenu();
autocompletarCEP();