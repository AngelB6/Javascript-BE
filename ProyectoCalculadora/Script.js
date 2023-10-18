const pantalla = document.querySelector(".pantalla")
const botones = document.querySelectorAll(".boton")

botones.forEach(boton =>{
    boton.addEventListener("click", () => {
        const botonOp = boton.textContent;
        // Creamos una condicinal donde si el boton presionado sea igual al id borar deslice hasta la ultima posicion del arreglo y eliminela
        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "¡Error!"){
                pantalla.textContent = "0";
            }else{
                // El metodo slice parte el arreglo de uno en uno hacia la izquierda. Inicia en la posicion 0 hasta la -1 (Ultima posicion)
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }
        // Creamos una condicional que si la el id del boton presioando es = a "igual" evalue los datos que se ecuentran dentro del contenido de pantalla
        if (boton.id === "igual"){
            try{
                pantalla.textContent = eval(pantalla.textContent)
            // En caso de encontrar un error diferente a sintaxis salte al catch y muestre por pantalla error
            }catch{
                pantalla.textContent = "¡Error!"
            }
            return;
        }
        // Creamos una condicional que si el contenido de la pantalla es igual a "0" o a "error" cambielo por el nuevo valor presionado
        if (pantalla.textContent === "0" || pantalla.textContent === "¡Error!"){
            pantalla.textContent = botonOp
        // Si la ultima posicion del arreglo es igual a "/" y el boton proximo boton presionado es igual a "/" no añada el contenido a la pantalla
        }else if (pantalla.textContent.slice(-1) === '/' && botonOp === '/'){
            return;
        // Por ultimo sino es ninguna de la opciones anteriores vaya agregando a la pantalla el boton presionado
        }else{
            pantalla.textContent += botonOp
        }
        // Creamos una condicional que si el boton presionado es igual a "limpiar" cambie el contenido en pantalla por un "0"
        if (boton.id === "limpiar"){
            pantalla.textContent ="0"
            return;
        }
    })
})