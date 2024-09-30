// Eventos en JS

/* Un evento de JavaScript es una acción específica que ocurre 
    dentro de una página web o aplicación , como hacer clic en un 
    elemento, mover el mouse, presionar una tecla o cargar una página.
*/

function mostrar() {
  document.getElementById("seleccionables").innerHTML = Date();
  //  muestra la fecha y hora actual cuado  se hace clic en el botón
}

function mostrar2() {
  let d = new Date();

  document.getElementById("seleccionables").innerHTML = d.getFullYear(); // impremer a el año actual
}

//  muestra el año actual cuando se hace clic en el botón

function mostrar3() {
  let d = new Date();
  document.getElementById("seleccionables").innerHTML = d.getFullYear(); // impremer a el año actual
}
