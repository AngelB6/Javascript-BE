// Definimos una constante con la palabra reservada deg que nos ayuda a definir unos grados (6)
const deg = 6;
// Creamos unas constantes en las cuales seleccionamos las clases del div
const horas = document.querySelector(".hora");
const minuto = document.querySelector(".minuto");
const segundo = document.querySelector(".segundo");
// Abrimos el metodo setInterval 
setInterval(()=>{
    // Dentro definimos una varible que tendra el metodo date
    let tiempo = new Date();
    // Definimos 3 variables con las cuales obtendremos la hora, minutos y segundos. La hora la multiplicaremos por 30 grados. 
    // Los minutos y segundos los multiplicamos por deg (6)
    let hr = tiempo.getHours()*30;
    let min = tiempo.getMinutes()*deg
    let seg = tiempo.getSeconds()*deg
    // Haremos que roten cada una de las constantes 
    horas.style.transform = `rotate(${(hr)+(min/12)}deg)`;
    minuto.style.transform = `rotate(${(min)}deg)`;
    segundo.style.transform = `rotate(${(seg)}deg)`;
})

// Reloj digital
function calcularHora(){
    // Creamos una variable de tiempo Date que nos permitira extraer las horas, minutos y segundos localmente
    let tiempo = new Date();
    // Obtenemos en cada una de las variables la hora, minutos y segundos
    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();
    let reloj
    // Definimos que si cada una de las variables del reloj es inferior a 10 agregre un "0" al comienzo
    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundo = segundo < 10 ? "0" + segundo : segundo;
    // Definimos una variable que tiene la union de cada una de las variables anteriores para mostrar el reloj
    if (hora >= 12){
        reloj = hora-12 + ":" + minuto + ":" + segundo + " pm";
    }else{
        reloj = hora + ":" + minuto + ":" + segundo + " am";
    }
    // Definimos una variable que seleccinara la clase del HTML y almacenara el reloj
    let digitalReloj = document.querySelector(".digital");
    // Igualamos el valor de reloj con el valor de digitalReloj y lo enviamos al HTML con la funcion innerHTML
    digitalReloj.innerHTML = reloj;
}
// Llamamos a la funcion y con el metodo setInterval le establecemos que se actualice cada 1000ms
setInterval(calcularHora, 1000)