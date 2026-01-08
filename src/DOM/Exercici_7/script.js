// Configuración
const teclados = 9

let total = 0; // Variable para llevar el control del total ingresado

/**
 * Función para crear las teclas numéricas
 * 
 * @author Yu Zhang
 * @param {Number} num_teclados Nombre de teclados que se quiere crear
*/
function crearTecladoNumerico(num_teclados) {
    const contenedor = document.createElement('div');
    contenedor.classList.add('teclado');
    contenedor.id = 'teclado-numerico';
    
    for (let i = 1; i <= num_teclados; i++) {
        let tecla = document.createElement('div');
        tecla.classList.add('tecla');
        tecla.textContent = i;
        
        if (i % 2 === 0) {
            tecla.classList.add('par');
        }
        
        if (i % 3 === 0) {
            tecla.classList.add('multiplo3');
        }
        
        contenedor.appendChild(tecla);
    }
    
    let tecla0 = document.createElement('div');
    tecla0.classList.add('tecla', 'par');
    tecla0.textContent = 0;
    contenedor.appendChild(tecla0);

    document.getElementById('contenedor').appendChild(contenedor);
}

/**
 * Función para crear el teclado alfabético
 * 
 * @author Yu Zhang
*/
function crearTecladoAlfabetico() {
    const contenedor = document.createElement('div');
    contenedor.classList.add('teclado');
    contenedor.id = 'teclado-alfabetico';
    const letrasVocales = ['A', 'E', 'I', 'O', 'U'];
    
    for (let i = 65; i <= 90; i++) {
        let tecla = document.createElement('div');
        let letra = String.fromCharCode(i);
        tecla.classList.add('tecla');
        
        if (letrasVocales.includes(letra)) {
            tecla.classList.add('vocal');
        }

        tecla.textContent = letra;
        contenedor.appendChild(tecla);
    }
    document.getElementById('contenedor').appendChild(contenedor);
}

crearTecladoAlfabetico();
crearTecladoNumerico(teclados);