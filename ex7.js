'use strict'

/**
 * Tabla de multiplicar de un numero 
 * por prompt
 */

var num1 = parseInt(prompt("Numero: ", 0))

for(var i = 1; i <= 10; i++) {
    var operacion = i*num1;
    //console.log(i+" x "+num1+": "+operacion)
}

/**Todas las tablas de multiplicar */


for(var c = 1; c <= 10; c++) {  
    for(var i = 1; i <= 10; i++) {
        var operacion = i*c;
        console.log(i+" x "+c+": "+operacion)
    }
}
