document.getElementById("exercise1").addEventListener("click", () => exercises(1));
document.getElementById("exercise2").addEventListener("click", () => exercises(2));

const secretNumAnswer = Math.floor(Math.random() * 101);
let secretNumTimes = 0;

/**
 * Main function to call other functions according to `exercise`
 * @author Yu Zhang
 * @param {Number} exercise Operation number
 */
function exercises(exercise) {
    switch (exercise) {
        case 1: {
            const n1 = parseInt(prompt("Introdueix el rang d'inici:"));
            const n2 = parseInt(prompt("Introdueix el rang del final:"));
            if (n1 && n2) {
                const primeNums = [];
                for (let i = n1; i <= n2; i++) {
                    if (isPrime(i)) {
                        primeNums.push(i);
                    }
                }
                document.getElementById("resultado1").textContent = primeNums.length > 0 ? primeNums : "Els rang indicat no n'hi ha números primers.";
            }
            break;
        }
        case 2: {
            let n1 = parseInt(prompt("Introdueix el número:"))
            if (n1) {
                const {match, greaterLess} = secretNum(n1);
                if (match) {
                    document.getElementById("resultado2").textContent = `Bingo! El resultat és: ${n1}
                        Intents: ${secretNumTimes}
                    `;
                } else {
                    document.getElementById("resultado2").textContent = (greaterLess == '>') ? "El resultat és menor" : "El resultat és major";
                }
            }
            break;
        }
        default: 
            break;
    }
}

/**
 * Determines whether a given number is a prime number.
 * @param {Number} num The number that is likely to check.
 * @returns Returns `true` if the number is prime, otherwise `false`.
 */
function isPrime(num) {
    let sqrtNum = Math.floor(Math.sqrt(num));
    let isPrime = num != 1;
    for(let i = 2; i <= sqrtNum; i++) {
        if(num % i == 0) {
            isPrime = false;
        }
    }
    return isPrime;
}

/**
 * Checks whether the given number matches the secret number.
 *
 * @param {Number} num - The number to compare with the secret number.
 * @returns An object indicating whether the number matches the secret number.
 * If it does not match, `greaterLess` will be `'>'` if the number is greater
 * or `'<'` if it is less. When matched, `greaterLess` is an empty string.
 */
function secretNum(num) {
    let match = false;
    let greaterLess = '';
    secretNumTimes++
    if (num == secretNumAnswer) {
        match = true;
    } else if (num > secretNumAnswer) {
        greaterLess = '>';
    } else {
        greaterLess = '<';
    };
    return {
        match: match,
        greaterLess: greaterLess
    };
}