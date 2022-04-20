$(document).ready(function(){
    let desplegado = false;
    $('.seccion2').hide();
    $('#boton-desplegar').on('click',function(){
            $('.seccion2').slideToggle('slow','linear');
            if(desplegado){
                $(this).text("Hoja de ruta"); 
                desplegado = false;
            }else{
                $(this).text("Cerrar hoja de ruta");
                desplegado = true;
            }
    });
    
});

