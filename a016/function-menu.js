
//Funcion con flecha de suma
const sum = (a, b) => a + b;   

function substract(a, b) {
    return a - b;
}

const multiply = (a, b) => a * b;

function divide(a, b) {
    if(b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}


//Función calculadora haciendo callback de operation
function calculate(a, b, operation) {
    switch (operation) {
        case "sum":
            return sum(a, b);
        case "substract":
            return substract(a,b);
        case "multiply":
            return multiply(a,b);
        case "divide":
            return divide(a,b);
        default:
            throw new Error("Operación no válida");
    }       
}