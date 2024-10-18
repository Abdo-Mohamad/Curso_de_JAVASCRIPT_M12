// Typefo & InstanceOf

//String

let string = typeof "Sesrgie"; // Me daras el  tipo de dato de la variable string
console.log(string); // string

// Number
let number = typeof 1.23; // Me daras el  tipo de dato de la variable  number

console.log(number); //  number

let c = typeof NaN; // NaN es un tipo de dato que no es un número

console.log(c); // number
// Boolean
let b = typeof true; //  true es un booleano
console.log(b); // boolean
// Arrya
let a = typeof [1, 2, 3]; //  es un array de objeto
console.log(a); // object
// Objeto
let obj = typeof { a: 1, b: 2 }; // es un objeto
console.log(obj); // object

// Objeto  con prototype (Caso de herencia)

let g = typeof new Date(); // es un objeto
console.log(g); // object
// Funcion
let h = typeof function () {}; // funcion
console.log(h); // function

// Undefined (por error)
let u = typeof undefined; // undefined
console.log(u); // undefined

// Ojeto ( caso especial de null)
let n = typeof null; // object
console.log(n); // object

// instanceof
let d = [1, 2, 3]; //  array

let f = new Date(); //  objeto date

let gg = new Set(); //   objeto set

let hh = new Map(); //  objeto map

let i = null; //  objeto null

console.log(d instanceof Array); // true
console.log(f instanceof Array); // false
console.log(gg instanceof Array); //  false
console.log(hh instanceof Array); //  false
console.log(i instanceof Array); // false

if (f instanceof Array) {
  console.log("Gracias  a la herencia de prototype, f es un array");
} else {
  console.log("f no es un array");
}
