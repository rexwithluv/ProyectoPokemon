import pokemonArray from "../data/pokemon.js";
import typeColors from "../data/type-color.js";
import typeDictionary from "../data/type-dictionary.js";

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

function translateTypeName(typeName) {
  return capitalize(typeDictionary[typeName.toLowerCase()]);
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Función para crear tarjetas de Pokémon y organizarlas en filas de 7
function crearTarjetasPokemon() {
  const contenedorTarjetas = document.getElementById("contenedor-tarjetas");

  // Crear un contenedor para las filas
  const contenedorFilas = document.createElement("div");
  contenedorFilas.classList.add("contenedor-filas");
  contenedorTarjetas.appendChild(contenedorFilas);

  // Iterar sobre la lista de nombres y crear tarjetas en el orden proporcionado
  for (let i = 0; i < pokemonArray.length; i++) {
    // Verificar si es el final de una fila
    if (i % 7 === 0) {
      // Crear un nuevo contenedor para la fila
      const fila = document.createElement("div");
      fila.classList.add("fila");
      contenedorFilas.appendChild(fila);
    }

    // Crear enlace (<a>) para la tarjeta y establecer el href
    const enlaceTarjeta = document.createElement("a");
    enlaceTarjeta.href = `./pokemon/${pokemonArray[i]}.html`;
    enlaceTarjeta.classList.add("tarjeta"); // Agregamos la clase "tarjeta" al enlace

    // Crear tarjeta de Pokémon
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta-container");

    // Obtener datos del Pokémon usando la API con un retraso
    fetchPokemonData(pokemonArray[i], i)
      .then((datos) => {
        // Crear elementos HTML con la información del Pokémon
        const imagen = document.createElement("img");
        imagen.src = datos.imagen;
        imagen.alt = datos.nombre;
        imagen.classList.add("imagen-pokemon");

        const nombre = document.createElement("p");
        nombre.textContent = capitalize(datos.nombre);

        const tipo = document.createElement("p");
        tipo.textContent = datos.tipo.split(", ").map(translateTypeName).join(", ");

        // Establecer el fondo de la tarjeta según el tipo primario del Pokémon
        const colorTipo = datos.tipo.split(",")[0];

        tarjeta.style.borderRadius = "8px";
        tarjeta.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        tarjeta.style.margin = "10px"; // Separación entre tarjetas
        tarjeta.style.width = "120px"; // Ancho de la tarjeta
        tarjeta.style.border = `2px solid ${typeColors[colorTipo] || "#000000"}`; // Borde más oscuro
        tarjeta.style.backgroundColor = `rgba(${parseInt(
          typeColors[colorTipo].slice(1, 3),
          16
        )}, ${parseInt(typeColors[colorTipo].slice(3, 5), 16)}, ${parseInt(
          typeColors[colorTipo].slice(5, 7),
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
        console.error(`Error al obtener datos de ${pokemonArray[i]}:`, error);
        // Puedes mostrar un mensaje de error o tomar medidas adicionales aquí
      });
  }
}

// Llamar a la función para crear tarjetas y organizarlas en filas de 7
crearTarjetasPokemon();
