let user = prompt("Ingrese su usuario:") ?? "Invitado";

let price = Number(prompt("Ingrese el precio del producto"));
let quantity = Number(prompt("Ingrese la cantidad de productos"));

let discountCode = (prompt("Ingrese el código de descuento (si tiene uno)") ?? "").trim();
let discount = 0;


//Calcular subtotal
let subtotal = price * quantity;

//Validación de descuentos

//CASO DE DESCUENTO
let total = subtotal * (1 - discount / 100);
//Ahorros
const savings = subtotal * discount / 100


if (discountCode === "JS10") {
    discount = 10;  // Aplicar un descuento del 10%
    total = subtotal * (1 - discount / 100);
} else if (discountCode === "JS20") {
    discount = 20; // Aplicar un descuento del 20%
    total = subtotal * (1 - discount / 100);
} else {
    alert("Código de descuento no válido o no ingresado. No se aplicará ningún descuento.");
}

//validar precio y cantidad

if (isNaN(price) || price < 0 || isNaN(quantity) || quantity <= 0) {
    alert("Precio o cantidad no válidos");
}




console.log(`Usuario: ${user}`);
console.log("Precio: " + price);
console.log("Cantidad: " + quantity);
console.log("Subtotal: " + subtotal);
console.log("Descuento aplicado: " + discount + "%");
console.log("Ahorros: " + savings);
console.log("Total a pagar: " + total);
