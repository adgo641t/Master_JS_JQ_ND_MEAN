// - Selectores de ID

// $(document).ready(function() {

//     $("#rojo").css("background", "red").css("color", "white");
//     $("#amarillo").css("background","yellow").css("color","green");
//     $("#verde").css("background","green").css("color", "white");
// });


// - Selectores de clase

// $(document).ready(function() {
//     var mi_clase = $('.zebra');
//     mi_clase.css("border","5px dashed black")

//     $(".sin_borde").click(function() {
//         $(this).addClass('zebra');
//     })
// });



// - Seldectores de etiquetas


// $(document).ready(function() {
//     var parrafos = $('p');

//     parrafos.click(function() {
//         if($(this).hasClass("zebra")) {
//          $(this).removeClass("zebra");
//         }
//     });
   
// });


// - Selectores de atributos


//  $(document).ready(function() {
//     $('[title="google"]').css("background","#ccc");
//     $('[title="Facebook"]').css("background","red");
//  });

// - find y Parent


$(document).ready(function() {
    //$('p,a').addClass('margensuperior');
    $busqueda = $("#caja").parent().find('.resaltado');
 });