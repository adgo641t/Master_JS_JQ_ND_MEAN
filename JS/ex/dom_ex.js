'use strict'

/**
 * Crear formulario pidiendo nombre apeliidos y edad
 * Boton con submit
 */
window.addEventListener("load", () => {
   var form =  document.querySelector("#form");
    form.addEventListener('submit', comprobar)
})

function comprobar() {
    var nombre = document.getElementById("name").value; 
    var apellidos = document.getElementById("ape").value;
    var edad = parseInt(document.getElementById("age").value);

    // - Validaciones
    if(nombre.trim() == null || nombre.length == 0) {
        alert("El nombre no es valido");
        return false;
    }

    if(apellidos.trim() == null || apellidos.length == 0) {
        alert("El apellidos no es valido");
        return false;
    }

    if(edad == null || edad <= 0 || isNaN(edad)) {
        alert("La edad no es valido");
        return false;
    }


    var div = document.getElementById("show");
    var text = `
        Tu Nombre es: ${nombre} 
        <br>
        Tu Apellido es: ${apellidos}
        <br>
        Y tu edad es: ${edad}
    `
    div.append(text);

}