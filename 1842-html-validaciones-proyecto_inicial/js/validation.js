const inputNac = document.querySelector('#birth')

inputNac.addEventListener('blur', (evento) => {
    validationBirth(evento.target.value)
})

function validationBirth(input) {
    const fecha = new Date(input)
    let msj = ""
    if (!adult(fecha)) {
        msj = "debes tener al menos 18 años de edad"
    }
    input.setCustomValidty(msj)
}

const adult = (fecha) => {
    const fechaAct = new Date()
    const dif = new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(), fecha.getUTCDate())
    return dif <= fechaAct
}