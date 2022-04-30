const maquina = document.getElementById('desc')

const maquinaEscribir = (text = '', etiqueta = '') => {
    let arrayCaracteres = text.split('')
    etiqueta.innerHTML = ' '
    let i = 0
    let j = text.length
    let escribir = setInterval(function () {

        if (i === arrayCaracteres.length) {
            //retroceso
           /* etiqueta.innerHTML = text.substring(0, j)
            j--
            if (j === 0) {
                etiqueta.innerHTML = ' '
                i = 0
                j = text.length
                
            }*/
        } else {
            //derecho
            etiqueta.innerHTML += arrayCaracteres[i]
            i++
        }
    },180)
}
maquinaEscribir(maquina.innerHTML, maquina)