const nameValue = document.querySelector('#userName')
const mailValue = document.querySelector('#userMail')
const passValue1 = document.querySelector('#userPass1')
const passValue2 = document.querySelector('#userPass2')
const btnSubmit = document.querySelector('#submit')
const userPanel = document.querySelector('#profile-tab')

function correctValues(){
    // evalúa que todos los campos estén rellenados
    if (nameValue.value === '' || mailValue.value === '' || passValue1.value === '' || passValue2.value === ''){
        console.log('Rellena todos los campos')
        return false
    }

    // evalúa que se introduzca un email
    const mailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (!mailRegExp.test(mailValue.value)) {
        console.log('introduce un email válido')
        return false
    }

    // validar que las dos contraseñas sean iguales
    if(passValue1.value !== passValue2.value) {
        console.log('las dos contraseñas deben ser iguales')
        return false
    }

    /* validar si la contraseña cumple las siguientes condiciones:
        - se incluya al menos una letra minúscula, una mayúscula y un número
        - tenga una longitud de entre 6 y 13 caracteres
        - no tenga espacios
        Por ejemplo 'Aa1sss'
    */
    const passRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{4,8}$/
    if (!passRegExp.test(passValue1.value)){
        console.log(`La contraseña debe cumplir las siguientes condiciones:
        - se incluya al menos una letra minúscula, una mayúscula y un número
        - tenga una longitud de entre 6 y 13 caracteres
        - no tenga espacios`)
        return false
    }

    // si todo lo anterior es correcto, retornamos true
    return true
}

/* si las contraseñas cumplen las condiciones guardamos en un array que guarde todos 
los usuarios como objetos */
let arrUser = []
function arrayValues(){
    arrUser.push({
        'nameValue': nameValue.value,
        'mailValue': mailValue.value,
        'passValue1': passValue1.value,
        'passValue2': passValue2.value
    })
}

function saveLocalStorage(e) {
    e.preventDefault
    /* si las contraseñas cumplen las condiciones guardamos los datos en LocalStorage,
    y redirigimos a la vista de 'Usuarios' */
    if (correctValues()) {
        arrayValues()
        localStorage.setItem('nameValue', JSON.stringify(nameValue.value))
        localStorage.setItem('mailValue', JSON.stringify(mailValue.value))
        localStorage.setItem('passValue1', JSON.stringify(passValue1.value))
        localStorage.setItem('passValue2', JSON.stringify(passValue2.value))
        userPanel.click()
    }
}

btnSubmit.addEventListener('click', saveLocalStorage)
