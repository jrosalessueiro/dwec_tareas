function funcionesSolucion(){
    contadorCookie();
    validateForm();

    return false;
}

function validateForm() {
    // Objecto que contiene pares id => error, ej. {nombre => "Nombre no valido", dni => "DNI no valido"}
    var errors = {};
    if (!validateNombre()) {
        errors.nombre = "Nombre no valido";
    }

    if (errors != {}) {
        document.getElementById(Object.keys(errors)[0]).focus();
        document.getElementById("errores").innerHTML = Object.values(errors).join('<br>');
        return false;
    }
    return true;
}

function validateNombre() {
    return false;
}


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

window.onload = function() {
    document.getElementById("nombre").addEventListener("blur", function(){
        var nombre = document.getElementById("nombre");
        nombre.value = nombre.value.toUpperCase();
    });
    
    document.getElementById("apellidos").addEventListener("blur", function(){
        var apellidos = document.getElementById("apellidos");
        apellidos.value = apellidos.value.toUpperCase();
    });
}
