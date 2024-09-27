// Funciones
// Función  para obtener el valor de un campo

function nomberFuncion(parametro1, parametro2, parametro3) {
  // lineas de codigo que har este funcion
}

let a = 5;
let b = 6;
function suma(x, y) {
  return x + y; // devuelve la suma de x y y
}

let respuesta = suma(a, b); // devuelve 11
console.log(`la respuesta de ${a} + ${b}: ${respuesta}`); // imprime la respuesta en la consola

const tempperatura = 76;

function transFormarACelsius(fahernheit) {
  return (5 / 9) * (fahernheit - 32);
}

const respuest = transFormarACelsius(tempperatura);

console.log(`La temperatura en grados Celsius es de`, parseInt(respuest)); //

// funcion de  suma de dos numeros
let suma2 = (x, y) => {
  return x + y;
};
// Ejemplo de uso de la función suma2
//let resultado = suma2(5, 7);
console.log(suma2(a, b) + " suma 2"); // imprime 11 suma 2

let sumarDecena = (numero) => numero + 12;
console.log(  sumarDecena(5) ); // imprime 17


let funcion = () => console.log("soy una función");
 
funcion()  // imprime "soy una función" en la consola

