class Personaje {
    #nombre;
    #nivel;
    #puntosDeVida;

    constructor(nombre, nivel, puntosDeVida) {
        this.#nombre = nombre;
        this.#nivel = nivel;
        this.#puntosDeVida = puntosDeVida;
    }

    get nombre() { return this.#nombre; }
    get nivel() { return this.#nivel; }
    get puntosDeVida() { return this.#puntosDeVida; }
    set puntosDeVida(valor) {
        if (valor >= 0) {
            this.#puntosDeVida = valor;
        }
    }

    atacar() {
        console.log(`${this.#nombre} realiza un ataque básico.`);
    }

    toString() {
        return `${this.constructor.name} - Nombre: ${this.#nombre}, Nivel: ${this.#nivel}, Vida: ${this.#puntosDeVida}`;
    }
}

class Guerrero extends Personaje {
    #fuerza;

    constructor(nombre, nivel, puntosDeVida, fuerza) {
        super(nombre, nivel, puntosDeVida);
        this.#fuerza = fuerza;
    }

    get fuerza() {
        return this.#fuerza;
    }

    golpeEspada() {
        console.log(`${this.nombre} golpea con espada (fuerza: ${this.#fuerza}).`);
    }

    atacar() {
        const daño = this.#fuerza * 2;
        console.log(`${this.nombre} ataca con espada causando ${daño} de daño.`);
    }
}

class Mago extends Personaje {
    #mana;

    constructor(nombre, nivel, puntosDeVida, mana) {
        super(nombre, nivel, puntosDeVida);
        this.#mana = mana;
    }

    get mana() { return this.#mana; }

    lanzarHechizo() {
        if (this.#mana >= 10) {
            this.#mana -= 10;
            console.log(`${this.nombre} lanza un hechizo. Mana restante: ${this.#mana}`);
        } else {
            console.log(`${this.nombre} no tiene suficiente mana.`);
        }
    }

    atacar() {
        const daño = this.nivel * 3;
        console.log(`${this.nombre} ataca con magia causando ${daño} de daño.`);
    }
}

const personajes = [
    new Guerrero("Aragorn", 5, 120, 15),
    new Mago("Gandalf", 10, 80, 100),
    new Guerrero("Leonidas", 3, 150, 20),
    new Mago("Merlin", 7, 70, 80),
    new Guerrero("Bjorn", 8, 130, 18)
];

console.log("=== ATAQUES ===");
personajes.forEach(p => p.atacar());

console.log("\n=== ORDENADOS POR NIVEL ===");
personajes.sort((a, b) => a - b);
personajes.forEach(p => console.log(p.toString()));
