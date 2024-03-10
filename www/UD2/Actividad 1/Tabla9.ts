//Este programa va a mostrar la tabla del 9

const tabla9 = (event: Event) => {
    event.preventDefault();
    let numero: number = 9;

    let tabla = document.getElementById('tabla');

    if (tabla != null) {
        let tablaMultiplicar: string = '<h2>Tabla del 9</h2>';
        tablaMultiplicar += '<ul>';

        for (let i: number = 1; i <= 10; i++) {
            tablaMultiplicar += `<li> ${numero} x ${i} = ${numero * i} </li>`;
        }

        tablaMultiplicar += '</ul>';
        tabla.innerHTML = tablaMultiplicar;
    } else {
        alert("Elemento 'tabla' no encontrado en el documento.");
    }
}