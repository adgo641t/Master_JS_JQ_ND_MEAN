'use strict'
/***
 * ex 1
 * pide dos 2 numeros y si son menores mayores o iguales
 * plus si los los numeros nos ceros, negativos o letras error;
 */

var num1 = parseInt(prompt('Numero 1'));
var num2 = parseInt(prompt('Numero 2'));

while(num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)){
    num1 = parseInt(prompt('Introduce bien el numero, no puede ser 0 o letras'));
    num2 = parseInt(prompt('Introduce bien el numero, no puede ser 0 o letras'));
}
if(num1 < num2)
{
    console.log('num1 es menor que num2')
} else if (num1 > num2){
    console.log('num1 es mayor que num2')
} else if (num2 < num1) {
    console.log('num2 es menor que num1')
} else if (num1 === num2) {
    console.log('Son iguales')
} else {

}