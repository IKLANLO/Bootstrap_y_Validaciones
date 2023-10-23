const nameValue = document.querySelector('#userName')
const mailValue = document.querySelector('#userMail')
const passValue1 = document.querySelector('#userPass1')
const passValue2 = document.querySelector('#userPass2')
const btnSubmit = document.querySelector('#submit')
const userPanel = document.querySelector('#profile-tab')
const alert = document.querySelector('#allAlert')
let alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const formValue = document.querySelector('#formData')
let userCardsValues = document.querySelector('#userCardContainer')

nameValue.focus()

//la alerta se dispara si no cumplimos las condiciones
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
        ].join('')
        
        alertPlaceholder.append(wrapper)
    }

//establecemos el mensaje personalizado para la alarma
function alertFunction(alertMessage){
    appendAlert(alertMessage, 'danger')
}

//eliminamos la alarma a los 3 segundos y creamos de nuevo el div que la contiene
function removeAlarm(){
    setTimeout(() => {
        alertPlaceholder.remove()
        const addAlert = document.createElement('div')
        document.body.appendChild(addAlert) //añadimos al DOM el div de alerta
        formValue.appendChild(addAlert) //lo incluímos en el form para que mantenga sus características
        addAlert.setAttribute('class', 'mt-4')
        addAlert.setAttribute('id', 'liveAlertPlaceholder')
        alertPlaceholder = document.getElementById('liveAlertPlaceholder')
     }, 3000)
}

function correctValues(){
    // evalúa que todos los campos estén rellenados
    if (nameValue.value === '' || mailValue.value === '' || passValue1.value === '' || passValue2.value === ''){
        appendAlert('Rellena todos los campos', 'danger')
        removeAlarm()
        return false
    }

    // evalúa que se introduzca un email
    const mailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (!mailRegExp.test(mailValue.value)) {
        appendAlert('introduce un email válido', 'danger')
        mailValue.focus() //enfocamos al input 'Correo'
        removeAlarm()
        return false
    }

    // validar que las dos contraseñas sean iguales
    if(passValue1.value !== passValue2.value) {
        appendAlert('las dos contraseñas deben ser iguales', 'danger')
        passValue1.focus()
        removeAlarm()
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
        appendAlert('La contraseña debe incluir una letra minúscula, una mayúscula y un número\n, tener una longitud de entre 6 y 13 caracteres, y no tener espacios', 'danger')
        passValue1.focus()
        removeAlarm()
        return false
    }
    return true
}

/* si las contraseñas cumplen las condiciones guardamos en un array que guarde todos 
los usuarios como objetos, si no devolvemos falso  */
let arrUser = [], content = ''
function arrayValues(){
    if(!repeatedValue()){
        arrUser.push({
            'nameValue': nameValue.value,
            'mailValue': mailValue.value,
            'passValue1': passValue1.value,
            'passValue2': passValue2.value,
        })
        return true
    }
    return false
}

//aseguramos que el nombre y el email introducidos no estén ya utilizados por otro usuario, y enviamos alerta de ello
function repeatedValue(){
    const localStorageData = JSON.parse(localStorage.getItem('values'))
    if (localStorageData === null){
        return false
    }
    for (let i = 0; i < localStorageData.length; i++){
        if (localStorageData[i].nameValue === nameValue.value && localStorageData[i].mailValue === mailValue.value){
            appendAlert('El nombre y correo introducidos ya han sido utilizados', 'danger')
            nameValue.focus()
            removeAlarm()
            return true

        } else if (localStorageData[i].mailValue === mailValue.value){
            appendAlert('El correo introducido ya ha sido utilizado', 'danger')
            mailValue.focus()
            removeAlarm()
            return true

        } else if (localStorageData[i].nameValue === nameValue.value) {
            appendAlert('El nombre introducido ya ha sido utilizado', 'danger')
            nameValue.focus()
            removeAlarm()
            return true
        }
    }
    return false
}

//añade en el DOM tarjetas con cada objeto usuario de localStorage
function userData() {
    let data = JSON.parse(localStorage.getItem('values'))
    data.forEach(el => {
        content += `<div class="card m-4" style="width: 18rem">
        <div class="card-header"><h5>${el.nameValue}</h5></div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${el.mailValue}</li>
        </ul>
      </div>`
    });
    userCardsValues.innerHTML = content;
    content = '' // borramos content para que se inicie de nuevo la cadena
    userPanel.click()
}

function saveLocalStorage(e) {
    e.preventDefault
    /* si las contraseñas cumplen las condiciones guardamos los datos en LocalStorage,
    y redirigimos a la vista de 'Usuarios' */
    if (correctValues() && arrayValues()) {
        localStorage.setItem('values', JSON.stringify(arrUser))
        userPanel.focus()
    }
}

btnSubmit.addEventListener('click', saveLocalStorage)
userPanel.addEventListener('focus',userData)