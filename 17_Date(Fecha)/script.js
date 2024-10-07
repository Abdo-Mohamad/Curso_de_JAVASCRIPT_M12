// Date(Fecha)

let meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
let fecha = new Date(); //  Obtiene la fecha actual

console.log(fecha); //  imprime la fecha actual

// Forma de poner la fecha: AAAA-MM-DD (iso)
//  Forma de poner la fecha: AAAA/MM/DD (usa)
// long Mar 25 2020
fecha = new Date("2021-05-01"); // Dar le una fecha específica

console.log(fecha); // imprime la  fecha especificada

console.log(fecha.getFullYear()); //  imprime el año de la fecha especificada

console.log(fecha.getMonth()); //   imprime el mes de la fecha especificada

fecha = new Date();
let resultado = meses[fecha.getMonth()]; //   imprime el mes de la fecha actual

console.log(resultado); //
fecha = new Date();
fecha.setFullYear(2030);
resultado =
  fecha.getDate() + " " + meses[fecha.getMonth()] + " " + fecha.getFullYear(); //  imprime la fecha actual

console.log(resultado); // imprime  la fecha actual

console.log(fecha);

 //
console.log(cambiarFecha);
