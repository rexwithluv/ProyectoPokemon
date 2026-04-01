class MainNavbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav>
        <table>
          <tr>
            <td onclick="random()">Randomizador</td>
            <td onclick="window.location.href = 'all.html'">Toda la pokédex</td>
            <td onclick="window.location.href = 'index.html'">Inicio</td>
            <td onclick="window.location.href = 'team.html'">Equipo</td>
            <td onclick="window.location.href = 'about-me.html'">Sobre mí</td>
          </tr>
        </table>
      </nav>
    `;
  }
}

customElements.define("main-navbar", MainNavbar);
