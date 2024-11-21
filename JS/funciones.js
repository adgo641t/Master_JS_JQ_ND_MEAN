'use strict'

// Funciones
function porconsola(x,y){
    console.log("Suma: "+ x+y)
    console.log("resta: "+ x-y)
    console.log("multiplicacion: "+ x*y)
    console.log("division: "+ x/y) 
}

function porPantalla(x,y){
    document.write("Suma: "+ x+y+"<br/>")
    document.write("resta: "+ x-y+"<br/>")
    document.write("multiplicacion: "+ x*y+"<br/>")
    document.write("division: "+ x/y+"<br/>")
}

function calculadora(x,y,mostrar = false) {
    if(mostrar == false) {
        porconsola(x,y);        
    }else {
        porPantalla(x,y);
    }
    
    //return "Soy una calculador";
}


// Llamar a la funcion
calculadora(15,53,true)
calculadora(2,1,false)
calculadora(2,0,true)


// for(var i = 0; i < 10; i++){
//     calculadora(i,8)
// } 
