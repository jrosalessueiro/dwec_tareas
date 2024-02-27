function getCookie() {

}

function setCookie(name, value, time) {
    var name = 'contador';
    var value = 1;
    var path = '.';
    var d = new Date();
    
    d.setTime(d.getTime() + (time * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}