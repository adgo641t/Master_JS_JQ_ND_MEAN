'use strict'

/**
 * Calculadora
 * 
 * 1.Pide dos numeros por pantallas
 * 2. nos metemos uno mal lo repite
 * 3. En el cuerpo de la pagina, en una alerta y por consola
 * el resultado de sumar, restar, multiplicar y dividir 
 * 
 */

var num1 = parseFloat(prompt("Numero:", 0))
var num2 = parseFloat(prompt("Numero:", 0))

while(num1 < 0|| num2 < 0 || isNaN(num1) || isNaN(num2)) {
     num1 = parseFloat(prompt("Numero:", 0))
     num2 = parseFloat(prompt("Numero:", 0))
}

var suma = num1 + num2;
var resta = num1 - num2;
var multiplicacion = num1 * num2;
var division = num1 / num2;

document.write("la suma :"+suma +"<br/>");
document.write("la resta :"+resta +"<br/>");
document.write("la multiplicacion :"+multiplicacion+"<br/>");
document.write("la division :"+division+"<br/>");

console.log("la suma :"+suma);
console.log("la resta :"+resta);
console.log("la multiplicacion :"+multiplicacion);
console.log("la division :"+division);


alert("la suma :"+suma);
alert("la resta :"+resta);
alert("la multiplicacion :"+multiplicacion);
alert("la division :"+division);
