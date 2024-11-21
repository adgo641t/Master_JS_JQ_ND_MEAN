'use strict'

// Parametros rest y Spread

//REST
function ListaFrutas(fruta1,fruta2, ...todas_frutas){
    console.log("Fruta 1: "+fruta1)
    console.log("Fruta 2: "+fruta2)
    console.log(todas_frutas)
}

ListaFrutas("Naranja","Manzana","melon","coco");

var frutas = ["Naranja","Manzana"]
//Pilla los valores primeros con los tres puntos SPREAD
ListaFrutas(...frutas,"melon","coco");