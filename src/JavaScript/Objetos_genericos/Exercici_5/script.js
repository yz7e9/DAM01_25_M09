const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    encendido: false,
    kilometraje: 0,

    arrancar() {
        this.encendido = true;
        console.log("El coche está encendido.");
    },

    apagar() {
        this.encendido = false;
        console.log("El coche está apagado.");
    },

    recorrer(km) {
        this.kilometraje += km;
        console.log(`El coche ha recorrido ${km} km. Kilometraje total: ${this.kilometraje} km.`);
    }
};

// Pruebas
coche.arrancar();
coche.recorrer(50);
coche.recorrer(120);
coche.apagar();
