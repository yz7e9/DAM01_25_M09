const numeros = [1, 2, 3, 4, 4, 5, 6, 6, 7];
const numerosUnicos = eliminarDuplicados(numeros);
console.log(numerosUnicos); // Output: [1, 2, 3, 4, 5, 6, 7]

function eliminarDuplicados(arrayNum) {
    const setNum = new Set(arrayNum);
    return Array.from(setNum);
}



const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
console.log(tienenElementosEnComun(array1, array2)); // Output: true

function tienenElementosEnComun(array1, array2) {
    const set1 = new Set(array1);
    const set2 = new Set(array2);
    let result = false;

    for (const element of set2) {
        if (set1.has(element)) {
            result = true;
        }
    }
    return result;
}