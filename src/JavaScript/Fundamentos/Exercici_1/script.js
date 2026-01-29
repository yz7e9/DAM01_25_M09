document.getElementById("exercise1").addEventListener("click", () => exercises(1));
document.getElementById("exercise2").addEventListener("click", () => exercises(2));
document.getElementById("exercise3").addEventListener("click", () => exercises(3));
document.getElementById("exercise4").addEventListener("click", () => exercises(4));
document.getElementById("exercise5").addEventListener("click", () => exercises(5));
document.getElementById("exercise6").addEventListener("click", () => exercises(6));

/**
 * Main function to call other functions according to `exercise`
 * @param {Number} exercise Operation number
 */
function exercises(exercise) {
    switch (exercise) {
        case 1: {
            const n1 = parseInt(prompt("Introdueix el primer número:"))
            const n2 = parseInt(prompt("Introdueix el segon número:"))
            if (n1 && n2) {
                const result = compareNums(n1, n2)
                document.getElementById("resultado1").textContent = result ? "El número màxim és: " + result : "Els dos nombres són iguals."
            }
            break;
        }
        case 2: {
            const n1 = parseInt(prompt("Introdueix el primer número:"))
            const n2 = parseInt(prompt("Introdueix el segon número:"))
            if (n1 && n2) {
                const result = multiplication2Num(n1, n2)
                document.getElementById("resultado2").textContent = "La multiplicació de " + n1 + " i " + n2 + " és: " + result
            }
            break;
        }
        case 3: {
            const n1 = parseInt(prompt("Introdueix el primer número:"))
            const n2 = parseInt(prompt("Introdueix el segon número:"))
            const n3 = parseInt(prompt("Introdueix el tercer número:"))
            if (n1 && n2 && n3) {
                const result = multiplication3Num(n1, n2, n3)
                document.getElementById("resultado3").textContent = "La multiplicació de " + n1 + ", " + n2 + " i " + n3 + " és: " + result
            }
            break;
        }
        case 4: {
            const n1 = parseFloat(prompt("Introdueix la primera nota:")).toFixed(1)
            const n2 = parseFloat(prompt("Introdueix la segona nota:")).toFixed(1)
            const n3 = parseFloat(prompt("Introdueix la tercera nota:")).toFixed(1)
            if (n1 && n2 && n3) {
                const result = average3Grades(n1, n2, n3)
                document.getElementById("resultado4").textContent = "La mitjana de la nota " + n1 + ", " + n2 + " i " + n3 + " és: " + result
            }
            break;
        }
        case 5: {
            let results = [];
            for (let i = 1; i <= 10000; i++) {
                if (sumCube(i)) results.push(i)
            }
            document.getElementById("resultado5").textContent = results
            break;
        }
        case 6: {
            // Reference: https://stackoverflow.com/questions/2917175/return-multiple-values-in-javascript
            const num = prompt("Introdueix el número:")
            if (num) {
                const {status, result} = calcCube(num);
                if (!status) {
                    console.error("[ERROR] El tipus de dada introduïda no és un número")
                    alert("El tipus de dada introduïda no és un número")
                } else {
                    document.getElementById("resultado6").textContent = result
                }
            }
        }
        default: 
            break;
    }
}

/**
 * Compare two numbers
 * @author Yu Zhang
 * @param {Number} n1 The first number
 * @param {Number} n2 The second number
 * @returns The biggest number, if is equal, returns undefined
 */
function compareNums(n1, n2) {
    if (n1 > n2) return n1
    else if (n1 < n2) return n2
    else return;
}

/**
 * Multiplication of two numbers without using operator
 * @author Yu Zhang
 * @param {Number} n1 The first number
 * @param {Number} n2 The second number
 * @returns The result of the multiplication
 */
function multiplication2Num(n1, n2) {
    let result = 0
    for (let i = 0; i < n1; i++) {
        result += n2
    }
    return result
}

/**
 * Multiplication of three numbers
 * @author Yu Zhang
 * @param {Number} n1 The first number
 * @param {Number} n2 The second number
 * @param {Number} n3 The third number
 * @returns The result of the multiplication
 */
function multiplication3Num(n1, n2, n3) {
    return multiplication2Num(multiplication2Num(n1, n2), n3)
}

/**
 * Calculate average of the three grades
 * @author Yu Zhang
 * @param {Number} g1 The first grade
 * @param {Number} g2 The second grade
 * @param {Number} g3 The third grade
 * @returns The average of the three grades
 */
function average3Grades(g1, g2, g3) {
    const grades = g1+g2+g3
    return (grades / 3).toFixed(1)
}

/**
 * Check if the sum of the cube of each of its digits that gives the same number
 * @author Yu Zhang
 * @param {Number} num The number to check
 * @returns Boolean that indicates if gives the same number or not
 */
function sumCube(num) {
    const numStr = num.toString();
    let sum = 0;
    for (let i = 0; i < numStr.length; i++) {
        const digit = parseInt(numStr[i]);
        sum += Math.pow(digit, 3);
    }
    return sum === num;
}

/**
 * Main function to check if the sum of the cube of each of its digits that gives the same number
 * @author Alicia Vazquez
 * @param {Number} num The number to check
 */
function moduleCalc() {
    let result = 0
    for (let i = 0; i < 10000; i++) {
        result = calcSumPow(i);
        if (result == i) {
            console.log("Bingo: " + result)
        }
        result = 0
    }
}

/**
 * Check if the sum of the cube of each of its digits that gives the same number
 * @author Alicia Vazquez
 * @param {Number} num The number to check
 * @returns The result of the sum of the cube of each of its digits
 */
function calcSumPow(i) {
    let result = 0
    let rest = 0
    let div = i
    while (div >= 9) {
        rest = div % 10
        div = parseInt(div/10)
        result += rest * rest * rest
    }
    return result += multiplication3Num(div)
}

/**
 * Calculate the cube of a number
 * @author Yu Zhang
 * @param {*} num The number to calculate the cube
 * @returns `status`: Boolean that indicates the status of the calculation
 * @returns `result`: The result of the calculation
 */
function calcCube(num) {
    let status;
    let result = 0;
    if (!isNaN(parseInt(num))) { // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
        result = Math.pow(parseInt(num), 3);
        status = true;
    } else {
        status = false;
    }
    return {
        status: status,
        result: result
    }
}