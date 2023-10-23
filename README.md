# Formulario Bootstrap

Formulario y panel de usuarios programado con Bootstrap

## Insignias

![Static Badge](https://img.shields.io/badge/Bootstrap-5.3.2-blue)
![Static Badge](https://img.shields.io/badge/Javascript-yellow)

## Referencias de color

| Color            | Hex                                                                  |
| ---------------- | -------------------------------------------------------------------- |
| Color primario   | ![#00000000](https://via.placeholder.com/10/0a192f?text=+) #00000000 |
| Color secundario | ![#21252908](https://via.placeholder.com/10/f8f8f8?text=+) #21252908 |

## Demo

https://github.com/IKLANLO/Bootstrap_y_Validaciones.git

## Capturas de pantalla

![App Screenshot](https://github.com/IKLANLO/Bootstrap_y_Validaciones/blob/main/screenshots/Captura%20formulario.JPG?raw=true)

![App Screenshot](https://github.com/IKLANLO/Bootstrap_y_Validaciones/blob/main/screenshots/Captura%20fichas%20usuario.JPG?raw=true)

## Uso

VISTA FORMULARIO

Tras acceder al formulario se solicitan al usuario un nombre de usuario, correo electrónico al que vincularlo, y contraseña por duplicado. Tras introducirlos se debe pulsar en el botón 'Enviar'.

Se validarán los datos internamente en base a los siguientes requerimientos:

- Todos los campos son obligatorios.
- El nombre y correo electrónico no deben estar previamente utilizados por otro usuario.
- La contraseña debe contener al menos una letra minúscula, una mayúscula, un número y una longitud mínima de seis caracteres.
- Los valores introducidos en los campos de 'Contraseña 1' y 'Contraseña 2' deben coincidir.

En caso de que no sea cumplida alguna de estas condiciones, se avisará al usuario mediante un mensaje indicativo del error cometido.

Una vez validados los datos se guardarán y se abrirá automáticamente la vista de Usuarios.

VISTA USUARIOS

Se reflejarán en tarjetas individuales los diferentes usuarios guardados por el formulario, informando del nombre y correo electrónico vinculados al mismo.

## Tabla de contenidos

- Const: nameValue, mailValue, passValue1, passValue2, btnSubmit, userPanel, alert, formValue, appendAlert, wrapper, addAlert, mailRegExp, localStorageData
- Let: alertPlaceholder, userCardsValues, data, content
- LocalStorage
- Validaciones
- Responsive

## Autor

- [@IKLANLO](https://github.com/IKLANLO)
