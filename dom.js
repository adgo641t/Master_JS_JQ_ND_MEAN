'use strict'


function cambiaColor(color) {
    caja.style.background = color;
}

// - DOM Document Object Model
//var caja = document.getElementById("micaja");

// - selecionar clase o id con query (# id) (. clase)
var caja = document.querySelector("#micaja");

// - Texto
caja.innerHTML = "TExto en caja";

// - estilo
caja.style.background ="red";

// - añadir clase
caja.className = "Hola"

console.log(caja)

// - Conseguir elementos por etiquetas
var todosDiv = document.getElementsByTagName('div');

// - Sacar contenido del div
var contenido = todosDiv[2].textContent;

//todosDiv.forEach((valor,indice) => {
var valor;
  for(valor in todosDiv) {
    if(typeof todosDiv[valor].textContent == "string"){
        var p = document.createElement("p");
        var text = document.createTextNode(todosDiv[valor].textContent);
        p.append(text);
        document.querySelector("#mi_section").prepend(p);
    }
}
//})

todosDiv[2].innerHTML = "2. editado";
//console.log(todosDiv);



// - Conseguir elementos por clase css

var divsrojo = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background = "yellow";

for (var div in divsrojo) {
    if(divsrojo[div].className ="rojo") {
        divsrojo[div].style.background = "red";
    }
    
}

// - Query
var idcalseRojo = document.querySelector(".rojo")
