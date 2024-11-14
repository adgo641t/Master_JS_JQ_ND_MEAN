'use strict'

/**
 * utilizar un bucle mostrar la media y la suma de un prompt
 */

var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt("Introduce numeros hasta que metas un negativo", 0));
    if(isNaN(numero)) {
        numero = 0;
    }else if (numero >= 0) {
        suma = suma + numero;

        contador++;
    }
    console.log(suma,contador)
} while (numero >= 0 )

alert("La suma de todo es:  "+suma);
alert("La media es de: "+ (suma/contador))