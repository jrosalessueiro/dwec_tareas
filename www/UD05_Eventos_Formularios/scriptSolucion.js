
function funcionesSolucion() {
    contadorCookie();
    var valid = validateForm();

    if (!valid) {
        return false;
    }

    var confirmation = confirm("¿Está seguro de que desea enviar el formulario?");

    if (!confirmation) {
        return false;
    }

    return true;
}

function validateForm() {
    // Objecto que contiene pares id => error, ej. {nombre => "Nombre no valido", dni => "DNI no valido"}
    var errors = {};

    if (!validateText(document.getElementById("nombre").value)) {
        errors.nombre = "Nombre no valido, debe ser un texto.";
    }

    if (!validateText(document.getElementById("apellidos").value)) {
        errors.apellidos = "Apellidos no validos, deben ser un texto.";
    }

    if (!validateAge(document.getElementById("edad").value)) {
        errors.edad = "Edad no válida, debe ser un número entre 0 y 105 años.";
    }

    if (!validateDni(document.getElementById("nif").value)) {
        errors.nif = "DNI no válida, deben ser 8 dígitos, un guión y una letra.";
    }

    if (!validateEmail(document.getElementById("email").value)) {
        errors.email = "Email no válido, compruebe el valor introducido.";
    }

    if (!validateState(document.getElementById("provincia").value)) {
        errors.provincia = "La provincia no es válida, debe marcar una de las opciones.";
    }

    if (!validateDate(document.getElementById("fecha").value)) {
        errors.fecha = "La fecha no es válida, debe tener el formato dd/mm/aaaa o dd-mm-aaaa.";
    }

    if (!validatePhone(document.getElementById("telefono").value)) {
        errors.telefono = "El teléfono no es válido, debe contener 9 dígitos.";
    }

    if (!validateHour(document.getElementById("hora").value)) {
        errors.hora = "La hora no es válida, debe ser introducida en el formato hh:mm.";
    }

    if (errors != {}) {
        document.getElementById(Object.keys(errors)[0]).focus();
        document.getElementById("errores").innerHTML = Object.values(errors).join('<br>');
        return false;
    }
    return true;
}

//devuelve true o false si text cumple o no la regla 
function validateText(text) {
    return /^[A-Za-z ]{1,30}$/.test(text);
}

//devuelve true o false si age cumple o no la regla 
function validateAge(age) {
    return !isNaN(age) && age >= 0 && age <= 105 && age != "";
}

//devuelve true o false si dni cumple o no la regla 
function validateDni(dni) {
    // ^ comienzo de la cadena.
    // \d{8} ocho dígitos.
    // - un guión.
    // [a-zA-Z] una letra, mayúscula o minúscula.
    // $ fin de la cadena.

    return /^(\d{8})-[a-zA-Z]$/.test(dni);
}

//devuelve true o false si email cumple o no la regla 
function validateEmail(email) {
    // ^ comienzo de la cadena.
    // [a-z]{1,15} entre 1 y 15 letras minúsculas.
    // @ arroba.
    // [a-z]{1,10} entre 1 y 10 letras minúsculas.
    // . un punto
    //(com|es|gal|net|org|info) alguna delos dominios más comunes 
    //$ fin de la cadena
    return /^[a-z]{1,15}@[a-z]{1,10}.(com|es|gal|net|org|info)$/.test(email);
}

//devuelve true o false según el tamaño de state, si tiene contenido o no 
function validateState(state) {

    return state != 0;
}

//devuelve true o false si date cumple o no la regla 
function validateDate(date) {
    // ^ comienzo de la cadena.
    // d{2} dos dígitos.
    // / barra o - guión
    // d{2} dos dígitos.
    // / barra o - guión
    // d{4} cuatro dígitos.
    //$ fin de la cadena

    return /^\d{2}\/\d{2}\/\d{4}$/.test(date) || /^\d{2}\-\d{2}\-\d{4}$/.test(date);
}

//devuelve true o false si phone cumple o no la regla 
function validatePhone(phone) {
    // ^ comienzo de la cadena.
    // d{9} nueve dígitos.
    //$ fin de la cadena

    return /^(\d{9})$/.test(phone);
}

//devuelve true o false si hour cumple o no la regla 
function validateHour(hour) {
    // ^ comienzo de la cadena.
    //d{2}: dos digitos 
    // : dos puntos para separar horas de minutos.
    //d{2}: dos digitos 
    //$ fin de la cadena

    return /^\d{2}:\d{2}$/.test(hour);

}

window.onload = function () {
    document.getElementById("nombre").addEventListener("blur", function () {
        var nombre = document.getElementById("nombre");
        nombre.value = nombre.value.toUpperCase();
    });

    document.getElementById("apellidos").addEventListener("blur", function () {
        var apellidos = document.getElementById("apellidos");
        apellidos.value = apellidos.value.toUpperCase();
    });
}


//Cookie contador de intentos de envío del formulario
function getCookie(nombre) {
    var name = nombre + "=";
    //decodifica el valor de document.cookie, que contiene todas las cookies del documento
    var decodedCookie = decodeURIComponent(document.cookie);
    //separamos el contenido por ";"
    var partesCookie = decodedCookie.split(';');

    for (var i = 0; i < partesCookie.length; i++) {
        var parte = partesCookie[i];
        while (parte.charAt(0) == ' ') {
            parte = parte.substring(1);
        }
        if (parte.indexOf(name) == 0) {
            return parte.substring(name.length, parte.length);
        }
    }
    return "";
}

function setCookie(value) {
    var name = 'contador';
    var expire = new Date();
    expire.setMonth(expire.getMonth() + 1); // Agrega un mes a la fecha actual

    document.cookie = name + "=" + value + "; expires=" + expire.toUTCString();
}

function contadorCookie() {
    var contador = parseInt(getCookie('contador'));

    if (!isNaN(contador)) {
        contador++;
    } else {
        contador = 1
    }

    setCookie(contador);

    document.getElementById('intentos').innerText = "Intentos de envío del formulario: " + contador;
}