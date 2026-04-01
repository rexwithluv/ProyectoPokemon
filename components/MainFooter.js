class MainFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer>
        <p>
          Web creada por
            <span id="myself">
              Aarón A. Rueda
            </span>
          , alumno de 1ºDAW para el módulo de LMSXI ^^
        </p>
      </footer>
    `;
  }
}

customElements.define("main-footer", MainFooter);
