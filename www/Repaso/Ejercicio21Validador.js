

function validaNombre() {
    var nombre = document.getElementById('registro_nombre').value;
    var regexp = /^\s+$/;

    if (nombre === null || regexp.test(nombre) === true || nombre.length === 0) {
        alert('El campo "Nombre" es obligatorio.')
        return false;
    }
}

function validaEmail() {
    var email = document.getElementById('registro_email').value;
    var regexp = /^\s+$/;
    var regexpEmail = /^\w+(.-_\w+)*@\w+(.-_\w+)*\.\w+(.-_\w+)*$/

    if (email === null || regexp.test(email) === true || email.length === 0) {
        alert('El campo "Email" es obligatorio.')
        return false;
    } else if (!regexpEmail.test(email)) {
        alert('El campo "Email" no es correcto.')
        return false;
    }
}

function validaComentarios() {
    var comentarios = document.getElementById('registro_comentarios').value;
    var regexp = /^\s+$/;

    if (comentarios === null || regexp.test(comentarios) === true || comentarios.length === 0) {
        alert('El campo "Comentarios" es obligatorio.')
        return false;
    } else if (comentarios.length > 50) {
        alert('El campo "Comentarios" es demasiado grande(máx 50 caracteres).')
        return false;
    }
}

function validaPassword() {
    var password = document.getElementById('registro_password').value;
    var regexp = /^\s+$/;
    var regexpPassword = /^\d+(a-z)+(A-Z)+{6,}/;

    if (password === null || regexp.test(password) === true || password.length === 0) {
        alert('El campo "Password" es obligatorio.')
        return false;
    } else if (!regexpPassword.test(password)) {
        alert('El campo "Password" debe tener al menos 6 elementos, de los cuales debe tener al menos 1 dígito, 1 mayúscula y 1 minúscula.')
        return false;
    }
}

function validaCondiciones() {
    var condiciones = document.getElementById('registro_condiciones');
    
  if (condiciones.checked === false) {
        alert('Es necesario aceptar las condiciones.')
        return false;
    }
}