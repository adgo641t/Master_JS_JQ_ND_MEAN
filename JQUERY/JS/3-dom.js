$(document).ready(function() {
    reloadLinks();

    $("#addbtn").click(function () {
        var enlace_nuevo = $("#add").val();
        $("#menu").append('<li><a href="https://'+enlace_nuevo+'.com"><a/><li/>');
        reloadLinks();
    })

});

function reloadLinks() {
    $('a').each(function(i) {
        var that = $(this);
        var enl = that.attr("href");
        that.attr('target','_blank')
        that.text(enl); 
    });
}