// Bucles --> for , while , etc

let tecnologias = ["HTML", "CSS", "JavaScript", "React", "Angular"]; //  Array de tecnologias con indices 0 1 2 3 4
let seleccionable = document.getElementById("seleccionable"); //   Selecciona el elemento con id "seleccionable"
let texto = "";
for (let i = 0; i < tecnologias.length; i++) {
  console.log(tecnologias[i]);
  texto += tecnologias[i];
  // seleccionable.innerHTML += tecnologias[i] + "<br>";
  if (i < tecnologias.length - 1) {
    texto += ", ";
  } // para no  poner una coma al final

  seleccionable.textContent = texto; // mustrar
}

for (tecnologia of tecnologias) {
  // mustrrar cada elemento  de la array tecnologias

  console.log(tecnologia);
}

const alumno = {
  nombre: "Juan",
  edad: 25,
  curso: "Desarrollo web",
};

for (const key in alumno) {
  console.log(alumno[key]);
} // mustrar  cada propiedad del objeto alumno

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numeros.forEach((numeros) => {
  console.log(numeros);
}); // mustrar  cada elemento de la array numeros

let edad = 0;
while (edad < 18) {
  console.log(`Tienes ${edad} años eres un niño `);
  edad++;
} // es bucle  que se repite mientras la condicion sea verdadera

console.log(`Tienes ${edad} años y ya eres mayor de deda`);

do {
  {
    console.log(edad);
    edad++;
    break;
  }
} while (edad < 18);

console.log(`Tienes ${edad} años y ya eres mayor de deda`);

while (edad < 30) {
  console.log(edad);
  edad++;
  if (edad == 25) break; //  para salir del bucle

}
