
const contador = document.getElementById('time');
const resetButton = document.getElementById('reset');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
let contadorInt = 0;
let running = false;
let date = new Date().getTime();
let atualizarCont = 0;
let contTemp = 0;
let diferencaMs = 0;
let diferencaMsAux;
let primeiraVez = true;

function atualiza() {
    console.log(contTemp);
    let newDate = new Date().getTime();
    diferencaMs = Math.abs(newDate - date + contTemp);
    diferencaMsAux = diferencaMs;

    let horas = Math.floor(diferencaMs / (1000 * 60 * 60));
    diferencaMs -= horas * (1000 * 60 * 60);

    let minutos = Math.floor(diferencaMs / (1000 * 60));
    diferencaMs -= minutos * (1000 * 60);

    let segundos = Math.floor(diferencaMs / 1000);
    diferencaMs -= segundos * 1000;

    let milissegundos = diferencaMs;

    let horasFormatadas = String(horas).padStart(2, '0');
    let minutosFormatados = String(minutos).padStart(2, '0');
    let segundosFormatados = String(segundos).padStart(2, '0');
    let milissegundosFormatados = String(milissegundos).padStart(3, '0');

contador.textContent = `${horasFormatadas}:${minutosFormatados}:${segundosFormatados}:${milissegundosFormatados}`;
}


startButton.onclick = function() {
    if (running == false) {
        running = true;
        date = new Date().getTime();
        atualizarCont = setInterval(atualiza, 1);
    }

}

stopButton.onclick = function() {
    contTemp = diferencaMsAux;
    running = false;
    clearInterval(atualizarCont);
}

resetButton.onclick = function() {
    date = new Date();
    contador.textContent = '00:00:00:000'
    running = false;
    contadorInt = 0;
    contTemp = 0;
    clearInterval(atualizarCont);
    
}
