function calcularHora(){
    // Creamos una variable de tiempo Date que nos permitira extraer las horas, minutos y segundos localmente
    let tiempo = new Date();
    // Obtenemos en cada una de las variables la hora, minutos y segundos
    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();
    // Definimos que si cada una de las variables del reloj es inferior a 10 agregre un "0" al comienzo
    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundo = segundo < 10 ? "0" + segundo : segundo;
    // Definimos una variable que tiene la union de cada una de las variables anteriores para mostrar el reloj
    let reloj = hora + ":" + minuto + ":" + segundo;
    // Definimos una variable que seleccinara la clase del HTML y almacenara el reloj
    let digitalReloj = document.querySelector(".reloj");
    // Igualamos el valor de reloj con el valor de digitalReloj y lo enviamos al HTML con la funcion innerHTML
    digitalReloj.innerHTML = reloj;
}
// Llamamos a la funcion y con el metodo setInterval le establecemos que se actualice cada 1000ms
setInterval(calcularHora, 1000)