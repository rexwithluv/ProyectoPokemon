import { capitalize } from "./utils.js";
import typeColors from "../data/type-color.js";

export function darkenColor(color) {
  const cant = 25;

  let red = color.substr(1, 2);
  let green = color.substr(3, 2);
  let blue = color.substr(5, 2);

  let deepRed = parseInt(red, 16);
  let deepGreen = parseInt(green, 16);
  let deepBlue = parseInt(blue, 16);

  if (deepRed - cant >= 0) {
    deepRed = deepRed - cant;
  }
  if (deepGreen - cant >= 0) {
    deepGreen = deepGreen - cant;
  }
  if (deepBlue - cant >= 0) {
    deepBlue = deepBlue - cant;
  }

  red = deepRed.toString(16);
  green = deepGreen.toString(16);
  blue = deepBlue.toString(16);

  if (red.length < 2) red = "0" + red;
  if (green.length < 2) green = "0" + green;
  if (blue.length < 2) blue = "0" + blue;

  const dark = "#" + red + green + blue;

  return dark;
}

export function setBackgroundColorByType(tipos) {
  const coloresTipos = tipos.map((type) => typeColors[type]);

  const color1 = coloresTipos[0];
  const color2 = coloresTipos[1] || coloresTipos[0];

  const contenedorPokemonInfo = document.getElementById("pokemon-info");
  if (color1 === color2) {
    contenedorPokemonInfo.style.backgroundColor = color1;
  } else {
    const gradient = `linear-gradient(to right, ${color1} 50%, ${color2} 50%)`;
    contenedorPokemonInfo.style.background = gradient;
  }

  const nav = document.getElementsByTagName("nav")[0];
  nav.style.backgroundColor = color1;

  const colorOscuro = darkenColor(color1);
  const navStyles = `
      nav table td:hover {
          background-color: ${colorOscuro};
      }`;

  const styleElement = document.createElement("style");
  styleElement.innerHTML = navStyles;
  document.head.appendChild(styleElement);

  const footer = document.getElementsByTagName("footer")[0];
  footer.style.backgroundColor = color2;
}

async function main() {
  const params = new URLSearchParams(window.location.search);
  const pokemonName = params.get("pokemon");
  const capitalizedPokemonName = capitalize(pokemonName);

  document.title += ` ${capitalizedPokemonName}!`;
  document.getElementById("pokemon-title").textContent += capitalizedPokemonName;

  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  const pokemonCard = document.querySelector("pokemon-card");
  console.log(pokemonCard)
  pokemonCard.pokemonData = data;

  setBackgroundColorByType(data.types.map((type) => type.type.name));
}

main().catch(console.error);
