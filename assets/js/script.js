const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {

        // 1. Gestionar estilo de los botones
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // 2. Obtener el filtro seleccionado
        const filterValue = button.getAttribute('data-filter');

        // 3. Filtrar cartas
        projectCards.forEach(card => {
            // Obtenemos las categorías de la carta: "js api"
            const cardCategoriesStr = card.getAttribute('data-category');

            // Convertimos el string en un array: ["js", "api"]
            // Esto evita errores si una palabra contiene a otra (ej: "javascript" vs "java")
            const cardCategories = cardCategoriesStr.split(' ');

            // Lógica: Si el filtro es 'all' O si la lista de categorías incluye el filtro
            if (filterValue === 'all' || cardCategories.includes(filterValue)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});