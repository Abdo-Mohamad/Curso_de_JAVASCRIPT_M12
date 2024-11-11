// Manejo de errores

try {
  // llamado al backend (a través de un API )
  console.log(" llamando al backend... ");

  //throw " Este clinte no essta apto para la compra";

  setTimeout(() => {
    console.log("Salió todo con éxito");
  }, 1000);
} catch (error) {
  // Tomamos el error y hacemos algo que nos parezca correcto
  console.log(" Error al llamar al backend... ", error);
} finally {
  // Se ejecuta siempre por más que falle o no falle
  console.log(" Finalizando la llamada al backend... o se ejecuta siempre ");
}
