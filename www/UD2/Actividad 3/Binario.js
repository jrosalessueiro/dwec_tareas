//Este programa calcula varias operaciones 

const calcular = (event, primero, segundo, operacion) => {
    event.preventDefault();

    let potencia = 1;
    let result;
    let tempSegundo = segundo;

    if (primero <= 0) {
        alert("El primer número es negativo, introduzca un valor positivo, por favor");
    } else if (segundo <= 0) {
        alert("El segundo número es negativo, introduzca un valor positivo, por favor");
    } else {

        while (tempSegundo > 2) {
            tempSegundo = tempSegundo / 2;
            potencia++;
        }

        if (operacion === '/') {
            result = primero >> potencia;
        } else {
            result = primero << potencia;
        }

        let final = `<h1>${result}</h1>`;
        let resultadoElemento = document.getElementById('resultadoTexto');
        let resultadoMensaje = "Resultado: " + primero + " " + operacion + " " + segundo;

        resultadoElemento.innerText = resultadoMensaje;

        let resultado = document.getElementById('resultado');

        resultado.innerHTML = final;
    }
}