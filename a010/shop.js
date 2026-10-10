let user = prompt("Ingrese su usuario:") ?? "Invitado";

let price = Number(prompt("Ingrese el precio del producto"));
let quantity = Number(prompt("Ingrese la cantidad de productos"));

let discountCode = (prompt("Ingrese el código de descuento (si tiene uno)") ?? "").trim();
let discount = 0;


//Validación de descuentos

if (discountCode === "JS10") {
    discount = 10;  // Aplicar un descuento del 10%
} else if (discountCode === "JS20") {
    discount = 20; // Aplicar un descuento del 20%
} else {
    alert("Código de descuento no válido o no ingresado. No se aplicará ningún descuento.");
}
const savings = total * discount / 100
let total = subtotal * (1 - discount / 100);

//validar precio y cantidad

if (isNaN(price) || price < 0 || isNaN(quantity) || quantity <= 0) {
    alert("Precio o cantidad no válidos");
}

//calcular subtotal
let subtotal = price * quantity;