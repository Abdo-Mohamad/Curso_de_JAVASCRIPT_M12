import { barcelona, roma, paris, londres } from "./ciudades.js";

// Obtener los elemento  del DOM
let enlaces = document.querySelectorAll("a"); //  Obtiene todos los enlaces del documento

let tituloElemento = document.getElementById("titulo"); //  Obtiene el elemento con el id "titulo"

let subtituloElemento = document.getElementById("subtitulo"); //  Obtiene el elemento con el id "subtitulo"

let parrafoElemento = document.getElementById("parrafo"); //    Obtiene el elemento con el id "parrafo"
let precioElemento = document.getElementById("precio"); //    Obtiene el elemento con el id "precio"

//console.log(enlace);

// Agregar un evento CLICK a cada enlace
enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    enlaces.forEach(function (enlace) {
      enlace.classList.remove("active");
    });

    // Agregar la clase " active" al enlace actual
    this.classList.add("active");
    // obtener el contenido correspondiente seún el  enlace
    let contenido = obtenerContenido(this.textContent);

    tituloElemento.innerHTML = contenido.titulo;
    subtituloElemento.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;
    precioElemento.innerHTML = contenido.precio;
  });
});

// Funcion para traer la informacion correcta desde ciudades.js

function obtenerContenido(enlace) {
  let contenido = {
    Barcelona: barcelona,
    Roma: roma,
    París: paris,
    Londres: londres,
  };
  return contenido[enlace];
}
