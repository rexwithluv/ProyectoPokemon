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

    function oscurecerColor(color, cant) {
      //voy a extraer las tres partes del color
      var rojo = color.substr(1, 2);
      var verd = color.substr(3, 2);
      var azul = color.substr(5, 2);

      //voy a convertir a enteros los string, que tengo en hexadecimal
      var introjo = parseInt(rojo, 16);
      var intverd = parseInt(verd, 16);
      var intazul = parseInt(azul, 16);

      //ahora verifico que no quede como negativo y resto
      if (introjo - cant >= 0) introjo = introjo - cant;
      if (intverd - cant >= 0) intverd = intverd - cant;
      if (intazul - cant >= 0) intazul = intazul - cant;

      //voy a convertir a hexadecimal, lo que tengo en enteros
      rojo = introjo.toString(16);
      verd = intverd.toString(16);
      azul = intazul.toString(16);

      //voy a validar que los string hexadecimales tengan dos caracteres
      if (rojo.length < 2) rojo = "0" + rojo;
      if (verd.length < 2) verd = "0" + verd;
      if (azul.length < 2) azul = "0" + azul;

      //voy a construir el color hexadecimal
      var oscuridad = "#" + rojo + verd + azul;

      //la función devuelve el valor del color hexadecimal resultante
      return oscuridad;
    }

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

    const nav = document.getElementById("nav");
    nav.style.backgroundColor = color1;

    // Define un estilo CSS para el nav y su estado :hover
    const colorOscuro = oscurecerColor(color1, 25);
    const navStyles = `
      nav table td:hover {
          background-color: ${colorOscuro};
  }
  `;

    // Crea un nuevo estilo y lo agrega al head del documento
    const styleElement = document.createElement("style");
    styleElement.innerHTML = navStyles;
    document.head.appendChild(styleElement);

    const footer = document.getElementById("footer");
    footer.style.backgroundColor = color2;
  }

  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;
  document.title = `Pokémon... ${capitalizarPrimeraLetra(pokemonName)}!`;

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
