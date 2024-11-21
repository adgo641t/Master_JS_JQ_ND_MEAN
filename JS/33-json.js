'use strict'

// - JSON Javascript Object Notation


// Acceder a una propiedad del object pelicula.titulo
var pelicula =  {
    titulo: 'Batman',
    year: 2017,
    pais: 'España'
};

var peliculas = [
    {titulo: 'La verdad duele',year: 2016, pais: 'francia'},
    pelicula
];

pelicula.titulo = "Cars";

//console.log(pelicula)
var caja_P = document.querySelector("#peliculas")
for (var index in peliculas) {
    var p = document.createElement("p");
    p.append(peliculas[index].titulo + " - "+ peliculas[index].year);
    caja_P.append(p);
}