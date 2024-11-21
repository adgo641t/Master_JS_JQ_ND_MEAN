'use strict'

/**
 * decir si un numero es par o impar
 * 1. ventana prompt
 * 2. comprobar si es numero
 * 3.comprobar si es par o impar
 */

var num1 = parseInt(prompt("numero: ", 0));

 while (isNaN(num1)) {
    num1 = parseInt(prompt("numero: ", 0));
 }
 
 if(num1%2==0) {
    console.log("Es par")
} else {
    console.log("Es impar")
}