function checkNumberSpeak(numberSpeak){
    const numeroChute = +numberSpeak;
    
    if(isNumber(numeroChute)){
        elementoChute.innerHTML += '<div>Valor Inválido</div>';
        return;
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numeroChute)){
        elementoChute.innerHTML += `Valor inválido: fale um número entre ${menorValor} e ${maiorValor}`;
        return;
    }

    if (numeroChute === secretNumber){
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${secretNumber}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    }else if (numeroChute > secretNumber){
        elementoChute.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>';
    } else  {
        elementoChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>';
    }

}

function isNumber(number){
    return Number.isNaN(number);
}

function numeroForMaiorOuMenorQueOValorPermitido(number){
    return number > maiorValor || number < menorValor;
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})