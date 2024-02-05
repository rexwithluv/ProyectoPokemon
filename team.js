document.addEventListener("DOMContentLoaded", function () {
  // Generar un número aleatorio de 5 cifras
  var numeroAleatorio = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;

  // Mostrar el número aleatorio en el campo correspondiente
  document.getElementById("trainer-id").value = numeroAleatorio;
});
