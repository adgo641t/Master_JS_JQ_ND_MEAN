' use strict'

// - Localstorage


// - Comprobar si existe
if(typeof(Storage) !== 'undefined') {
    console.log("Tiene localstorage")
} else {
    console.log("Incompatible")
}

// - Guardar Datos 
localStorage.setItem("Titulo", "Curso de JS");


// - Recuperar item
localStorage.getItem("titulo");


// - Guardar objetos
var usuario = {
    nombre: 'adrian',
    email: 'adrian@hola.com'
};


localStorage.setItem("usuario", JSON.stringify(usuario));


// - Recuperar object
var user_js = JSON.parse(localStorage.getItem("usuario"));

// - Eliminar en especifico
localStorage.removeItem("usuario");

// - Eliminar todo
localStorage.clear();