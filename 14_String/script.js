// Los Strings
let string = "cadena de texto" + `cadena de texto` + " cadena de texto";
// tipos de escrbier cadenas
console.log(string); // muestrar la cadena

string = "let's go";

console.log(string);

string = "Nurcielago \n"; // cuenta los espacios
console.log(string.length);

let texto = "Educacion";
// Start 4 comienza desde el 4 (en el 5) hasta 7 (el 7 si lo toma)
let resultadao = texto.slice(4, 7);
let resultadao2 = texto.substr(4, 7); // son iguales de slice pero substr esta deprecado

console.log(resultadao); //  muestra el texto desde el 4 hasta el 7

const texto2 = " Hola, soy Nurcielago, soy un desarrollador web"; // texto2 es una const
const resultadao3 = texto2.replace("Nurcielago", "Nurcielago2"); // reemplaza Nurcielago  por Nurcielago2

const resultadao4 = texto2.trim();
console.log(resultadao3); // muestra el texto con el reemplazo

const importanteText =
  "Esta texto te lo manda el bakend. Este texto es importante. Dividi el texto";
const resultadao5 = importanteText.split("."); //  divide el texto en un array
console.log(resultadao5); // muestra el array con el texto dividido
