// Array (arreglos, listas)
const array = [1, 2, 3, 4, 5, "HTML", "CSS", "JS"]; // lista String y numeros

const array1 = new Array();

array1[0] = "HTML"; //
array1[1] = "Css";
array1[2] = "JS";
array1[3] = "pedro";

console.log(array1); //

document.getElementById("seleccionable").innerHTML = array1; // mustra la lista del array

console.log(array1.length); //la longitud del array

console.log(array1.length - 1);
let text = "";
for (let i = 0; i < array1.length; i++) {
  text += "<li>" + array1[i] + "</li>"; // hacer list del array que  se muestra en el html
}
document.getElementById("seleccionable2").innerHTML = text; // muestra  la lista en el html

//                0       1      2
const array2 = ["HTML", "CSS", "JS"]; //
array2[array.length] = "PHP"; // agrega un elemento al final del array
array2[array.length] = "React"; // agrega un elemento al final del array

console.log(array2);

let frutas = ["manzana", "pera", "Banana", "naranja", "manzana", "naranja"]; //  array de string de frutas

const resultado = frutas.filter((x) => x === "manzana"); //  filtro de array agarra el array

console.log(resultado); // muestra el array con los elementos que coinciden con el filtro

const objetosArray = [
  {
    nombre: "pedro",
    apellido: "Gonzalez",
  },
  {
    nombre: "Maria",
    apellido: "Gonzalez",
  },
  {
    nombre: "Lucìa",
    apellido: "perez",
  },
  {
    nombre: "Glottis",
    apellido: "perez",
  },
  {
    nombre: "Fernda",
    apellido: "perez",
  },
];

const resultadoObjecto = objetosArray.filter((x) => x.apellido === "perez");
console.log(resultadoObjecto);

for (let i = 0; i < resultadoObjecto.length; i++) {
  const element = resultadoObjecto[i];
  console.log(element.nombre);
} // mustar los nombres  de los objetos que coinciden con el filtro

const frutas2 = ["manzana", "manzana", "manzana", "manzana", "pera"];

const resultadoFrutas2 = frutas2.map((x) => {
  if (x == "manzana") {
    return "naranja";
  }
});

console.log(resultadoFrutas2); // muestra el array con los elementos que coinciden con el filtro

const resultadoFrutas3 = frutas2.fill("naranja", 1); //  reemplaza los elementos del array con el valor especificado
console.log(resultadoFrutas3);

const resultadoFrutas4 = frutas2.find((x) => x === "manzana"); //  busca el primer elemento que coincida con el filtro
// y devuelve el elemento que coincida con el filtro
console.log(resultadoFrutas4); // muestra el primer elemento que coincida con el filtro

const resultadoFrutas5 = frutas2.findIndex((x) => x === "pera"); //  busca el primer elemento que coincida con  el filtro

// y devuelve el indice del elemento que coincida con el filtro
console.log(resultadoFrutas5); // muestra el indice del primer elemento que coincida con el filtro

const resultadoFrutas6 = frutas2.some((x) => x === "pera"); //   busca si algun elemento del array coincide con el filtro
// y devuelve el indice del elemento que coincida con el filtro
console.log(resultadoFrutas6); // muestra el indice del primer elemento que coincida con el filtro

const resultadoFrutas7 = frutas2.every((x) => x === "pera"); //     busca si todos los elementos del array coinciden con el filtro

console.log(resultadoFrutas7); //  muestra true si todos los elementos del array coinciden con el filtro

const resultadoFrutas8 = frutas2.pop();

console.log(resultadoFrutas8); // solo muestra pera

console.log(frutas2); // musetra todo menos la ultima fruta o arrary

const resultadoFrutas9 = frutas2.shift();

console.log(resultadoFrutas9); // solo muestra pera

console.log(frutas2);

// indece, cuantos quiero cortar, y que agrego
frutas2.slice(2, 1, "ciruela"); //
console.log(frutas2);

document.getElementById("seleccionable").innerHTML = frutas2.join(", Fruta: "); //

// muestra el contenido del array en un string con los elementos separados por comas y un texto
// adicional entre cada elemento

const fruta3 = ["Manzana", "Naranja", "Pera", "Ciruela", "limón"]; //

const verduras = ["lechuga", "tomate", "pimiento", "cebolla", "aguacat"];

console.log(fruta3.concat(verduras));
console.log(verduras.concat(fruta3));

const number = [6, 1, 2, 3, 4, 5, 12, 13];
console.log(number.sort());
console.log(number.sort((x, y) => x - y));
console.log(number.sort((x, y) => y - x));

const number1 = [
  { auto: "FIAT", anyo: 2020 },
  { auto: "BWM", anyo: 2019 },
  { auto: "FORD", anyo: 2021 },
  { auto: "RENAULT", anyo: 2023 },
];

console.log(number1.sort((x, y) => x.anyo - y.anyo)); // order a el array de objetos por el campo anyo



