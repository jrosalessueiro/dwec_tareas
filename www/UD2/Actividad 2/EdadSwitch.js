const etapa = (numero) => {
    let etapa = "";

    if (numero < 0 || numero > 100) {
        return "Error. El número introducido no es correcto. Debe estar entre 0 y 100";
    }

    switch (true) {
        case numero <= 12:
            etapa = "Niño/a";
            break;
        case numero <= 18:
            etapa = "Adolescente";
            break;
        case numero <= 30:
            etapa = "Joven";
            break;
        case numero <= 64:
            etapa = "Adulto/a";
            break;
        case numero <= 100:
            etapa = "Jubilado/a";
            break;
        default:
            return ("Error. El número introducido no es correcto. Debe estar entre 0 y 100")
    }

    return etapa;
}