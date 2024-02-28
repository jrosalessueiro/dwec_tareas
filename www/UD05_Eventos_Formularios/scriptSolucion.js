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


function setCookie() {
    var name = 'contador';
    var value = 1;
    var expire = new Date();
    expire.setMonth(expire.getMonth() + 1); // Agrega un mes a la fecha actual

    document.cookie = name + "=" + value + "; expires=" + expire.toUTCString();
}

function contadorCookie() {
    var contador = parseInt(getCookie('contador'));

    if (contador || contador === 0) {
        contador++;
    } else {
        setCookie()
    }
    
    document.getElementById('intentos').innerText = "Intentos de envío del formulario: " + contador;
    alert(contador);

}