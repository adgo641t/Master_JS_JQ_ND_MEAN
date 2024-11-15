'use strict'

// - BOM Browser Object Model

//*********Evento Load*************** */
window.addEventListener('load', () => {


    function getBom() {
        console.log(window.innerHeight);
        console.log(screen.width);
        console.log(window.location);
    }
    
    
    // - redireccionar 
    function redirect(url) {
        window.location.href = url;
    }
    
    
    // - Abrir ventana
    function abrirVentana(url) {
        window.open(url,"", "width=400,heigth=300");
    }
    
    getBom();
    
    // - Eventos BOM **********************//
    
    // - Eventos de raton
    
    var boton = document.querySelector("#btn");
    
    function changeColor() {
        var bg = boton.style.background;
        if(bg == "green") {
            boton.style.background = "red"
        } else {
            boton.style.background = "green"
        }
    }
    
    boton.addEventListener("click",changeColor);
    
    // - Mouse over
    boton.addEventListener('mouseover', changeColor);
    
    // - Mouse out
    boton.addEventListener('mouseout', changeColor);
    
    /*********Eventos de teclado************ */
    
    // - Focus
    var input = document.querySelector("#nombre");
    input.addEventListener('focus', () => {
        console.log("Focus")
    });
    
    // - Blur
    input.addEventListener('blur', () => {
        console.log("blur fuera")
    });
    
    // - Keydown
    input.addEventListener('keydown', () => {
        console.log("Pulsando tecla: ", String.fromCharCode(event.KeyCode))
    });
    
    // - Krey Press
    input.addEventListener('keypress', () => {
        console.log("Pulsando tecla: ", String.fromCharCode(event.KeyCode))
    });
    
    // - keyUp 
    input.addEventListener('keyup', () => {
        console.log("Pulsando tecla: ", String.fromCharCode(event.KeyCode))
    });

    //*******Temporizadores****** */
    function intervalo() {
        var tiempo = setInterval(() => {
            var enc = document.querySelector("h1");
            if(enc.style.fontSize == "50px"){
                enc.style.fontSize = "20px";
            } else {
                enc.style.fontSize =" 50px"
    
            }
            
            console.log("Set interval ejecutado");
        }, 3000); //Cada mil es un segundo

        return tiempo
    }

    var tiempo = intervalo();

    // - SetTimeOut
    //var tiempo = setTimeout(() => {
    //     var enc = document.querySelector("h1");
    //     if(enc.style.fontSize == "50px"){
    //         enc.style.fontSize = "20px";
    //     } else {
    //         enc.style.fontSize =" 50px"

    //     }
        
    //     console.log("Set interval ejecutado");
    // }, 3000); //Cada mil es un segundo

    var stop = document.querySelector("#stop");
    var start = document.querySelector("#start");

    stop.addEventListener("click", () => {
        clearInterval(tiempo);
    });

    start.addEventListener("click", () => {
        intervalo();
    })



}); // - Final load