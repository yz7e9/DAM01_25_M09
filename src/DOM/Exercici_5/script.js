// Configuración
const teclados = 9

/**
 * Función para crear las teclas numéricas
 * 
 * @author Yu Zhang
 * @param {Number} num_teclados Nombre de teclados que se quiere crear
*/
function crearTeclado(num_teclados) {
    const contenedor = document.getElementById('contenedor');
    
    for (let i = 1; i <= num_teclados; i++) {
        let tecla = document.createElement('div');
        tecla.classList.add('tecla');
        tecla.textContent = i;
        
        contenedor.appendChild(tecla);
    }
}

crearTeclado(teclados);