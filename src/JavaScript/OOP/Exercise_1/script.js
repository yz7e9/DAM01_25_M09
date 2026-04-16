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
            console.log("Tarjeta activada correctamente.");
        } else {
            console.error("PIN incorrecto.");
        }
    }
    anular(pin) {
        if (pin === this.#pin) {
            this.#estado = false;
            console.log("Tarjeta anulada correctamente.");
        } else {
            console.error("PIN incorrecto.");
        }
    }
    pagar(cantidad) {
        if (!this.#estado) {
            console.log("La tarjeta está inactiva.");
            return;
        }
        if (cantidad <= 0) {
            console.error("Cantidad inválida.");
            return;
        }
        this.#saldo -= cantidad;
        console.log(`Pago realizado: ${cantidad}€. Saldo actual: ${this.#saldo}€`);
    }

    ingresar(cantidad) {
        if (!this.#estado) {
            console.log("La tarjeta está inactiva.");
            return;
        }
        if (cantidad <= 0) {
            console.error("Cantidad inválida.");
            return;
        }
        this.#saldo += cantidad;
        console.log(`Ingreso realizado: ${cantidad}€. Saldo actual: ${this.#saldo}€`);
    }
    cambiarPIN(pinActual, pinNuevo) {
        if (pinActual !== this.#pin) {
            console.error("PIN actual incorrecto.");
            return;
        }

        if (!/^\d{4}$/.test(pinNuevo)) {
            console.error("El nuevo PIN debe tener exactamente 4 dígitos.");
            return;
        }

        this.#pin = pinNuevo;
        console.log("PIN cambiado correctamente.");
    }
}

try {
    console.log("===== CREACIÓN DE TARJETAS =====");
    const tarjeta1 = new TarjetaCredito("1234567812345678", "Juan Pérez", "2027-12", "123", "1234");
    const tarjeta2 = new TarjetaCredito("8765432187654321", "Ana López", "2026-06", "456", "0001");
    const tarjeta3 = new TarjetaCredito("1111222233334444", "Carlos Ruiz", "2028-03", "789", "9999");
    
    console.log(`${tarjeta1.numero}; ${tarjeta1.estado}`)
    console.log(`${tarjeta2.numero}; ${tarjeta2.estado}`)
    console.log(`${tarjeta3.numero}; ${tarjeta3.estado}`)
    
    console.log("===== PRUEBAS MÉTODO ACTIVAR() =====");

    tarjeta1.activar("0000");  // PIN incorrecto
    tarjeta1.activar("1234");  // PIN correcto
    tarjeta1.activar("1234");  // Intentar activar ya activa
    
    console.log("===== PRUEBAS MÉTODO INGRESAR() =====");

    tarjeta3.ingresar(100);   // Intento sin activar
    tarjeta3.activar("9999");
    tarjeta3.ingresar(500);   // Ingreso válido
    tarjeta3.ingresar(-50);   // Ingreso inválido
    
    console.log("===== PRUEBAS MÉTODO PAGAR() =====");
    
    tarjeta3.pagar(200);  // Pago válido
    tarjeta3.pagar(0);    // Pago inválido
    
    console.log("===== PRUEBA MÉTODO cambiarPIN() =====");
    
    tarjeta2.activar("0001");             // Activamos primero
    tarjeta2.cambiarPIN("0001", "4321");  // Cambio correcto
    
    console.log("===== PRUEBAS MÉTODO anular() =====");

    tarjeta2.anular("1111");  // PIN incorrecto
    tarjeta2.anular("4321");  // PIN correcto
    
    console.log("===== PRUEBA OPERACIÓN CON TARJETA ANULADA =====");

    tarjeta2.ingresar(100);  // No debería permitir
    
    console.log("===== ESTADO FINAL =====");
    console.log(`Tarjeta1: ${tarjeta1.estado}; Saldo: ${tarjeta1.saldo}`)
    console.log(`Tarjeta2: ${tarjeta2.estado}; Saldo: ${tarjeta2.saldo}`)
    console.log(`Tarjeta3: ${tarjeta3.estado}; Saldo: ${tarjeta3.saldo}`)
} catch (error) {
    console.error("Error:", error.message);
}

try {
    console.log("===== CREACIÓN CON PIN INVÁLIDO =====");
    const tarjetaError = new TarjetaCredito("9999888877776666", "Ana López", "2027-05-20", "999", "12"); // PIN inválido
} catch (error) {
    console.error("Error esperado:", error.message);
}
