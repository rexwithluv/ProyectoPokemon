import pokemonArray from "../data/pokemon.js";

document.getElementById("random-a-tag").addEventListener("click", () => {
  const randomPokemon = pokemonArray[Math.floor(Math.random() * pokemonArray.length)];
  window.location.href = `pokemon.html?pokemon=${randomPokemon}`;
});
