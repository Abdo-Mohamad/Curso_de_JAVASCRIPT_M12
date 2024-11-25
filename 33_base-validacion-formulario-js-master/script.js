// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC914vqMWAuENY-IAsD5__vnqQQuXOtFZU",
  authDomain: "datos-de-formularios-9ed8b.firebaseapp.com",
  projectId: "datos-de-formularios-9ed8b",
  storageBucket: "datos-de-formularios-9ed8b.appspot.com",
  messagingSenderId: "575591078315",
  appId: "1:575591078315:web:2ba9440e3aba283beedaee",
  measurementId: "G-ZXE9F58X1J",
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();
const db = firebase.firestore();

// Manejo del formulario
document.getElementById("formulario").addEventListener("submit", (event) => {
  event.preventDefault();

  // Validar nombre
  const entradaNombre = document.getElementById("name");
  const errorNombre = document.getElementById("nameError");
  if (entradaNombre.value.trim() === "") {
    errorNombre.textContent = "Por favor, introducí tu nombre";
    errorNombre.classList.add("error-message");
  } else {
    errorNombre.textContent = "";
    errorNombre.classList.remove("error-message");
  }

  // Validar email
  const emailEntrada = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailEntrada.value)) {
    emailError.textContent = "Por favor, introducí un mail válido";
    emailError.classList.add("error-message");
  } else {
    emailError.textContent = "";
    emailError.classList.remove("error-message");
  }

  // Validar contraseña
  const contrasenaEntrada = document.getElementById("password");
  const contrasenaError = document.getElementById("passwordError");
  const contrasenaPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;
  if (!contrasenaPattern.test(contrasenaEntrada.value)) {
    contrasenaError.textContent =
      "La contraseña debe tener al menos 8 caracteres, números, mayúsculas y minúsculas y caracteres especiales";
    contrasenaError.classList.add("error-message");
  } else {
    contrasenaError.textContent = "";
    contrasenaError.classList.remove("error-message");
  }

  // Si todo es válido, envía a Firestore
  if (
    !errorNombre.textContent &&
    !emailError.textContent &&
    !contrasenaError.textContent
  ) {
    db.collection("users")
      .add({
        nombre: entradaNombre.value,
        email: emailEntrada.value,
        password: contrasenaEntrada.value,
      })
      .then((docRef) => {
        alert("El formulario se ha enviado con éxito. ID: " + docRef.id);
        document.getElementById("formulario").reset();
      })
      .catch((error) => {
        alert("Error al enviar: " + error.message);
      });
  }
});
