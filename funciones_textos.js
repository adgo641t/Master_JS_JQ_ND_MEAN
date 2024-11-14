'use strict'

// Metodos para transformar texto

var numero = 44;
var texto = "Hola";
var texto2 = "Buen curso";

// Transformar a string
var dato = numero.toString();
    //Mayusculas
    dato = texto.toUpperCase;
    //minusculas
    dato.toLowerCase;

//console.log(typeof dato);


// Calcular Longitud
var nombre = "Hola";
var nombre = ["Hola","Adidos"]

//console.log(nombre.length)


// Concatenar
//var textoTotal = texto+" "+texto2;
var textoTotal = texto.concat(" "+texto2);
//console.log(textoTotal)
/****************************************** */
// Buscar 

var busqueda = texto.indexOf("Curso");

// Sacar ultima coincidencia
var busqueda = texto.lastIndexOf("Hola");

// Con metodo search
var busqueda = texto.search("Hola");

// Con metodo match, metodo global
var busqueda = texto.match(/Hola/g);

//Con CharAt
var busqueda =texto.charAt(1);

//Start with, busca al inicio 
var busqueda = texto.startsWith("Hola")

//Ends with, busca al final
var busqueda = texto.startsWith("Hola")

//include, buscar si existe en la cadena
var busqueda = texto.includes("Hola")
//console.log(busqueda);

/*********************************************** */

/*******Reemplazar****** */

// - Replace Cambia el texto por otro
var busqueda = texto.replace("Hola","Adios")

// - Slice, corta a partir del caracter especificado
var busqueda = texto.slice(1,6)

// - Split, convertirlo en array
var busqueda = texto.split(" ");

// - Trim, quitar espacios por delante y  detras
var busqueda = texto.trim("");

/********Plantillas************************** */

var nombre = prompt("Tu nombre");
var apellidos = prompt("Tus apellidos");

//var texto = "Mi nombre es: "+ nombre + " y mis apellidos son: "+apellidos

// - Multilinea
var texto = `
    <h1>Hola</h1>
    <h3>Mi nombre es ${nombre}</h3>
    <h3>Mi apellido es ${apellidos}</h3>
`;
document.write(texto);



