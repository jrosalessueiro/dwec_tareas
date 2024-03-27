function solucion() {
    contador();
}


function setCookie(name) {
    //obtenemos el valor de la cookie
    let contador = getCookie(name);

    //si no existe, la inicializamos en 1, de lo contrario le sumamos +1
    if (contador === null || contador === "") {
        contador = 1;
    } else {
        contador = parseInt(contador) + 1;
    }

    //creamos la cookie con el valor nuevo
    document.cookie = name + '=' + contador + '; expires=' + (new Date(new Date().getTime() + (30 * 24 * 60 * 60 * 1000)).toUTCString()) + '; path=/';
}

function getCookie(name) {
    let nombre = name + '=';
    //Dividimos las cookies separadas por ; y las metemos en un array llamado cookies
    let cookies = document.cookie.split(';');

    for (let index = 0; index < cookies.length; index++) {
        const cookie = cookies[index].trim();
        if (cookie.indexOf(nombre) === 0) {
            //devuelve una subcadena que empieza en el punto nombre.length
            return cookie.substring(nombre.length, cookie.length);
        }
    }
    return '';
}

function contador() {
    let contador = parseInt(getCookie('contador')) || 0;
    contador++;
    setCookie('contador', contador, 30 * 24 * 60 * 60 * 1000);

    document.getElementById('intentos').innerHTML = 'El número de intentos hasta ahora son: ' + contador;
}
