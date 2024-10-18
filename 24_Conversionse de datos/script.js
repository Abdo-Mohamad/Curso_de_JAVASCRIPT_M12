// Conversiones de datos

// String a Number
let a = Number("3.14"); //  3.14

a = parseInt("3.14"); //

console.log(a, typeof a); // 3.14

// Number a String
let d = String(3.14); //  o let d = 3.14.toString()
console.log(d, typeof d); // 3.14 string

// Number a Boolean
let e = Boolean(3.14); // true
// Boolean a Number
let f = Number(Boolean(3.14)); // 1

// Dates a String 
let fecha = new Date("2024-03-14").toString();
console.log(fecha, typeof fecha); // 2024-03-14T00:00
// String a Date
let fecha2 = new Date("2024-03-14");
console.log(fecha2, typeof fecha2); // 2024-03-14T00

let ricardo = 0;
if (ricardo &&  ricardo == 0) {
console.log( ricardo); // 0
}else{
  console.log("No hay datos");
} //  0


