# Validación de formulario

Dispondremos de 4 archivos diferentes.

- **index.html**: Presenta el código HTML de la web.
- **comun.js**: Presenta código JS que puede ser reutilizado en otras partes del proyecto. Un ejemplo claro de la importancia de este archivo es el siguiente. Supongamos que tenemos dos formularios donde se valida el DNI. Si incluimos el patrón del DNI en el script.js del formulario1 y volvemos a incluir este patrón en el script.js del formulario dos tenemos lo siguiente:
  - Repetición de código.
  - Si nos hemos equivocado tenemos que editar dos archivos, lo que puede incurrir en errores futuros.
- **scriptSolucion.js**: Código de la validación del formulario.
- **style.css**: Estilos para la presentación de los datos.

---

### Funcionamiento

En primer lugar, cuando se carga el archivo HTML hacemos un borrado de los datos del formulario y cargamos el valor de la cookie que va a almacenar el número de intentos.

```html
<body onload="limpiarFormulario();iniciarIntentos()"></body>
```

Hacemos una validación para cada input del formulario y en caso de existir algún error mostramos por pantalla el mensaje.

```html
<label for="nombre">Nombre:</label>
<input type="text" name="nombre" id="nombre" onblur="validarNombre()" />
```

Una vez clicamos en el botón de enviar tenemos que volver a validar cada uno de los campos y si todos los datos son correctos hacemos el envio de los datos a www.google.es.

```html
<input
  type="submit"
  name="enviar"
  id="enviar"
  value="Enviar"
  onclick="validar();"
/>
```

```js
const validar = () => {
  intentos();
  event.preventDefault();
  ocultarAviso();
  if (
    validarNombre() &&
    validarApellido() &&
    validarEdad() &&
    validarDni() &&
    validarTlf() &&
    validarEmail() &&
    validarHora() &&
    validarFecha() &&
    validarProvincia()
  ) {
    if (confirm("¿Estás seguro de enviar los datos?")) {
      document.getElementById("formulario").submit();
    }
  }
};
```
