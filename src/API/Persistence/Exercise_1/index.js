// Función para obtener el valor de una cookie
function getCookie(name) {
    const value = document.cookie
        .split('; ')
        .find(c => c.startsWith(name + '='))
        ?.split('=')[1];

    return value ? decodeURIComponent(value) : null;
}

function changeConfig() {
    document.body.style.color = getCookie("color") ? getCookie("color") : "#000";
    document.body.style.color = getCookie("color") ? getCookie("color") : "#000";
    document.body.style.backgroundColor = getCookie("bgColor") ? getCookie("bgColor") : "#fff";
}

// Escuchamos el mensaje de la ventana hija
window.addEventListener("message", function (event) {
    if (event.data === "config_actualizada") {
        changeConfig();
    }
});

function init() {
    const visited = getCookie("visited");
    if (!visited) {
        // Abrimos el popup
        window.open('popUP.html', 'Config', 'width=600,height=400');
    }
    // Aplicamos lo que ya haya (si existe)
    changeConfig();
}

// Ejecutamos al cargar
window.document.addEventListener("DOMContentLoaded", init)