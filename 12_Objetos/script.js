// los objetos
let auto1 = {
  marca: "FIAT",
  modelo: "Fiat 500",
  peso: 1200,
  color: "Azul",
};

let auto2 = {
  marca: "RENAULT",
  modelo: "RENAULT 12",
  peso: 1100,
  color: "Marron",
};
// los objetos

console.log("Auto 1", auto1); //  imprime el objeto auto1
console.log(`Auto 2 `, auto2); // imprime el objeto auto2

console.log("El color del auto es ", auto1.color);
// imprime el color del auto1
console.log("El color del auto es ", auto2.color);
// imprime el color del auto2

auto1.marca = "BWM";
auto1.modelo = "XS 5";
console.log(auto1);
console.log(auto1["marca"]); // otra forma para entra  a los objetos

const vendedor = {
  nombre: " Pedro",
  apellido: "Gonzalez",
  empresa: "Auto S.A",
  habilidadesBlandes: ["Carisma", "Puntualidad"],
  vender: () => {
    return "Pedro ha vendido un auto";
  },
  nombreCompleto: function getNombreCompleto() {
    return this.nombre + " " + this.apellido;
  },
};

console.log(vendedor.vender());//  imprime el mensaje de venta

console.log(vendedor.nombreCompleto()); //  imprime el nombre completo del vendedor



