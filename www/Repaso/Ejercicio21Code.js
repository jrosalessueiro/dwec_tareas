
document.getElementById('registro_nombre').addEventListener('blur', validaNombre);
document.getElementById('registro_email').addEventListener('blur', validaEmail);
document.getElementById('registro_comentarios').addEventListener('blur', validaComentarios);
document.getElementById('registro_password').addEventListener('blur', validaPassword);

function validaFormulario(event) {
    var nombreValido = validaNombre();
    var emailValido = validaEmail();
    var comentarioValido = validaComentarios();
    var passwordValido = validaPassword();
    var condicionesValido = validaCondiciones();


    if (nombreValido === false || emailValido === false || comentarioValido === false || passwordValido === false || condicionesValido === false) {
        event.preventDefault();
        var resultado = 'Error';
        var resultadoDiv = document.getElementById('resultado')
        resultadoDiv.innerHTML=resultado;
    }
}

document.getElementById('registro').addEventListener('submit', validaFormulario);
