//La sucesión de Fibonacci se caracteriza porque el primer número es 0, el segundo es 1 y
// a partir de ahí cada elemento es la suma de los dos anteriores.

const fibonacci = (event: Event) => {
    event.preventDefault();
    let i: number = 0;
    let j: number = 1;
    let k: number = 3;

    let sucesion = document.getElementById('sucesion');
    if (sucesion != null) {

        let sucecionFibonacci: string = '<h2>Suceción de Fibonacci</h2>';
        sucecionFibonacci += '<ul>';
        sucecionFibonacci += `<li>El elemento 1 de la serie de Fibonacci es: 0</li>`;
        sucecionFibonacci += `<li>El elemento 2 de la serie de Fibonacci es: 1</li>`;
        while (k <= 10) {
            let resultado: number = i + j;
            sucecionFibonacci += `<li>El elemento  ${k}  de la serie de Fibonacci es:  ${resultado}</li>`;
            k++;
            i = j;
            j = resultado;
        }
        sucecionFibonacci += '</ul>';
        sucesion.innerHTML = sucecionFibonacci;
    } else {
        alert("Elemento 'sucesion' no encontrado en el documento.");
    }
}