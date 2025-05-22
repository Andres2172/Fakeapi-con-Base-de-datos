export default function mostrarHome() {
  const app = document.getElementById("app");
  // Es una buena práctica verificar si 'app' existe antes de manipularlo
  if (app) {
    app.innerHTML = "Home";
  } else {
    console.error("Elemento con id 'app' no encontrado.");
  }
}