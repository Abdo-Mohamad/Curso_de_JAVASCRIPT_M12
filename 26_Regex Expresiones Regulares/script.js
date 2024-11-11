// Regex: Expresiones Regulares

let texto = "Este curso es muy bueno de JavaScript";

let patron = texto.search(/JavaScript/i); // buscar la palabra JavaScript en mayúsculas o minúsculas
console.log(patron); // mustar en que potion esta

patron = /JavaScript/i;

let resultado = patron.test(texto); // buscar la palabra JavaScript en mayúsculas o minúsculas
console.log(resultado); // true o false si esta o no la palabra en el texto
resultado = patron.exec(texto); // buscar la palabra JavaScript en mayúsculas o minúsculas
console.log(resultado); // devuelve el texto que coincide con el patron o null si no coincide

let correoElectronico =
  /^[-\w.%+]{1,64}@(?:[A-Z0-9]{1,63}\.){1,125}[A-Z]{2,63}/i;

let email = "mi correo electronico es: ejemplo@correo.com";
console.log(correoElectronico.test(email));
email = "ejemplo@correo.cat";
console.log(correoElectronico.test(email));

