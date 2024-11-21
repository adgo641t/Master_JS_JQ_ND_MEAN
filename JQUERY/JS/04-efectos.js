$(document).ready(function() {
    var caja = $('#caja');
    $('#animame').click(function() {
        caja.animate({
            marginLeft: '500px',
            fontsize:  '10px', 
            heigth:  '110px', 
        }, 'slow')
        .animate({
            borderRadius: '900px'
        },'slow')
        .animate({
            borderRadius: '0px',
            marginLeft:'0px'
        },'slow')
    })
})