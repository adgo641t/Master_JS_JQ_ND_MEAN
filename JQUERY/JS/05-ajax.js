$(document).ready(function () {
     // - Load 

     //$('#datos').load('https://reqres.in/');

     // GET POST

     $.get("https://reqres.in/api/users",{ page: 1}, function (res) {
        res.data.forEach((element, index) => {
            $('#datos').append("<p>"+element.first_name+"<p/>");

        });
    });


    $("#form").submit(function (e) {
        e.preventDefault();
         var usuario = {
         "name": $('input[name="name"]').val(),
         "web":  $('input[name="web"]').val()
        };

        // $.post($(this).attr("action"), usuario, function (res) {
        //     console.log(res);
        // }).done(function() {
        //     alert("usuario creado");
        // });

        // - AJAX

        $.ajax({
            type: 'POST',
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function(){
                    console.log("Enviando usuario");
                },
            success: function(res){
                console.log(res);
            },
            error: function(){
                console.log("Error")
            },
            timout: 2000

        });

        return false
    })



  

})