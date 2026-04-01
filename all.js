document.addEventListener("DOMContentLoaded", function () {
  // Lista de nombres de Pokémon proporcionada
  const listaNombresPokemon = [
    "turtwig",
    "grotle",
    "torterra",
    "chimchar",
    "monferno",
    "infernape",
    "piplup",
    "prinplup",
    "empoleon",
    "starly",
    "staravia",
    "staraptor",
    "bidoof",
    "bibarel",
    "kricketot",
    "kricketune",
    "shinx",
    "luxio",
    "luxray",
    "abra",
    "kadabra",
    "alakazam",
    "magikarp",
    "gyarados",
    "budew",
    "roselia",
    "roserade",
    "zubat",
    "golbat",
    "crobat",
    "geodude",
    "graveler",
    "golem",
    "onix",
    "steelix",
    "cranidos",
    "rampardos",
    "shieldon",
    "bastiodon",
    "machop",
    "machoke",
    "machamp",
    "psyduck",
    "golduck",
    "burmy",
    "wormadam-plant",
    "wormadam-sandy",
    "wormadam-trash",
    "mothim",
    "wurmple",
    "silcoon",
    "beautifly",
    "cascoon",
    "dustox",
    "combee",
    "vespiquen",
    "pachirisu",
    "buizel",
    "floatzel",
    "cherubi",
    "cherrim",
    "shellos",
    "gastrodon",
    "heracross",
    "aipom",
    "ambipom",
    "drifloon",
    "drifblim",
    "buneary",
    "lopunny",
    "gastly",
    "haunter",
    "gengar",
    "misdreavus",
    "mismagius",
    "murkrow",
    "honchkrow",
    "glameow",
    "purugly",
    "goldeen",
    "seaking",
    "barboach",
    "whiscash",
    "chingling",
    "chimecho",
    "stunky",
    "skuntank",
    "bronzor",
    "bronzong",
    "ponyta",
    "rapidash",
    "bonsly",
    "sudowoodo",
    "mime-jr",
    "mr-mime",
    "happiny",
    "chansey",
    "blissey",
    "cleffa",
    "clefairy",
    "clefable",
    "chatot",
    "pichu",
    "pikachu",
    "raichu",
    "hoothoot",
    "noctowl",
    "spiritomb",
    "gible",
    "gabite",
    "garchomp",
    "munchlax",
    "snorlax",
    "unown",
    "riolu",
    "lucario",
    "wooper",
    "quagsire",
    "wingull",
    "pelipper",
    "girafarig",
    "hippopotas",
    "hippowdon",
    "azurill",
    "marill",
    "azumarill",
    "skorupi",
    "drapion",
    "croagunk",
    "toxicroak",
    "carnivine",
    "remoraid",
    "octillery",
    "finneon",
    "lumineon",
    "tentacool",
    "tentacruel",
    "feebas",
    "milotic",
    "mantyke",
    "mantine",
    "snover",
    "abomasnow",
    "sneasel",
    "weavile",
    "uxie",
    "mesprit",
    "azelf",
    "dialga",
    "palkia",
    "manaphy",
    "rotom",
    "gligar",
    "gliscor",
    "nosepass",
    "probopass",
    "ralts",
    "kirlia",
    "gardevoir",
    "gallade",
    "lickitung",
    "lickilicky",
    "eevee",
    "vaporeon",
    "jolteon",
    "flareon",
    "espeon",
    "umbreon",
    "leafeon",
    "glaceon",
    "swablu",
    "altaria",
    "togepi",
    "togetic",
    "togekiss",
    "houndour",
    "houndoom",
    "magnemite",
    "magneton",
    "magnezone",
    "tangela",
    "tangrowth",
    "yanma",
    "yanmega",
    "tropius",
    "rhyhorn",
    "rhydon",
    "rhyperior",
    "duskull",
    "dusclops",
    "dusknoir",
    "porygon",
    "porygon2",
    "porygon-z",
    "scyther",
    "scizor",
    "elekid",
    "electabuzz",
    "electivire",
    "magby",
    "magmar",
    "magmortar",
    "swinub",
    "piloswine",
    "mamoswine",
    "snorunt",
    "glalie",
    "froslass",
    "absol",
    "giratina-altered",
    "giratina-origin",
  ];

  // Mapeo de tipos a colores (puedes ajustar los colores según tus preferencias)
  const tiposColores = {
    normal: "#a8a878",
    fire: "#f08030",
    water: "#6890f0",
    electric: "#f8d030",
    grass: "#78c850",
    ice: "#98d8d8",
    fighting: "#c03028",
    poison: "#a040a0",
    ground: "#e0c068",
    flying: "#a890f0",
    psychic: "#f85888",
    bug: "#a8b820",
    rock: "#b8a038",
    ghost: "#705898",
    dark: "#705848",
    dragon: "#7038f8",
    steel: "#b8b8d0",
    fairy: "#ee99ac",
  };

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

  // Función para obtener datos de la API de Pokémon con un retraso
  function obtenerDatosPokemonConRetraso(nombre, indice) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${nombre}/`;

    // Realizar la solicitud HTTP usando fetch
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            const tipoPrimario = data.types[0].type.name;
            const colorFondo = tiposColores[tipoPrimario] || "#ffffff";

            resolve({
              nombre: data.name,
              imagen: data.sprites.front_default,
              tipo: data.types.map((type) => type.type.name).join(", "),
              colorFondo: colorFondo,
              indice: indice,
            });
          })
          .catch((error) => reject(error));
      }, indice * 1); // Se añade un retraso de 1 segundo (1000 milisegundos) por Pokémon
    });
  }

  // Función para crear tarjetas de Pokémon y organizarlas en filas de 7
  function crearTarjetasPokemon() {
    const contenedorTarjetas = document.getElementById("contenedor-tarjetas");

    // Crear un contenedor para las filas
    const contenedorFilas = document.createElement("div");
    contenedorFilas.classList.add("contenedor-filas");
    contenedorTarjetas.appendChild(contenedorFilas);

    // Iterar sobre la lista de nombres y crear tarjetas en el orden proporcionado
    for (let i = 0; i < listaNombresPokemon.length; i++) {
      // Verificar si es el final de una fila
      if (i % 7 === 0) {
        // Crear un nuevo contenedor para la fila
        const fila = document.createElement("div");
        fila.classList.add("fila");
        contenedorFilas.appendChild(fila);
      }

      // Crear enlace (<a>) para la tarjeta y establecer el href
      const enlaceTarjeta = document.createElement("a");
      enlaceTarjeta.href = `./pokemon/${listaNombresPokemon[i]}.html`;
      enlaceTarjeta.classList.add("tarjeta"); // Agregamos la clase "tarjeta" al enlace

      // Crear tarjeta de Pokémon
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("tarjeta-container");

      // Obtener datos del Pokémon usando la API con un retraso
      obtenerDatosPokemonConRetraso(listaNombresPokemon[i], i)
        .then((datos) => {
          // Crear elementos HTML con la información del Pokémon
          const imagen = document.createElement("img");
          imagen.src = datos.imagen;
          imagen.alt = datos.nombre;
          imagen.classList.add("imagen-pokemon");

          const nombre = document.createElement("p");
          nombre.textContent = capitalizarPrimeraLetra(datos.nombre);

          const tipo = document.createElement("p");
          tipo.textContent = datos.tipo.split(", ").map(traducirTipo).join(", ");

          // Establecer el fondo de la tarjeta según el tipo primario del Pokémon
          const colorTipo = datos.tipo.split(",")[0];

          tarjeta.style.borderRadius = "8px";
          tarjeta.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
          tarjeta.style.margin = "10px"; // Separación entre tarjetas
          tarjeta.style.width = "120px"; // Ancho de la tarjeta
          tarjeta.style.border = `2px solid ${tiposColores[colorTipo] || "#000000"}`; // Borde más oscuro
          tarjeta.style.backgroundColor = `rgba(${parseInt(
            tiposColores[colorTipo].slice(1, 3),
            16
          )}, ${parseInt(tiposColores[colorTipo].slice(3, 5), 16)}, ${parseInt(
            tiposColores[colorTipo].slice(5, 7),
            16
          )}, 0.6)`;

          nombre.style.textAlign = "center";
          tipo.style.textAlign = "center";

          // Agregar elementos a la tarjeta
          tarjeta.appendChild(imagen);
          tarjeta.appendChild(nombre);
          tarjeta.appendChild(tipo);

          // Agregar la tarjeta al enlace
          enlaceTarjeta.appendChild(tarjeta);

          // Agregar la tarjeta al contenedor de la fila actual
          contenedorFilas.lastChild.appendChild(enlaceTarjeta);
        })
        .catch((error) => {
          console.error(`Error al obtener datos de ${listaNombresPokemon[i]}:`, error);
          // Puedes mostrar un mensaje de error o tomar medidas adicionales aquí
        });
    }
  }

  // Llamar a la función para crear tarjetas y organizarlas en filas de 7
  crearTarjetasPokemon();
});
