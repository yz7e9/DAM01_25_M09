function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function saveConfig() {
    const bgColor = document.getElementById("background-color").value;
    const color = document.getElementById("font-color").value;

    console.log(bgColor);
    console.log(color);

    setCookie("bgColor", bgColor, 7);
    setCookie("color", color, 7);
    setCookie("visited", true, 7);

    // Avisamos a la ventana padre ANTES de cerrar
    if (window.opener) {
        window.opener.postMessage("config_actualizada", "*");
    }
    
    window.close();
}

document.getElementById("config-form").addEventListener("submit", function (event) {
    event.preventDefault();
    saveConfig();
});