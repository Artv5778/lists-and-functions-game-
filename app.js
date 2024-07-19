//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Wowie Zowie';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML= 'Escolha um wowie zowie';
let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function agruparTexto(tag, texto){

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});

}

function exibirMensageminicial(){

  agruparTexto('h1', 'Wowie Zowie')
  agruparTexto('p', 'Escolha um wowie zowie')
}

exibirMensageminicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
      agruparTexto ('h1', 'WOWIEEEEE');
      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
      let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
      agruparTexto ('p', mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
      if (chute > numeroSecreto) {
      agruparTexto ('p', 'É menor');
    } else {
      agruparTexto('p', 'O numero é maior!');
    }
    tentativas++;
    limparcampo();
   }
}


function gerarNumeroAleatorio() {
    let numeroEscolhido= parseInt(Math.random () * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length

    if (quantidadeDeElementosNaLista == numeroLimite) {
      listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
      listaNumerosSorteados.push(numeroEscolhido);
      console.log(listaNumerosSorteados);
       return numeroEscolhido;
    }
}

function limparcampo(){
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo (){
  numeroSecreto=gerarNumeroAleatorio();
  limparcampo();
  tentativas=1;
  exibirMensageminicial();
  document.getElementById ('reiniciar').setAttribute('disabled',true);

}
