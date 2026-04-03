import { capitalize, translateTypeName } from "../scripts/utils.js";

class PokemonCard extends HTMLElement {
  constructor() {
    super();
  }

  set pokemonData(data) {
    const name = capitalize(data.name);
    const image = data.sprites.front_default;
    const altImage = data.name;
    const height = data.height;
    const weight = data.weight;
    const types = data.types.map((type) => translateTypeName(type.type.name)).join(", ");

    this.innerHTML = `
      <div class="pokemon-info" id="pokemon-info">
        <h2 id="pokemon-name">${name}</h2>
        <img src="${image}" alt="${altImage}" id="pokemon-image">
        <p id="pokemon-height">Altura: ${height}</p>
        <p id="pokemon-weight">Peso: ${weight}</p>
        <p id="pokemon-types">Tipo(s): ${types}</p>
      </div>
    `;
  }
}

customElements.define("pokemon-card", PokemonCard);
