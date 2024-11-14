'use strict'

/**
 * Mayor >
 * menor <
 * mayor o igual >=
 * menor o igual <=
 * igual ==
 * distinto != 
 * 
 */

/**
 * Operadores logicos
 * and   = &&
 * or    = ||
 * negar = !
 */

var year = 2021

//Negar
if (year != 2028){}

//menor y 
if (year < 2028 && year != 2030){}

//or
if (year == 2028 || year == 2021){}

//Switch--////////////////////////////////////////////////

var edad = 40;
var imprime = ""

switch (edad){
    case 18:
        imprime = "Acabas de cumplir la mayoria"
    break;

    case 25: 
        imprime = "Ya eres un adulto";
    break;
    
    case 40:
        imprime = "Crisis de los cuarenta";
    break;
    
    case 70: 
        imprime = "Eres un anciano";
    break;
    
    default:
        imprime = "Tu edad es neutra";
        break;
}

//console.log(imprime)
    
//Bucle------------------------------------------------//
//FOR
var num = 100;

for(var i = 0; i < num; i++){
    //console.log("Numero: "+i);

    //debugger
}

//WHILE

var year = 2018;

while(year <= 2051) {
    //ejecuta esto
    year++;
    //console.log("Estamos en el año: "+year)
}

//Do WHile
var years = 30;
do {
    //alert("Solo cuando sea diferente a 20");
    years--;
} while(years > 25)

//Alertas y popup de ingreso de datos

//alert("Alerta")
//alerta de confirmacion
var result = confirm("estas seguro?")
    if(result == true)
    {
        //alert("esta de acuerdo")
    } else {
        //alert("no esta de acuerdo")

    }
//ingreso de datos con alert
var result = prompt("Que edad tienes",18);
console.log(result)

