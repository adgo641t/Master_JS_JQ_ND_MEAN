$(document).ready(function() {

    //mover por pantalla
    $('.elemento').draggable();

    //Redimensionar
    $('.elemento').resizable();

    //Selectable
    //$(".lista").selectable();

    // Sorteable
    $(".lista").sortable({
        update: function(event, ui){

        }
    });

    //Dropable 
    $("#elemento_movido").draggable();
    $("#area").droppable({
        drop: function() {
            console.log("lo has soltado")
        } 
    });


    //Efectos
    $("#mostrar").click(function(){
        $("#caja_efectos").toggle("fade");
    });

    //Tooltip
    $(document).tooltip();

    //Dialog
    $("#lanzar_popup").click(function(){
        $("#popup").dialog();

    })

    //Datepicker
    $("#calendario").datepicker();

    //Tabs
    $("#pestana").tabs();


});