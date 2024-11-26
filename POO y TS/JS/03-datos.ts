type alphanumeric = string | number;
// string

let cadena: alphanumeric = "Adrian";

cadena = 12;

console.log(cadena)

//Number 

let edad: number = 12;
console.log(edad);

//Boolean
let verdad: boolean = true;

//Any

let cualquiera: any;

//Arrays
var lenguajes: Array<string> = ['php','js'];

let years: number[] = [1,2,3,4,5,6,7,8,9];

// Let vs Var
var numero1 = 10;
var numero2 = 20;

if(numero1 == 10){
    let numero1 = 44;
    var numero2 = 55;
}