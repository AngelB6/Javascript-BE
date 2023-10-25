// Definimos una variable global que tendra el valor "off"
let esqueleto = "off";
let esqueletoStop = document.getElementById("esqueletoQuieto")
let botonSonido = new Audio ("./sound/boton.mp3")
let sonidoFondo = new Audio ("./sound/suavemente.mp3")

// Creamos una funcion llamada bailar que cambiara los valores de la varaiable esqueleto
function bailar(){
    if (esqueleto == "off") {
        esqueleto = "on"
        esqueletoStop.classList.add("on");
        esqueletoStop.addEventListener('click', ()=>{
            botonSonido.play();
            sonidoFondo.play();
        })
        console.log("on")
    }else{
        esqueleto = "off"
        esqueletoStop.classList.remove("on");
        esqueletoStop.addEventListener('click', ()=>{
            sonidoFondo.pause();
        })
        console.log("off")
    }
}