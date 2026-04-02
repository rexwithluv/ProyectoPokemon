import pokemonArray from "../data/pokemon.js";

class MainNavbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav>
        <table>
          <tr>
            <td id="random-button">Randomizador</td>
            <td onclick="window.location.href = 'all.html'">Toda la pokédex</td>
            <td onclick="window.location.href = 'index.html'">Inicio</td>
            <td onclick="window.location.href = 'team.html'">Equipo</td>
            <td onclick="window.location.href = 'about-me.html'">Sobre mí</td>
          </tr>
        </table>
      </nav>
    `;

    this.querySelector("#random-button").addEventListener("click", () => {
      const randomPokemon = pokemonArray[Math.floor(Math.random() * pokemonArray.length)];
      window.location.href = `pokemon.html?pokemon=${randomPokemon}`;
    });
  }
}

customElements.define("main-navbar", MainNavbar);
