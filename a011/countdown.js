let num = Number(prompt("Ingrese un número:"));

if (isNaN(num) || num < 0) {
    alert("Número no válido");  
} else {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}

// Alternativa usando for 

for (let i = num; i >= 0; i--) {
    console.log(i);
    num--;
}