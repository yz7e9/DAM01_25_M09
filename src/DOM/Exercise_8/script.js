const tablero = document.getElementById("tablero");

for (let fila = 0; fila < 8; fila++) {
    for (let col = 0; col < 8; col++) {
        const celda = document.createElement("div");
        celda.classList.add("celda");
        
        if ((fila + col) % 2 === 0) {
            celda.classList.add("negra");
        } else {
            celda.classList.add("blanca");
        }
        
        if (fila === 0 || fila === 1) {
            celda.textContent = "O";
        } else if (fila === 6 || fila === 7) {
            celda.textContent = "X";
        }

        tablero.appendChild(celda);
    }
}