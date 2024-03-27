function setCookie(value) {
    let name = 'contador';
    let expire = new Date();

    expire.setTime(expire.getTime() + 24 * 60 * 60 * 1000);
    let expireDate = expire.toUTCString();
    document.cookie = name + '=' + value + '; expires =' + expireDate;
}

function getCookie(name) {
    let cookies = document.cookie.split(';');
    for (let index = 0; index < cookies.length; index++) {
        const element = cookies[index].trim();
        if (element.indexOf(name) === 0) {
            return element.substring(name.length + 1,element.length);
        }
    }
    return null;
}

function contadorCookie() {
    let intentos;

    if (getCookie('contador') === null) {
        intentos = 1;
    } else {
        intentos = parseInt(getCookie('contador')) + 1;
    }
    document.getElementById('intentos').innerHTML = 'Intentos: ' + intentos;
}