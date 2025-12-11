// 1. Seleccionamos los elementos
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.card');

// 2. Añadimos evento click a cada botón
filterButtons.forEach(button => {
    button.addEventListener('click', () => {

        // a. Quitamos la clase 'active' de todos y la ponemos en el clickeado
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // b. Obtenemos el valor del filtro (ej: 'js', 'all')
        const filterValue = button.getAttribute('data-filter');

        // c. Recorremos las cartas para mostrar u ocultar
        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');

            if (filterValue === 'all' || filterValue === cardCategory) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});