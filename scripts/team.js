function main() {
  const randomTrainerId = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;

  const trainerIdInput = document.getElementById("trainer-id");
  trainerIdInput.value = randomTrainerId;

  document.getElementById("save-team-button").addEventListener("click", function () {
    const trainerName = document.getElementById("trainer-name").value;
    const selectedPokemon = document.getElementById("selected-pokemon").value;

    if (trainerName.trim() !== "" && selectedPokemon !== "null") {
      const messageDiv = document.getElementById("save-team-message");

      messageDiv.textContent = "Equipo guardado! ^^";
      messageDiv.style.opacity = "1";
      messageDiv.style.display = "block";
      messageDiv.classList.add("animated");

      setTimeout(() => {
        messageDiv.style.opacity = "0";
        setTimeout(() => {
          messageDiv.textContent = "";
          messageDiv.style.display = "none";
        }, 1500);
      }, 4500);
    } else {
      alert("Por favor, completa todos los campos antes de almacenar.");
    }
  });
}

main();
