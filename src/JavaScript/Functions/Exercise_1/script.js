document.getElementById("ejercicio1").addEventListener("click", () => ejercicios(1));
document.getElementById("ejercicio2").addEventListener("click", () => ejercicios(2));
document.getElementById("ejercicio3").addEventListener("click", () => ejercicios(3));
document.getElementById("ejercicio4").addEventListener("click", function () {
    alert('Obre la consola per provar la funció.');
    console.info('Prova aquí el funció concatenarNombres()');
});

/**
 * Función principal para llamar otras funciones según el `ejercicio`
 * @author Yu Zhang
 * @param {Number} ejercicio Número de operación
 */
function ejercicios(ejercicio) {
    switch (ejercicio) {
        case 1: {
            const nombre = prompt("Introduzca tu nombre:");
            const saludo = prompt('Introduzca el saludo (defecto: "Hola"):');
            if (nombre) {
                const resultado = saludar(nombre, saludo);
                document.getElementById("resultado1").textContent = resultado;
            };
            break;
        };
        case 2: {
            const n1 = parseInt(prompt("Introduzca el primer número:"));
            const n2 = parseInt(prompt("Introduzca el segon número:"));
            const operacion = prompt("Introduzca la operación que quieres hacer (por defecto suma) ['+','-','*','/']: ");
            if (n1 && n2) {
                const resultado = calcular(n1, n2, operacion);
                document.getElementById("resultado2").textContent = resultado;
            };
            break;
        };
        case 3: {
            const param = prompt("Introdueix els valors separats per una coma:").trim().split(",").map(item => item.trim()); // Referència: https://stackoverflow.com/questions/7695997/split-the-sentences-by-and-remove-surrounding-spaces
            if (param) {
                const resultado = calcularPromedio(...param);
                document.getElementById("resultado3").textContent = resultado;
            };
        };
        default: 
            break;
    };
}

/**
 * Retorna una salutació personalitzada.
 * @author Yu Zhang
 * @param {String} nombre El nom de la persona a saludar
 * @param {String} [saludo = "Hola"] El text de salutació (per defecte "Hola")
 * @returns La salutació completa
 */
function saludar(nombre, saludo = "Hola") {
    return saludo + " " + nombre
}

/**
 * Enumeración de operaciones matemáticas disponibles.
 * @author Yu Zhang
 * @readonly
 * @enum {String}
*/
/* Referència: https://elrincondelfront.substack.com/i/135989667/uso-de-enumerados */
const operaciones = {
    SUMA: '+',
    RESTA: '-',
    MULTIPLICACION: '*',
    DIVISION: '/'
}

/**
 * Realitza un càlcul matemàtic entre dos nombres segons l'operació indicada.
 * @author Yu Zhang
 * @param {Number} num1 Primer operand.
 * @param {Number} num2 Segon operand.
 * @param {String} [operacion=operaciones.SUMA] Operació a realitzar.
 * @returns {Number|undefined} El resultat de l'operació o `undefined` si no és vàlida.
 */
function calcular(num1, num2, operacion = operaciones.SUMA) {
    switch (operacion) {
        case operaciones.SUMA: return num1 + num2;
        case operaciones.RESTA: return num1 - num2;
        case operaciones.MULTIPLICACION: return num1 * num2
        case operaciones.DIVISION: return num1 / num2
        default:
            console.error("[ERROR] Operación no permitido.")
            break;
    }
}

/**
 * Calcula la mitjana aritmètica d'un conjunt de valors. Només es tenen en compte els valors numèrics.
 * @author Yu Zhang
 * @param {...*} arguments Valors a avaluar.
 * @returns {Number} La mitjana aritmètica dels valors numèrics proporcionats.
 */
function calcularPromedio() {
    let count = 0;
    let result = 0;
    for (let element of arguments) {
        if (!isNaN(parseInt(element))) {
            count++;
            result += parseInt(element);
        }
    }
    return result / count;
}

/**
 * Concatena tots els arguments de tipus cadena separant-los per comes
 * @param {...any} args - Llista d'arguments; només es tenen en compte els que són cadenes.
 * @returns {string} Una cadena amb tots els valors de tipus string concatenats i separats per ", ".
 */
function concatenarNombres(...args) {
    return args.filter(arg => typeof arg === 'string').join(", ");
}
