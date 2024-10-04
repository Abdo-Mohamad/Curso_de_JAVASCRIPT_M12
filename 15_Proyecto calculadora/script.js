// Proyecto calculador
// Esto agrega a la pentalla el valor del botón de la calculadora que toquemos
function agregar(valor) {
  document.getElementById("pantalla").value += valor;
}
 
function borrar() { 
  document.getElementById("pantalla").value = "";
}

function calcular() {
  const valorPantalla = document.getElementById("pantalla").value; //  Obtenemos el valor de la pantalla

  const resultado = eval(valorPantalla); //   Evaluamos la expresión matemática

  document.getElementById("pantalla").value = resultado; //    Mostramos el resultado en la pantalla
}
