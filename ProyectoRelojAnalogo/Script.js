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