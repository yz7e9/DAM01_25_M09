document.getElementById("ejercicio1").addEventListener('click', () => ejercicios(1));
document.getElementById("ejercicio2").addEventListener('click', function () {
    alert('Obre la consola per provar la funció.');
    console.info('Prova aquí el funció ordenDatos()')
});
document.getElementById("ejercicio3").addEventListener('click', () => ejercicios(3));

/**
 * Función principal para llamar otras funciones según el `ejercicio`
 * @author Yu Zhang
 * @param {Number} ejercicio Número de operación
 */
function ejercicios(ejercicio) {
    switch (ejercicio) {
        case 1: {
            const numeros = prompt("Introdueix els valors separats per una coma:").trim().split(",").map(item => parseInt(item));
            if (numeros) {
                const resultado = sumarPares(numeros);
                document.getElementById("resultado1").textContent = resultado;
            };
            break;
        };
        case 3: {
            const strings = prompt("Introdueix els valors separats per una coma:").trim().split(",").map(item => item.trim());
            if (strings) {
                const resultado = filterWords(strings);
                document.getElementById("resultado3").textContent = resultado;
            };
        };
        default: 
            break;
    };
}

/**
 * Suma todos los números pares de un array
 * @param {Number[]} arrayDeNums Array de números a procesar.
 * @returns {number} La suma de todos los números pares del array
 * 
 * @example sumarPares([2,4,5,6,7,8,3,1,10,4])
 */
function sumarPares(arrayDeNums) {
    let resultado = 0
    for (const num of arrayDeNums) {
        if (num % 2 == 0) {
            resultado += num;
        }
    }
    return resultado;
}

/**
 * Reordena un array de datos personales y académicos, 
 * calcula la nota media y devuelve la información con el orden: nombre, apellido, nota1, nota2, nota3, nota4, notaMedia
 * 
 * @param {Array} arrayOfDatos Array que contiene el apellido, cuatro notas y el nombre.
 * @returns Cadena con el orden: nombre, apellido, nota1, nota2, nota3, nota4, notaMedia
 * 
 * @example ordenDatos(["Rodriguez", "8", 9, '5',4, 'Clara'])
 */
function ordenDatos(arrayOfDatos) {
    const [apellido, nota1, nota2, nota3, nota4, nombre] = arrayOfDatos;
    const notaMedia = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4;
    return [nombre, apellido, nota1, nota2, nota3, nota4, notaMedia].join(",");
}

function filterWords(words) {
  return words.filter(word => !word.startsWith("Z"));
}
