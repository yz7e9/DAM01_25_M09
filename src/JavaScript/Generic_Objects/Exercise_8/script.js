const modulos = ["m02", "m03", "m04", "m05", "m06", "m07", "m08", "FOL"]
const alumnoNotas = [[8, 9, 4], [9, 10], [6, 8, 10], [4], [8, 4, 7], [], [7, 5, 9, 10], [10]]

const notasPorModulo = new Map();

modulos.forEach((modulo, index) => {
    notasPorModulo.set(modulo, alumnoNotas[index]);
});
console.log(new Map(notasPorModulo));

notasPorModulo.set("m07", [7.5, 6]);
console.log(new Map(notasPorModulo));

const clavesModulos = new Set(notasPorModulo.keys());
console.log(clavesModulos);

const alumno = Object.fromEntries(notasPorModulo);
console.log(alumno);