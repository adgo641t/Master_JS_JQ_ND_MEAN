'use strict'

var fecha = new Date();

var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();

var textoHora =`
    El año es: ${year}
    El mes es: ${mes}
    El dia es: ${dia}
`

console.log(textoHora);