import pokemonArray from "../data/pokemon.js";
import typeColors from "../data/type-color.js";
import { capitalize } from "./utils.js";
import { translateTypeName } from "./utils.js";

async function fetchPokemonData(name, index) {
  try {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}/`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    const primaryType = data.types[0].type.name;
    const backgroundColor = typeColors[primaryType];

    return {
      nombre: data.name,
      imagen: data.sprites.front_default,
      tipo: data.types.map((type) => type.type.name).join(", "),
      colorFondo: backgroundColor,
      indice: index,
    };
  } catch (error) {
    console.error("Lo siento, la llamada a la API parece que no fue bien...");
  }
}

async function main() {
  const contenedorTarjetas = document.getElementById("contenedor-tarjetas");

  const contenedorFilas = document.createElement("div");
  contenedorFilas.classList.add("contenedor-filas");
  contenedorTarjetas.appendChild(contenedorFilas);

  for (let i = 0; i < pokemonArray.length; i++) {
    if (i % 7 === 0) {
      const fila = document.createElement("div");
      fila.classList.add("fila");
      contenedorFilas.appendChild(fila);
    }

    const enlaceTarjeta = document.createElement("a");
    enlaceTarjeta.href = `pokemon.html?pokemon=${pokemonArray[i]}`;
    enlaceTarjeta.classList.add("tarjeta");

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-container");

    const pokemonData = await fetchPokemonData(pokemonArray[i], i);

    const imagen = document.createElement("img");
    imagen.src = pokemonData.imagen;
    imagen.alt = pokemonData.nombre;
    imagen.classList.add("imagen-pokemon");

    const nombre = document.createElement("p");
    nombre.textContent = capitalize(pokemonData.nombre);

    const tipo = document.createElement("p");
    tipo.textContent = pokemonData.tipo.split(", ").map(translateTypeName).join(", ");

    const colorTipo = pokemonData.tipo.split(",")[0];

    tarjeta.style.borderRadius = "8px";
    tarjeta.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    tarjeta.style.margin = "10px";
    tarjeta.style.width = "120px";
    tarjeta.style.border = `2px solid ${typeColors[colorTipo] || "#000000"}`;
    tarjeta.style.backgroundColor = `rgba(${parseInt(
      typeColors[colorTipo].slice(1, 3),
      16
    )}, ${parseInt(typeColors[colorTipo].slice(3, 5), 16)}, ${parseInt(
      typeColors[colorTipo].slice(5, 7),
      16
    )}, 0.6)`;

    nombre.style.textAlign = "center";
    tipo.style.textAlign = "center";

    tarjeta.appendChild(imagen);
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(tipo);

    enlaceTarjeta.appendChild(tarjeta);

    contenedorFilas.lastChild.appendChild(enlaceTarjeta);
  }
}

main().catch(console.error);
