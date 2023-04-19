const menorValor = 1;
const maiorValor = 1000;
const secretNumber =  generateNumber();

function generateNumber() {
    return parseInt(Math.random() * maiorValor + 1);
}

const elementMenorValor = document.querySelector("#menor-valor");
elementMenorValor.innerHTML = menorValor;

const elementMaiorValor = document.querySelector("#maior-valor");
elementMaiorValor.innerHTML = maiorValor;