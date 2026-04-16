const API_URL = "https://pokeapi.co/api/v2/pokemon/";

// Cargar 4 Pokémon al iniciar
document.addEventListener("DOMContentLoaded", () => {
    cargarPokemons();
});

async function cargarPokemons() {
    try {
        limpiarContenedor();

        for (let i = 0; i < 4; i++) {
            const id = randomIntFromInterval(1, 1025);
            await obtenerPokemon(id);
        }

    } catch (error) {
        mostrarError("Error cargando los Pokémon.");
        console.error(error);
    }
}

// Obtener Pokémon por ID o nombre
async function obtenerPokemon(idOName) {
    try {
        const res = await fetch(API_URL + idOName.toString().toLowerCase());

        if (!res.ok) {
            throw new Error(`Error HTTP ${res.status}`);
        }

        const data = await res.json();
        mostrarDatos(data);

    } catch (error) {
        mostrarError("No se pudo obtener el Pokémon.");
        console.error(error);
    }
}

// Mostrar datos en pantalla
function mostrarDatos(datos) {
    const contenedor = document.getElementById("data");

    const card = document.createElement("div");
    card.classList.add("pokemon");

    const nombre = document.createElement("h3");
    nombre.textContent = datos.name.toUpperCase();

    const imagen = document.createElement("img");
    imagen.src = datos.sprites.front_default;
    imagen.alt = datos.name;

    const id = document.createElement("p");
    id.textContent = "ID: " + datos.id;

    const tipos = document.createElement("p");
    const listaTipos = datos.types.map(t => t.type.name).join(", ");
    tipos.textContent = "Tipos: " + listaTipos;

    card.append(nombre, imagen, id, tipos);
    contenedor.appendChild(card);
}

// Buscar Pokémon
function buscarPokemon() {
    const nombre = document.getElementById("busqueda").value.trim();

    if (!nombre) {
        mostrarError("Ingresa un nombre válido.");
        return;
    }

    limpiarContenedor();
    obtenerPokemon(nombre);
}

// Utilidades
function limpiarContenedor() {
    document.getElementById("data").innerHTML = "";
}

function mostrarError(mensaje) {
    const contenedor = document.getElementById("data");
    contenedor.innerHTML = `<p style="color:red;">${mensaje}</p>`;
}

// Referencia: https://stackoverflow.com/questions/4959975/
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}