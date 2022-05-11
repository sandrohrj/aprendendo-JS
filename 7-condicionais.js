console.log(`Trabalhando com condicionais \n\n`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 30;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis \n\n");
console.log(listaDeDestinos);
console.log("\n\n");

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Compra permitida! \n\n");
    listaDeDestinos.splice(1, 1); //remove item
} else {
    console.log("Comprador menor deidade \n\n");
}
console.log("Embarque:");

if(idadeComprador && temPassagemComprada){
    console.log("Boa viagem! \n\n");
} else {
    console.log("Você não pode embarcar! \n\n");
}

console.log(listaDeDestinos);
console.log("\n\n");


// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1); //remove item
// } else if (estaAcompanhada) {
//     console.log("Comprador esta acompanhado!");
//     listaDeDestinos.splice(1, 1);
// } else {
//     console.log("Comprador menor deidade");
// }

// console.log(listaDeDestinos);



