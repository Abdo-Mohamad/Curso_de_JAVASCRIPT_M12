// Fetch, APIs, JSON

let urlBase = "https://jsonplaceholder.typicode.com";
let query = "comments?postId=5";

// get> pedir informacion
/* fetch(`${urlBase}/${query}`)
  .then((response) => response.json())
  .then((json) => console.log(json)); */

let requestBody = {
  title: " Ricardo comenta sober tu foto",
  body: "!Qué bella foto prima, se te extraña!",
  userId: 1,
};
//post: enviar informacion
fetch(`${urlBase}/posts`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify(requestBody),
})
  .then((response) => response.json())
  .then((json) => console.log(json));

//put: enviar informacion y actualizar
let posteo = 1;
let requestBody2 = {
  id: 100,
  title: " Ricardo comenta sober tu foto",
  body: "!Qué bella foto prima, se te extraña!",
  userId: 1,
};
fetch(`${urlBase}/posts/${posteo}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify(requestBody2),
})
  .then((response) => response.json())
  .then((json) => console.log(json));
//patch: enviar informacion y actualizar ( solo se edita un atributo)

let requestBody3 = {
  title: " Ricardo comenta sober tu foto",
};

fetch(`${urlBase}/posts/${posteo}`, {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
});

//delete: eliminar un recurso o item
let elementoAEliminar = 7;
fetch(` ${urlBase}/posts/${elementoAEliminar}`, {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
});
