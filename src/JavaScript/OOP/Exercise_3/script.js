class Personaje {
    #nombre;
    #nivel;
    #puntosDeVida;
    #arma;

    constructor(nombre, nivel, puntosDeVida, arma = new SinArma()) {
        this.#nombre = nombre;
        this.#nivel = nivel;
        this.#puntosDeVida = puntosDeVida;
        this.#arma = arma;
    }

    get nombre() { return this.#nombre; }
    get nivel() { return this.#nivel; }
    get puntosDeVida() { return this.#puntosDeVida; }
    get arma() { return this.#arma; }
    set puntosDeVida(valor) {
        if (valor >= 0) {
            this.#puntosDeVida = valor;
        }
    }

    equiparArma(arma) {
        this.#arma = arma;
        console.log(`${this.#nombre} ahora está usando ${arma.nombre}.`);
    }

    atacar() {
        const daño = this.#arma.atacar() + this.#nivel;
        console.log(`${this.#nombre} ataca con ${this.#arma.nombre} y causa ${daño} de daño.`);
        return daño;
    }

    toString() {
        return `${this.constructor.name} - ${this.#nombre} (Nivel ${this.#nivel}) - Arma: ${this.#arma.nombre}`;
    }
}

class Guerrero extends Personaje {
    #fuerza;

    constructor(nombre, nivel, puntosDeVida, fuerza, arma) {
        super(nombre, nivel, puntosDeVida, arma);
        this.#fuerza = fuerza;
    }

    atacar() {
        const daño = this.arma.atacar() + this.#fuerza;
        console.log(`${this.nombre} golpea con fuerza causando ${daño} de daño.`);
        return daño;
    }
}


class Mago extends Personaje {
    #mana;

    constructor(nombre, nivel, puntosDeVida, mana, arma) {
        super(nombre, nivel, puntosDeVida, arma);
        this.#mana = mana;
    }

    atacar() {
        if (this.#mana >= 10) {
            this.#mana -= 10;
            const daño = this.arma.atacar() + this.nivel * 2;
            console.log(`${this.nombre} lanza magia causando ${daño} de daño. Mana restante: ${this.#mana}`);
            return daño;
        } else {
            console.log(`${this.nombre} no tiene mana suficiente.`);
            return 0;
        }
    }
}

class Cofre {
    #armas = [];

    constructor(armas = []) {
        this.#armas = armas;
    }

    mostrarArmas() {
        console.log("Armas en el cofre:");
        this.#armas.forEach(a => console.log("- " + a.nombre));
    }

    recogerArma(nombre, personaje) {
        const index = this.#armas.findIndex(a => a.nombre === nombre);

        if (index !== -1) {
            const arma = this.#armas.splice(index, 1)[0];
            personaje.equiparArma(arma);
        } else {
            console.log(`No se encontró el arma ${nombre}.`);
        }
    }
}

class Espada {
    #nombre = "Espada";
    atacar() {
        return 15;
    }
    get nombre() {
        return this.#nombre;
    }
}

class Hacha {
    #nombre = "Hacha";
    atacar() {
        return 20;
    }
    get nombre() {
        return this.#nombre;
    }
}

class BastonMagico {
    #nombre = "Bastón Mágico";
    atacar() {
        return 25;
    }
    get nombre() {
        return this.#nombre;
    }
}

class SinArma {
    #nombre = "Sin arma";
    atacar() {
        return 5;
    }
    get nombre() {
        return this.#nombre;
    }
}

const cofre = new Cofre([
    new Espada(),
    new Hacha(),
    new BastonMagico()
]);

const personajes = [
    new Guerrero("Aragorn", 5, 120, 15),
    new Mago("Gandalf", 10, 80, 100),
    new Guerrero("Leonidas", 3, 150, 20),
    new Mago("Merlin", 7, 70, 80)
];

cofre.mostrarArmas();

cofre.recogerArma("Espada", personajes[0]);
cofre.recogerArma("Bastón Mágico", personajes[1]);
cofre.recogerArma("Hacha", personajes[2]);

console.log("\n=== ATAQUES ===");
personajes.forEach(p => p.atacar());

personajes.sort((a, b) => a - b);

console.log("\n=== ORDENADOS POR NIVEL ===");
personajes.forEach(p => console.log(p.toString()));
