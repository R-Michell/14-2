onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
};

// Obtener elementos
const loveMessage = document.getElementById("love-message");
const popup = document.getElementById("popup");

// Agregar evento de clic al mensaje de amor
loveMessage.addEventListener("click", function() {
    popup.style.display = "block"; // Mostrar el pop-up
});

// Agregar evento de clic al pop-up para cerrarlo
popup.addEventListener("click", function() {
    popup.style.display = "none"; // Ocultar el pop-up al hacer clic en cualquier lugar fuera de él
});

// Crear una variable para llevar la cuenta de la imagen actual
let imagenActual = 1;

// Crear una función para cambiar el src del elemento img
function cambiarImagen() {
  // Seleccionar el elemento img
  const imagen = document.getElementById("love-image");
  // Cambiar el src del elemento img según la imagen actual
  imagen.src = `images/${imagenActual}.jpg`;
  // Incrementar la imagen actual o reiniciarla si llega al límite
  imagenActual++;
  if (imagenActual > 30) {
    imagenActual = 1;
  }
}

// Ejecutar la función cambiarImagen cada 3 segundos usando un setInterval
setInterval(cambiarImagen, 3000);

