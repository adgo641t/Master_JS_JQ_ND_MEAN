'use strict'

/**
 * Hacer un programam que muestre todo los numeros entre dos numeros
 * introducidos por el usuario
 */

var numero1 = parseInt(prompt("Numero1", 0));
var numero2 = parseInt(prompt("Numero2", 0));

for(var i = numero1; i < numero2; i++) {
    console.log("todos los numeros hasta "+numero2+": "+i)
}