// Función para establecer el valor de la cookie
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Función para obtener el valor de la cookie
function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Función para limpiar el contenido del formulario
const limpiarFormulario = (formulario) => {
  ocultarAviso();
  document.getElementById(formulario).reset();
  setCookie("intentos", "0");
  document.getElementById("intentos").style.display = "none";
};

// Función que oculta el div de errores
const ocultarAviso = () => {
  document.getElementById("errores").style.display = "none";
};

// Función que muestra el div de errores e intentos
const mostrarAviso = () => {
  document.getElementById("errores").style.display = "block";
  document.getElementById("intentos").style.display = "block";
};

// Patrones
let patronNombreApellido = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
let patronEdad = /^[0-9]+$/;
let patronDni = /^[0-9]{8}[A-Z]$/i;
let patronEmail = /\S+@\S+\.\S+/;
let patronFecha = /^\d{2}[-/]\d{2}[-/]\d{4}$/;
let patronTlf = /^\d{9}$/;
let patronHora = /^(\d{2}):(\d{2})$/;
