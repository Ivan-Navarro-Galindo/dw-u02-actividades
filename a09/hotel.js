let name = prompt("Ingrese su nombre") ?? "Cliente";
let age = Number(prompt("Ingrese su edad"));

let numNights = Number(prompt("Ingrese la cantidad de noches que desea hospedarse"));

let roomType = prompt("Ingrese el tipo de habitación (standard o superior)");

if (isNaN(age) || age < 0) {
    alert("Edad no válida");
}

if(age < 18) {
    alert("Lo siento, debe ser mayor de edad para reservar una habitación");
}

if (isNaN(numNights) || numNights <= 0) {
    alert("Cantidad de noches no válida");
} else if (numNights > 7) {
    totalPrice = totalPrice * 0.9;
}

if (roomType !== "standard" && roomType !== "superior") {
    alert("Tipo de habitación no válido");
}

if(roomType === "standard") {
    const pricePerNight = 60;
    const totalPrice = pricePerNight * numNights;
    alert("El precio total por " + numNights + " noches en una habitación estándar es:" + totalPrice);
} else if (roomType === "superior") {
    const pricePerNight = 90;
    const totalPrice = pricePerNight * numNights;
    alert("El precio total por " + numNights + " noches en una habitación superior es:" + totalPrice);
} else {
    alert("No se pudo calcular el precio debido a datos inválidos");
}
