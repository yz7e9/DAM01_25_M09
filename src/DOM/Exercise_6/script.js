/**
 * Función para crear las teclas numéricas
 * 
 * @author Yu Zhang
 * @param {Number} num_teclados Nombre de teclados que se quiere crear
*/
function crearTeclado(num_teclados) {
    const contenedor = document.getElementById('contenedor');
    
    for (let i = 1; i <= num_teclados; i++) {
        const tecla = document.createElement('div');
        tecla.classList.add('tecla');
        tecla.textContent = i;
        
        if (i % 2 === 0) tecla.classList.add('par');
        if (i % 3 === 0) tecla.classList.add('multiplo3');
        
        contenedor.appendChild(tecla);
    }
}

let teclados;
do {    
    teclados = parseInt(prompt("¿Cuántas teclas quieres crear? (1-30)"));

    if (teclados >= 1 && teclados <= 30) {
        crearTeclado(teclados);
    } else {
        alert("Número inválido. Debes introducir un número entre 1 y 30.");
    }

} while (teclados < 1 || teclados > 30);