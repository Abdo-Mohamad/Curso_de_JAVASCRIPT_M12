// b36872909c162fb143c721e64114cd9a
let urlBase = "https://api.openweathermap.org/data/2.5/weather";
let api_key = "b36872909c162fb143c721e64114cd9a";
let difKelvin = 273.15;

document.getElementById("botonBusqueda").addEventListener("click", () => {
  const ciudad = document.getElementById("ciudadEntrada").value;
  if (ciudad) {
    fetchDatosClima(ciudad);
  }
});

function fetchDatosClima(ciudad) {
  fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`).then((data) =>
    data.json().then((data) => mostrarDatosClima(data))
  );
}
function mostrarDatosClima(data) {
 //console.log(data);

  let divDatosClima = document.getElementById("datosClima");
  divDatosClima.innerHTML = "";

  let ciudadNombre = data.name;
  let PaisNombre = data.sys.country;
  let humedad = data.main.humidity;
  let temperatura = data.main.temp;
  let icono = data.weather[0].icon;
  //console.log(temperatura - difKelvin);

  let descripcion = data.weather[0].description;

  let ciudadTitulo = document.createElement("h2");
  ciudadTitulo.textContent = `${ciudadNombre}, ${PaisNombre}`;

  let temperaturaInfo = document.createElement("p"); // Crear un nuevo elemento
  temperaturaInfo.textContent = `La temperatura es: ${(
    temperatura - difKelvin
  ).toFixed(2)}ºC`; // Añadir contenido al elemento
  let humedadInfo = document.createElement("p"); // Crear un nuevo elemento
  humedadInfo.textContent = `La humedad es: ${humedad}%`; // Añadir contenido al elemento
  let iconoInfo = document.createElement("img");
  iconoInfo.src = `http://openweathermap.org/img/wn/${icono}@2x.png`;

  let descripcionInfo = document.createElement("p");
  descripcionInfo.textContent = `La descripción meteorológica es: ${descripcion}`;

  divDatosClima.appendChild(ciudadTitulo);
  divDatosClima.appendChild(temperaturaInfo);
  divDatosClima.appendChild(humedadInfo);
  divDatosClima.appendChild(iconoInfo);
  divDatosClima.appendChild(descripcionInfo);
}
