function gerarVetorAleatorio() {
    let vetor = [];
    
    for (let i = 0; i < 50; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        vetor.push(numeroAleatorio);
    }

    return vetor;
}

let vetorAleatorio = gerarVetorAleatorio();
let vetorMultiplos = [], vetorNaoMultiplos = [];

for(let i = 0; i < 50; i++){
    if(vetorAleatorio[i] % 3 === 0){
        vetorMultiplos.push(vetorAleatorio[i]);
    }
    else{
        vetorNaoMultiplos.push(vetorAleatorio[i]);
    }
}

console.log("\nNúmeros inteiros gerados de forma randômica: " + vetorAleatorio.join(", "));
console.log("\nPrimeiro vetor, números múltiplos de 3: " + vetorMultiplos.join(", "));
console.log("\nSegundo vetor, números não múltiplos de 3: " + vetorNaoMultiplos.join(", "));