
    window.addEventListener('scroll', function()  {

        let elementup = document.querySelectorAll('.card-fade-up');
        for(let i=0; i < elementup.length;i++){
            let altura;
            if(elementup[i] == elementup[0]){
                 altura = window.innerHeight/4;
            }else{
                 altura = window.innerHeight/1.1;
            }
            
            let distancia = elementup[i].getBoundingClientRect().top;

            if(elementup[i] == elementup[0]){
                elementup[i].classList.add('transform_rigth');
            }else{
                elementup[i].classList.add('transform_up');
            }
            
            if(distancia <= altura) {
                elementup[i].classList.add('aparece');
            }else{
                elementup[i].classList.remove('aparece');
            }
        }
           
    });


