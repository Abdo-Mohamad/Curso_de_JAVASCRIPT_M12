// Sets y Maps

let conjunto = new Set(["Pedro", "Ricardo", "Maria", "Ricardo"]);

conjunto.add("Luciana");
console.log(conjunto.size); // 3
console.log(conjunto); // [ 'Pedro', 'Ricardo', 'Maria', 'Luciana' ]

let array = ["cama", "mesa", "silla", "mesa"];

function comprar(muebles) {
  let unicaUnidad = new Set(muebles);
  console.log(unicaUnidad);
}
comprar(array); // [ 'cama', 'mesa', 'silla', 'mes

let mapa = new Map([
  ["Computadoras", 10],
  ["Tablets", 5],
  ["Celulares", 15],
]); //  Map { 'Computadoras' => 10, 'Tablets' => 5, 'Celulares'  => 15 }
mapa.set("Laptops", 20);
console.log(mapa); // Map { 'Computadoras' => 10, 'Tablets'  => 5, 'Celulares' => 15, 'Laptops' => 20 }
mapa.delete("Computadoras");

let pregunta = mapa.has("Tablets"); //  true
console.log(pregunta);

let array1 = [1, 1, 2, 2, 3, 3, 4, 4];

let unico = new Set(array1);
let nuevoArray = [...unico]; // agregar  el spread operator para convertir el set en un array

console.log(nuevoArray);
