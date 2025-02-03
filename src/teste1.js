function Multiplicar(a, b){
    resultado = a * b;

    if (resultado < 1){
        return 1;
    }

    return resultado;
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("CÁLCULO DO VALOR DA MULTA")

rl.question("Insira o valor da multa por dia: ", (valorMulta) => {
    rl.question("Informe a quantidade de dias de atraso: ", (diasAtraso) => {
        valorMulta = parseFloat(valorMulta);
        diasAtraso = parseInt(diasAtraso);
        
        let resultado = Multiplicar(valorMulta, diasAtraso);

        console.log("O valor da multa para " + diasAtraso + " dias de atraso é: R$" + resultado.toFixed(2));

        rl.close();
    })
})
