function obtenerInformacionPokemon(pokemonName) {
  function capitalizarPrimeraLetra(cadena) {
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
  }

  function traducirTipo(tipoIngles) {
    const traducciones = {
      normal: "normal",
      fighting: "lucha",
      flying: "volador",
      poison: "veneno",
      ground: "tierra",
      rock: "roca",
      bug: "bicho",
      ghost: "fantasma",
      steel: "acero",
      fire: "fuego",
      water: "agua",
      grass: "planta",
      electric: "eléctrico",
      psychic: "psíquico",
      ice: "hielo",
      dragon: "dragón",
      dark: "siniestro",
      fairy: "hada",
    };

    return capitalizarPrimeraLetra(traducciones[tipoIngles]) || tipoIngles;
  }

  function asignarFondoSegunTipo(tipos) {
    const coloresPorTipo = {
      normal: "#a8a878",
      fighting: "#c03028",
      flying: "#a890f0",
      poison: "#a040a0",
      ground: "#e0c068",
      rock: "#b8a038",
      bug: "#a8b820",
      ghost: "#705898",
      steel: "#b8b8d0",
      fire: "#f08030",
      water: "#6890f0",
      grass: "#78c850",
      electric: "#f8d030",
      psychic: "#f85888",
      ice: "#98d8d8",
      dragon: "#7038f8",
      dark: "#705848",
      fairy: "#ee99ac",
    };

    // Mapea los tipos a los colores correspondientes
    const coloresTipos = tipos.map((tipo) => coloresPorTipo[tipo]);

    // Almacena los colores en variables independientes
    const color1 = coloresTipos[0] || "#ffffff"; // Fallback a verde si no hay colores
    const color2 = coloresTipos[1] || coloresTipos[0];

    // Construye la cadena para el linear-gradient
    const gradient = `linear-gradient(to right, ${color1} 50%, ${color2} 50%)`;

    // Aplica el fondo al contenedor
    const contenedorPokemonInfo = document.getElementById("pokemon-info");
    contenedorPokemonInfo.style.background = gradient;
  }

  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;
  document.title = `Pokémon... ${capitalizarPrimeraLetra(pokemonName)}!`


  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const tiposEnEspanol = data.types.map((type) =>
        traducirTipo(type.type.name)
      );

      // Muestra la información del Pokémon en la página
      document.getElementById("pokemon-info").innerHTML = `
            <h2>${capitalizarPrimeraLetra(data.name)}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p>Altura: ${data.height}</p>
            <p>Peso: ${data.weight}</p>
            <p>Tipo(s): ${tiposEnEspanol.join(", ")}</p>
          `;

      // Asigna el fondo de la página según el tipo o tipos del Pokémon
      asignarFondoSegunTipo(data.types.map((type) => type.type.name));
    })
    .catch((error) => console.error("Error al obtener datos:", error));
}
