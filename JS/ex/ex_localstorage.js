'use strict'

// Ex Localstorage

/**
 * Formulario añadir peliculas
 * 
 */

var form = document.querySelector("#form");

form.addEventListener('submit', () => {
    var peli = document.querySelector("#add").value;

    if(peli.length >= 1 ) {
        localStorage.setItem(peli, peli)
    }

    for (var i in localStorage) {
        if(typeof localStorage[i] == 'string') {
            var p = document.createElement("p");
            p.append(localStorage[i]);
            document.getElementById("show").append(p);
        }
        
    }
})

var formDelete = document.querySelector("#formBorrar");

formDelete.addEventListener('submit', () => {
    var peli = document.querySelector("#borrarP").value;

    if(peli.length >= 1 ) {
        localStorage.removeItem(peli, peli);
    }
    }
);