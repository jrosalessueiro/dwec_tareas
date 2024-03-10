const etapa = (numero) => {
    let etapa = "";

    if (numero < 0 || numero > 100) {
        return "Error. El número introducido no es correcto. Debe estar entre 0 y 100";
    }

    if (numero >= 0 && numero <= 10) {
        etapa = "Niño/a";
    } else if (numero <= 18) {
        etapa = "Adolescente";

    } else if (numero <= 30) {
        etapa = "Joven";

    } else if (numero <= 64) {
        etapa = "Adulto";

    } else if (numero <= 100) {
        etapa = "Jubilado/a";

    } else {
        etapa = "El valor de la edad no es válido ya que debe ser entre 0 y 100 años."
    }

    return etapa;
}