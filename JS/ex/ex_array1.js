'use strict'

/**
 * 1. Pide seis numeros por pantalla y los añade a un array
 * 2. Mostrar el array entero en la pagina y consola
 * 3. Sacar el array ordenado y mostrarlo
 * 4. Invertir el orden y mostrarlo
 * 5. Mostrar cuantos elementos hay
 * 6. Busqueda de un valor por el usuario y si existe y posicion.
 */

var contador = 0;
var numero;
var numeros = new Array;

do{
    numero = parseInt(prompt("dame seis numeros"));
    numeros.push(numero);
    contador++;
}
while(contador < 6) 

document.write(numeros);

console.log(numeros);

console.log(numeros.sort());

console.log(numeros.reverse());

console.log(numeros.length);

var busqueda = parseInt(prompt("Que numero buscas"));

var buscado = numeros.findIndex(numero => numero == busqueda);

if(buscado && buscado !=  -1 ) {
    console.log("si existe y esta es la posicion: "+ buscado)
} else {
    console.log("no existe")
}



