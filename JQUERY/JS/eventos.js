// - Eventos

$(document).ready(function() {
    var caja = $('.caja');

    // caja.mouseover(function() {
    //     $(this).css("background","red");
    // })
    // caja.mouseout(function () {
    //     $(this).css("background","green")
    // })

    // - Hover

    // function cambiarojo() {
    //     $(this).css("background","red")
    // }

    //  function cambiaverde() {
    //     $(this).css("background","green")
    // }

    // caja.hover(cambiarojo, cambiaverde);

    // - Click 

    // caja.click(function() {
    //     $(this).css("background","black")
    //             .css("color","white");
    // })
    // caja.dblclick(function() {
    //     $(this).css("background","purple")
    //             .css("color","red");
    // })

    // - Blur focus
    var nombre = $("#name");
    var datos = $("#datos");

    nombre.focus(function() {
        $(this).css("border","2px solid green")
    })

    nombre.blur(function() {
        datos.text($(this).val()).show();
    });

    // - mousedows
    datos.mousedown(function() {
        $(this).css("border-color", "#ccc")
    })

    datos.mouseup(function() {
        $(this).css("border-color", "#red")
    })

    // - Mouse move
    $(document).mousemove(function() {
        $('body').css("cursor","none");
        var sigueme = $("#sigueme");
        sigueme.css("left",event.clientX)
                .css("top",event.clientY);


    })

})