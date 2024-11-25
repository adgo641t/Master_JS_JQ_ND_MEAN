$(document).ready(function() {

    if(window.location.href.indexOf('index') > -1){
    //Slider
    $(function(){
        $('.bxslider').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 1200
        });
      });
    }

      //Post

 if(window.location.href.indexOf('index') > -1){
      var post = [
        {
            title: 'Prueba de titulo',
            date: 'publicado el'+moment().format("DDDD")+" de "+moment().format("MMMM")+ " del año "+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi expedita ratione esse recusandae facilis, molestiae minus ipsam autem doloribus quidem nemo aut totam repudiandae incidunt vitae labore reiciendis! Aut, cum.'
        },  {
            title: 'Prueba de titulo 2',
            date: 'publicado el'+moment().format("DDDD")+" de "+moment().format("MMMM")+ " del año "+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi expedita ratione esse recusandae facilis, molestiae minus ipsam autem doloribus quidem nemo aut totam repudiandae incidunt vitae labore reiciendis! Aut, cum.'
        },  {
            title: 'Prueba de titulo 3',
            date: 'publicado el'+moment().format("DDDD")+" de "+moment().format("MMMM")+ " del año "+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi expedita ratione esse recusandae facilis, molestiae minus ipsam autem doloribus quidem nemo aut totam repudiandae incidunt vitae labore reiciendis! Aut, cum.'
        },  {
            title: 'Prueba de titulo 4',
            date: 'publicado el'+moment().format("DDDD")+" de "+moment().format("MMMM")+ " del año "+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi expedita ratione esse recusandae facilis, molestiae minus ipsam autem doloribus quidem nemo aut totam repudiandae incidunt vitae labore reiciendis! Aut, cum.'
        },
    ]

    post.forEach((item,index) => {
        var post =`
                 <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="button-more">leer mas</a>
                </article>
        `;

        $("#posts").append(post);

    });
}

    // Selector de temas
    var theme = $("#theme");

    $("#to-green").click(function(){
        theme.attr('href', 'css/green.css')
    })

    $("#to-red").click(function(){
        theme.attr('href', 'css/red.css')
    })

    $("#to-blue").click(function(){
        theme.attr('href', 'css/blue.css')
    })

    // Scroll automatico

    $(".subir").click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    })

    //Login falso

    $("#login form").submit(function(){
        var name = $("#name").val();
        localStorage.setItem("name",name); 
    })


    var form_name = localStorage.getItem("name");
    var about_p = $("#about p");
    
    //Comprobar si existe
    if(form_name){
        $("#about p").html("Bienvenido: "+form_name);
        about_p.append("<br><a href='#' id='logout'>Cerrar Sesion</a>");

        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload()
        })
    }

    //Acordeon
    if(window.location.href.indexOf('about') > -1)
    {
        $("#acordeon").accordion();
    }

    //reloj
    if(window.location.href.indexOf('reloj') > -1){
        setInterval(function(){
            var reloj = moment().format("h:mm:ss");
            $("#reloj").html(reloj)
    
        },1000)
    }

    //Contacto
    if(window.location.href.indexOf('contacto') > -1){
        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });
        
        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollTopOnError: true
        })
    }
}) 