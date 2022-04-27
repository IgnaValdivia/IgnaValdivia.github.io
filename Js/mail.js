const $form = document.querySelector('#formulario')
const $botonMail = document.querySelector('#mail')

$form.addEventListener('submit',handleSubmit)

function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)

    
    $botonMail.setAttribute('href',
    `mailto:igna.a.valdivia@gmail.com?subject= 
    ${form.get('name')} - ${form.get('correo')}
    &body=${form.get('mensaje')}`)

    $botonMail.click()
}