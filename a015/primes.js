function isPrime(num) {

    // Comprobación basica de los numeros primos, los números primos son mayores que 1 y no tienen divisores aparte de 1 y ellos mismos.
    if (!Number.isInteger(num) || num < 2) {
        return false;
    }

    let prime = true;

    for (let divisor = 2; divisor * divisor <= num; divisor++) {
        if (num % divisor === 0) {
            prime = false;
            break;
        }
    }
    return prime;
}

// Función para mostrar los números primos hasta un límite dado
function showPrimes(limit) {
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}