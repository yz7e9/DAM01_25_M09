const json = `[
    { "nombre": "Juan", "apellido": "González Pérez", "dni": "12345678A" },
    { "nombre": "María", "apellido": "López García", "dni": "23456789B" },
    { "nombre": "Pedro", "apellido": "Martínez Ruiz", "dni": "34567890C" },
    { "nombre": "Ana", "apellido": "Sánchez Jiménez", "dni": "45678901D" },
    { "nombre": "David", "apellido": "Pérez Fernández", "dni": "56789012E" },
    { "nombre": "Laura", "apellido": "González Martínez", "dni": "67890123F" },
    { "nombre": "Carlos", "apellido": "Gómez López", "dni": "78901234G" },
    { "nombre": "Elena", "apellido": "Fernández García", "dni": "89012345H" },
    { "nombre": "Miguel", "apellido": "Martínez López", "dni": "90123456I" },
    { "nombre": "Sara", "apellido": "Jiménez Sánchez", "dni": "01234567J" }
]`;

const jso = JSON.parse(json)

console.table(jso)

for (let alumno of jso) {
    const liniaTabla = document.createElement("tr")
    for (let data in alumno) {
        const seccionTabla = document.createElement("td")
        seccionTabla.innerText = alumno[data]
        liniaTabla.append(seccionTabla)
    }
    document.getElementById("tabla").append(liniaTabla)
}