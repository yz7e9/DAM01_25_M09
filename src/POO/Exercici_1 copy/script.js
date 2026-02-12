class TarjetaCredito {
    #numero;
    #titular;
    #caducidad;
    #cvv;
    #pin;
    #estado;
    #saldo;

    constructor(numero, titular, caducidad, cvv, pin) {
        // Referencia: https://es.stackoverflow.com/questions/226026/
        if (!/^\d{4}$/.test(pin)) { 
            throw new Error("El PIN debe tener exactamente 4 dígitos.");
        }

        this.#numero = String(numero);
        this.#titular = titular;
        this.#caducidad = new Date(caducidad);
        this.#cvv = String(cvv);
        this.#pin = String(pin);
        this.#estado = false;
        this.#saldo = 0;
    }

    /* Getters & Setters */
    get numero() { return this.#numero; }
    get titular() { return this.#titular; }
    get caducidad() { return this.#caducidad; }
    get estado() { return this.#estado ? "Activa" : "Inactiva"; }
    get saldo() { return this.#saldo; }
    
    /* Metodos */
    activar(pin) {
        if (pin === this.#pin) {
            this.#estado = true;
            return "Tarjeta activada.";
        }
        return "PIN incorrecto.";
    }
    anular(pin) {
        if (pin === this.#pin) {
            this.#estado = false;
            return "Tarjeta anulada.";
        }
        return "PIN incorrecto.";
    }
    ingresar(cantidad) {
        if (!this.#estado) return "Tarjeta inactiva.";
        if (cantidad <= 0) return "Cantidad inválida.";
        this.#saldo += cantidad;
        return `Ingreso realizado. Saldo: ${this.#saldo}€`;
    }

    pagar(cantidad) {
        if (!this.#estado) return "Tarjeta inactiva.";
        if (cantidad <= 0) return "Cantidad inválida.";
        if (cantidad > this.#saldo) return "Saldo insuficiente.";
        this.#saldo -= cantidad;
        return `Pago realizado. Saldo: ${this.#saldo}€`;
    }
    cambiarPIN(pinActual, pinNuevo) {
        if (pinActual !== this.#pin) {
            console.log("PIN actual incorrecto.");
            return;
        }

        if (!/^\d{4}$/.test(pinNuevo)) {
            console.log("El nuevo PIN debe tener exactamente 4 dígitos.");
            return;
        }

        this.#pin = pinNuevo;
        console.log("PIN cambiado correctamente.");
    }
    info() {
        return `Titular: ${this.#titular}
            Número: ${this.#numero}
            Estado: ${this.estado}
            Saldo: ${this.#saldo}€
        `;
    }
}

/* const tarjeta1 = new TarjetaCredito("1234567812345678", "Juan Pérez", "2027-12", "123", "123", 2000);
const tarjeta2 = new TarjetaCredito("8765432187654321", "Ana López", "2026-06", "456", "0001", 1500);
const tarjeta3 = new TarjetaCredito("1111222233334444", "Carlos Ruiz", "2028-03", "789", "9999", 3000); */

const tarjetas = [];

function crearTarjeta() {
    try {
        const numero = document.getElementById("numero").value;
        const titular = document.getElementById("titular").value;
        const caducidad = document.getElementById("caducidad").value;
        const cvv = document.getElementById("cvv").value;
        const pin = document.getElementById("pin").value;
        
        const existe = tarjetas.some(t => t.numero === numero);
        if (existe) {
            throw new Error("Ya existe una tarjeta con ese número.");
        }

        const nuevaTarjeta = new TarjetaCredito(numero, titular, caducidad, cvv, pin);
        tarjetas.push(nuevaTarjeta);

        actualizarSelector();
        mostrar("Tarjeta creada correctamente.");
    } catch (error) {
        mostrar(error.message);
    }
}

function actualizarSelector() {
    const selector = document.getElementById("selectorTarjetas");
    selector.innerHTML = "";

    tarjetas.forEach((tarjeta, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.text = tarjeta.numero;
        selector.appendChild(option);
    });
}

function obtenerTarjetaSeleccionada() {
    const index = document.getElementById("selectorTarjetas").value;
    return tarjetas[index];
}

function activar() {
    const tarjeta = obtenerTarjetaSeleccionada();
    const pin = document.getElementById("pinOperacion").value;
    mostrar(tarjeta.activar(pin));
}

function anular() {
    const tarjeta = obtenerTarjetaSeleccionada();
    const pin = document.getElementById("pinOperacion").value;
    mostrar(tarjeta.anular(pin));
}

function ingresar() {
    const tarjeta = obtenerTarjetaSeleccionada();
    const cantidad = Number(document.getElementById("cantidad").value);
    mostrar(tarjeta.ingresar(cantidad));
}

function pagar() {
    const tarjeta = obtenerTarjetaSeleccionada();
    const cantidad = Number(document.getElementById("cantidad").value);
    mostrar(tarjeta.pagar(cantidad));
}

function verInfo() {
    const tarjeta = obtenerTarjetaSeleccionada();
    mostrar(tarjeta.info());
}

function mostrar(mensaje) {
    document.getElementById("resultado").innerText = mensaje;
}