// Callbacks funciones

function mostrarConsola(num) {
  console.log(num); // mostara la suma del funcion
}

function calcular(num1, num2, callaback) {
  let suma = num1 + num2;

  callaback(suma); 
}

calcular(2, 2, mostrarConsola); // 4
