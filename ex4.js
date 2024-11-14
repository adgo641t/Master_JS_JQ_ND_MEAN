'use strict'

/**
 * Mostrar numeros impares entro dos numeros por prompt
 */

var num1 = parseInt(prompt("numero 1:", 0));
var num2 = parseInt(prompt("numero 2:", 0));

while(num1 < num2) {
    num1++;

    if(num1%2!=0) {
        console.log("El "+num1+" es impar")
    }
}