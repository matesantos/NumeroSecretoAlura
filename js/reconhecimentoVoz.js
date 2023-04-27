const elementoChute = document.querySelector("#chute");

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-br';
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(event){
    const numberSpeak = event.results[0][0].transcript;
    showNumberOnTheScreen(numberSpeak);
    checkNumberSpeak(numberSpeak);
}

function showNumberOnTheScreen(number){
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${number}</span>
    `
}

recognition.addEventListener("end", () => recognition.start());

