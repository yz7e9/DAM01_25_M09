const tvSamsung = {
    nombre: "TV Samsung 42”",
    categoria: "Televisores",
    unidades: 4,
    precio: 345.95,
    getImporte: function () {
        return this.unidades * this.precio;
    }
};

for (const key in tvSamsung) {
    if (typeof tvSamsung[key] !== "function") {
        console.log(key + ":", tvSamsung[key]);
    }
}

//console.log(tvSamsung.getImporte());
console.log("JSON:", JSON.stringify(tvSamsung));
