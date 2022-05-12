console.log(`Trabalhando com condicionais \n\n`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 30;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "São Paulo";

console.log("Destinos possíveis \n\n");
console.log(listaDeDestinos);
console.log("\n\n");

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existe");
        break
    } else {
        console.log("Destino não existe");
    }
    contador += 1;
}