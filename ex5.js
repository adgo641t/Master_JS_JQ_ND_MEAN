'use strict'

/**
 * Todos los numeros divisores de un num
 * por un prompt
 */

var num1 = parseInt(prompt("numero 1:", 1))

for(var i = 0; i < num1; i++) {
    if(num1%i==0){
        console.log("Divisor: "+ i)
    }
    
}