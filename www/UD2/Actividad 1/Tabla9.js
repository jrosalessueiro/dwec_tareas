//Este programa va a mostrar la tabla del 9

const tabla9 = (event) => {
    event.preventDefault();
    let numero = 9;
   
    let tabla = document.getElementById('tabla');
    let tablaMultiplicar = '<h2>Tabla del 9</h2>';
    tablaMultiplicar += '<ul>';

    for (let i = 1; i <= 10; i++) {
        tablaMultiplicar += `<li> ${numero} x ${i} = ${numero*i} </li>`;
        }

    tablaMultiplicar += '</ul>';
    tabla.innerHTML = tablaMultiplicar;
}
