let noelStop = document.getElementById("noelQuieto")
let playMusic = document.getElementById('buttonPlay')
let pauseMusic = document.getElementById('buttonPause')
let sonidoFondo = new Audio("./sound/music.mp3")
let dias = document.getElementById("dias")
let horas = document.getElementById("horas")
let minutos = document.getElementById("minutos")
let segundos = document.getElementById("segundos")


function obtenerTiempoFaltante(fechaLimite) {
    let ahora = new Date();
    let tiempoFaltante = (new Date(fechaLimite) - ahora + 1000) / 1000;

    let segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    let minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    let horasFaltantes = ('0' + Math.floor(tiempoFaltante / 3600 % 24)).slice(-2);
    let diasFaltantes = ('0' + Math.floor(tiempoFaltante / (3600 * 24))).slice(-2);

    return {
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante
    }
};

function cuentaRegresiva(tiempoFaltante, reloj, mensaje) {
    const e = document.getElementById(reloj);
    const titulo = document.getElementById('titulo')
    const tiempoActual = setInterval(() => {
        let t = obtenerTiempoFaltante(tiempoFaltante);
        dias.innerHTML = t.diasFaltantes
        horas.innerHTML = t.horasFaltantes
        minutos.innerHTML = t.minutosFaltantes
        segundos.innerHTML = t.segundosFaltantes

        if (t.tiempoFaltante <= 1) {
            dias.innerHTML = '00'
            horas.innerHTML = '00'
            minutos.innerHTML = '00'
            segundos.innerHTML = '00'
            clearInterval(tiempoActual);
            titulo.innerHTML = mensaje;
            noelStop.classList.add('on')
            playMusic.classList.remove('offMusic')
            playMusic.classList.add('onMusic')
            pauseMusic.classList.remove('pauseMusic')
            pauseMusic.classList.add('pause')
        }

    }, 1000)
};

cuentaRegresiva('Nov 08 2023 18:01:00 GMT-0500', 'cuentaRegresiva', '¡Feliz Navidad!')

function musicPlay() {
    sonidoFondo.play();
}

function musicPause() {
    sonidoFondo.pause();
}