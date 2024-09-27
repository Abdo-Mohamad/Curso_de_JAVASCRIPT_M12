// Operadores Lógicos

/* let x = 5;
let y = 5;

let z = x == y; 

console.log(z); */

let x = 5;
let y = "5";

let z = x === y;

console.log(z); //  false, porque são diferentes tipos de dados (número e string)

console.log(x == y); // true, porque os valores são iguais, mas os tipos de dados são diferentes
console.log(x === y); // false, porque os valores e os tipos de dados são diferentes
console.log(x != y); // false, porque os valores são iguais
console.log(x !== y); // true, porque os valores e os tipos de dados são diferentes
console.log(x > y); // true, porque o valor de x é maior que o valor de y
console.log(x < y); // false, porque o valor de x é menor que o valor de y
console.log(x >= y); // true, porque o valor de x é maior ou igual ao valor de y
console.log(x <= y); // false, porque o valor de x é menor ou igual ao valor de y
console.log(x > y && x < y); // false, porque x é maior que y, mas não
console.log(x > y || x < y); // true, porque x é maior que y ou x é menor
console.log(x > y && x !== y); // true, porque x é maior que y e x é
console.log(x > y || x !== y); // true, porque x é maior que y ou x é
console.log(x > y && x === y); // false, porque x é maior que y e x é
console.log(x > y || x === y); // true, porque x é maior que y ou x é
console.log(x == 5 && y == "5"); // true, porque x é igual a 5 e y é igual a "
console.log(x == 5 || y == "5"); // true, porque x é igual
console.log(x == 5 && y == 5); // false, porque x é igual a 5
