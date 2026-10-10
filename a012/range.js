let num = Number(prompt("Ingrese un numero:"));


//Logica principal y validacion de datos
if (isNaN(num) || num <= 0) {
    alert("Número no válido");  
} else {
    for (let i = 1; i < num; i++) {
        if (i % 2 === 0) {  
            alert("El número " + i + " es par");
        } else {
            alert("El número " + i + " es impar");
        }
    }
}

let par = 0;
let impar = 0;
let suma = 0;

//Numeros pares e impares
if (num % 2 === 0) {
    par++;
} else {
    impar++;
}

//Multiplos de 3
if (num % 3 === 0) {
    suma++; 
}


console.log("Cantidad de números pares: " + par);
console.log("Cantidad de números impares: " + impar);
console.log("Cantidad de múltiplos de 3: " + suma);
