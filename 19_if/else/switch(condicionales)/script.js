// if else switch (condicionales)

let edadPersona = 19;

if (edadPersona >= 18 && edadPersona <= 60) {
  console.log("pudes ingresar al boliche");
} else if (edadPersona <= 18) {
  console.log("No pudes ingresr al bolicho porque eres meor de edad");
} else {
  console.log(" No pudes ingresr al bolicho");
}

let estiloDeMusic = prompt(" pide un tipo de música");

switch (key) {
  case "rock":
    console.log("Te recomiendo los Ramones");

    break;
  case "hard rock":
    console.log("Te recomiendo los Guns n Roses");

    break;
  case "metal":
    console.log("Te recomiendo los Pantera");

    break;
  case "Rock and roll":
    console.log("Te recomiendo los Rplling Stones");

    break;
  case "pop":
    console.log("Te recomiendo los Micael Jackson");
    break;
  default:
    "No conzco esta música pero te recomiendo escuchar Mozart";
    break;
}

let edad = 18;
let nacionalidad = "argentina";
let tienPasaporte = true;
if (edad >= 18) {
  console.log(" Tienes  la edad para viajar");
  if (nacionalidad == "argentina") {
    console.log(" La documentacion está correcta, aprobado trámite 2");
    if (tienPasaporte) {
      console.log(" Usted pude viajer , buen viaje!");
    } else {
      console.log(" no pudes  viajar porque no tienes pasaporte");
    }
  } else {
    console.log(" La documentacion está incorrecta, aprobado trámite 1");
  }
} else {
  console.log("No tienes la edad para viajar");
}
