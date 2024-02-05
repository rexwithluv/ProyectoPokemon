document.addEventListener("DOMContentLoaded", function () {
  // Generar un número aleatorio de 5 cifras
  var numeroAleatorio = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;

  // Mostrar el número aleatorio en el campo correspondiente
  document.getElementById("trainer-id").value = numeroAleatorio;

  const formularioTarjeta = document.getElementById("formularioTarjeta");
  const boton = document.getElementById("boton");

  boton.addEventListener("click", function () {
    // Verificar si todos los campos están completos
    const nombre = document.getElementById("nombre").value;
    const pokemonElegido = document.getElementById("pokemonElegido").value;

    if (nombre.trim() !== "" && pokemonElegido !== "null") {
      // Si todos los campos están completos, ejecutar la función mensajeSaved
      mensajeSaved();
    } else {
      // Mostrar un mensaje de error o realizar alguna acción si algún campo está vacío
      alert("Por favor, completa todos los campos antes de almacenar.");
    }
  });

  function mensajeSaved() {
    const messageElement = document.getElementById("mensaje");
    messageElement.textContent = "Equipo guardado! ^^";
    messageElement.style.opacity = "1";
    messageElement.style.display = "block";
    messageElement.classList.add("animated");

    setTimeout(() => {
      messageElement.style.opacity = "0"; // Desvanecer
      setTimeout(() => {
        messageElement.textContent = "";
        messageElement.style.display = "none";
      }, 1500); // Esperar a que termine la transición
    }, 4500); // Mostrar durante 4 segundos (puedes ajustar este valor)
  }
});
