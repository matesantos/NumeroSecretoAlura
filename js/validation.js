function checkNumberSpeak(numberSpeak){
    
    const number = +numberSpeak;
    
    //console.log(number);


    if(isNumber(number)){
        elementoChute.innerHTML = "<div>Valor Inválido</div>";
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(number)){
        console.log(`Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}`);
        return;
    }

}

function isNumber(number){
    console.log(Number.isNaN("number"))
    return Number.isNaN(number);
}

function numeroForMaiorOuMenorQueOValorPermitido(number){
    return number > maiorValor || number < menorValor;
}