// las disponibilidad de scope

/* let x = 5;

{
  let x = 10;
  // Output:  10

  console.log(x);
}

console.log(x); */

//  Output: 5

// El variable  x en el bloque de código es una variable local, por lo que no afecta a la variable

let x = 5;
{
  let y = 10;
  X = X + y;
  console.log(x);
} //  X no está definido en este bloque de código, por lo que no se puede usar.

