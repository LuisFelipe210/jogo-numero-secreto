let listaDeNumerosSorteados = [];
let numeroLimite = 100000;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

mensagemInicial();
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});


}
function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
}


function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
         exibirTextoNaTela('h1', 'Acertou!');
         let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
         let mensagemTentivas = (`Você acertou o número secreto com ${tentativas} ${palavraTentativa}!`)
         exibirTextoNaTela('p', mensagemTentivas);
         document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++
        limparCampo();
    } 
}  

function limparCampo (){
    chute = document.querySelector('input');
    chute.value = '';
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantindadeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantindadeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function reiniciarJogo () {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}