'use strict'

// Funciones Anonimas y Callbacks
//Es una funcion que no tiene nombre


//Funcion Anonima
var pelicula = function (nombre){
    return "La pelicula es: "+nombre;
}

//Funcion Callback
function sumame(num1, num2, sumaYmuestra,sumaPorDos) {
    var sumar = num1 + num2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

/**
 * Invoca la funcion que dentro 
 * de los parametros tienen 
 * dos funciones, sumaymuetras
 * y sumapordos, y le pasa como 
 * dato la suma y hace lo que tengan que hacer
 */
sumame(5,7,(dato) => {
    console.log("La suma es: "+dato);
}, (dato) => {
    console.log("La suma por dos es: "+(dato*2));
});


