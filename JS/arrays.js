'use strict'

// - Arrays
var nombres = ["Adrian","dsad","dsada","vavsc"];

// - Array 
var lenguajes = new Array("PHP","JS","JAVA");

//console.log(nombres[0]);

/******Longitud******* */
console.log(nombres.length);

// var elemento = parseInt(prompt("Que elemnto del array queres", 0));

// if (elemento >= nombres.length) {
//     alert("introduce un numero menor de "+nombres.length)
// } else {
//     alert("Usuario: "+nombres[elemento]);
// }

// - Recorrer array

for (let i = 0; i < nombres.length; i++) {
    //console.log(nombres[i]);    
}

// - for, ForEach

lenguajes.forEach((elemento, index, data) => {
    //document.write(elemento+" : "+index);    
})

// - Arrays multidimiensionales

// Son arrays dentro de otro arrays

var categorias = ["Accion", "Terror", "Comedia"];

var peliculas = ["Cars", "Srek","Gran torino"];

var cine = [categorias, peliculas];

// Acceder a las categorias
//console.log(cine[0][1]);
//console.log(cine[1][2]);

// - Operaciones de array

// Añadir al array
peliculas.push("batman");

var elemento =  "";
 
// do {
//     elemento = prompt("introduce Pelicula");
//     peliculas.push(elemento);
// }
// while(elemento != "ACABAR")

// - ELiminar

var indice = peliculas.indexOf("Gran torino");

if(indice > -1) {
    peliculas.splice(indice, 1)
}

// - Convertir array a texto
var array_string = peliculas.join()

// - Texto a array
var cadena = "texto1, texto2";
var cadena_array = cadena.split(", ");

// - Ordenar array
peliculas.sort();

// - darle la vuelta
peliculas.reverse();  

// - For in

for (let len in lenguajes) {
    //console.log(lenguajes[len]);
}

// - Busqueda en arrays
var busqueda =  lenguajes.find( lenguaje => lenguaje == "PHP")

var busqueda =  lenguajes.findIndex( lenguaje => lenguaje == "PHP")


// - Encontrar numeros
var precios = [10,20,30,4,];

var busqueda =  precios.some( precio => precios >= 80)


console.log(busqueda);