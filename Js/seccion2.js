
window.addEventListener('scroll', function () {

    let elementup = document.querySelector('.card-fade-up');

    let altura = window.innerHeight/1.2;
    let distancia = elementup.getBoundingClientRect().top;
    elementup.classList.add('transform_up');

    if (distancia <= altura) {
        elementup.classList.add('aparece');
    } else {
        elementup.classList.remove('aparece');
    }


});


