function readNumbers() {
    let sum = 0;
    let count = 0;
    let input = prompt("Ingrese un número (o 'STOP' para terminar):");


    while (input !== "" && input.toUpperCase() !== "STOP") {
            
        // Validar si el input es un número
             if(isNaN(input) || input < 0) {
                alert("Por favor, ingrese un número válido.");
            } else {
                // Convertir el input a número y acumular la suma y el conteo
                sum += input;
                count++;
            }
            input = prompt("Ingrese un número (o 'STOP' para terminar):");

        }
        return { sum, count };
}

const result = readNumbers();
alert("Suma total: " + result.sum + "\nCantidad de números ingresados: " + result.count);