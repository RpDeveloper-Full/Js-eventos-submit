// Seleccionamos el formulario y el párrafo del mensaje
const formulario = document.getElementById("miFormulario");
const mensaje = document.getElementById("mensaje");

// Escuchamos el evento submit
formulario.addEventListener("submit", function(evento) {
  evento.preventDefault(); // Evita que se recargue la página

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;

  // Mostramos un mensaje en pantalla
  mensaje.textContent = `Formulario enviado ✅ Bienvenido, ${nombre} (${email})`;
});