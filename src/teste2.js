function ContarPalavras(str) { 
    return str.trim().split(/\s+/).length;
  }

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Insira uma frase: ", (frase) => {
    
    console.log("Quantidade de palavras: " + ContarPalavras(frase));

    rl.close();
})
