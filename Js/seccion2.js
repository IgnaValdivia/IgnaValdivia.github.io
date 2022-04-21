
    window.addEventListener('scroll', function()  {

        let element = document.querySelectorAll('.card-fade');
        for(let i=0; i < element.length;i++){

            let altura = window.innerHeight/1.3;
        
            let distancia = element[i].getBoundingClientRect().top;
            
            element[i].classList.add('transform_left');
    
            if(distancia <= altura) {
                element[i].classList.add('aparece');
            }else{
                element[i].classList.remove('aparece');
            }
        }
        
        
    });


