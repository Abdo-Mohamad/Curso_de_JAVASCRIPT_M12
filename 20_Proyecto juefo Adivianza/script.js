// JUego Adivianza

let numeroAzar = Math.floor(Math.random() * 100) + 1; //  Genera un número aleatorio entre 1 y 100

let numeroEntrada = document.getElementById("numeroEntrada"); //  Obtiene el elemento con el id "numeroEntrada"
let mensaje = document.getElementById("mensaje"); //  Obtiene el elemento con el id "mensaje"

// Esta acción se va a ejecutar cuando se  presione el botón de chequear
function chrquearResultado() {
  let numeroIngresado = parseInt(numeroEntrada.value);

  if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
    mensaje.textContent = "Por favor ingrese un número entre 1 y 100";
    return;
  }
  if (numeroIngresado === numeroAzar) {
    mensaje.textContent = "¡Felieitacion!  Has acertado el número";
    mensaje.style.color = "green";
    numeroEntrada.disabled = true;
  } else if (numeroIngresado < numeroAzar) {
    mensaje.textContent =
      "El número que ingresaste es menor que el número secreto";
    mensaje.style.color = "red";
  } else {
    mensaje.textContent =
      "El número que ingresaste es mayor que el número secreto";
    mensaje.style.color = "red";
  }
}
