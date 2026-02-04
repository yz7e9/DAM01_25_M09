const tvSamsung = {
    nombre: "TV Samsung 42”",
    categoria: "Televisores",
    unidades: 4,
    precio: 345.95,
    getImporte: function () {
        return this.unidades * this.precio;
    }
};

function addCaracteristicas(tv) {
    let continuar = true;

    while (continuar) {
        let propiedad = prompt(
            "Introduce el nombre de la característica:"
        );

        if (propiedad !== null && propiedad.trim() !== "") {
            let valor = prompt(`Introduce el valor para "${propiedad}":`);
            tv[propiedad] = valor;
            continuar = confirm("¿Quieres añadir otra característica?");
        } else {
            continuar = false;
        }
    }
}

function comprobarPropiedades(tv) {
    const propiedadesTV = [
        "pulgadas",
        "resolucion",
        "smartTV",
        "hdmi",
        "usb",
        "wifi",
        "marca",
        "modelo"
    ];

    propiedadesTV.forEach(prop => {
        if (!tv.hasOwnProperty(prop)) {
            tv[prop] = "default value";
        }
    });
}

function mostrarTV(tv) {
    const contenedor = document.getElementById("tvInfo");
    let html = "<h2>Información del televisor</h2><ul>";

    for (const key in tv) {
        if (typeof tv[key] !== "function") {
            html += `<li><strong>${key}:</strong> ${tv[key]}</li>`;
        }
    }

    html += `<li><strong>Importe total:</strong> ${tv.getImporte()} €</li>`;
    html += "</ul>";

    contenedor.innerHTML = html;
}

addCaracteristicas(tvSamsung);
comprobarPropiedades(tvSamsung);
mostrarTV(tvSamsung);