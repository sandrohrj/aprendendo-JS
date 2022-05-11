console.log("***Bem vindo ao Jogo de Adivinhação com JS!!!***");
console.log("Você terá 10 chances de acertar o número secreto, e nós vamos ajudá-lo nisso! Será informado a quantidade de chances que ainda restam e se você chutou acima ou abaixo do número secreto! :D");

const numeroSecreto = 10;

let palpiteUsuario = prompt("Digite seu palpite:");

if (palpiteUsuario == numeroSecreto){
    console.log("Parabés, você acertou o número secreto!");
} else if (palpiteUsuario > numeroSecreto){
    console.log("Seu chute foi maior que o número secreto!")
}else if (palpiteUsuario < numeroSecreto){
    console.log("Seu chute foi menor que número secreto!")
}