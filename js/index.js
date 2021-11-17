
//1) Ver si le puedo dar efecto a la imagen de entrada
//2) Ver de darle algún efecto copado a las imagenes de spinning y funcional
//Html related: poner imagenes en body y en header/footer y todo eso

$(".funcional").mouseover(function() {
    $(".funcional").animate({
        height: `120%`,
        width: `120%`,
        }, 2000);
    }).mouseout(function() {
        $(".functional").animate({
            height: `100%`,
            width: `100%`,
        }, 1000);
    });
