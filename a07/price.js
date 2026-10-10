let price = Number(prompt("Ingrese el precio del producto"));
let IVA = Number(prompt("Ingrese el porcentaje de IVA (por ejemplo, 21 para 21%)"));

if (isNaN(price) || price < 0 || isNaN(IVA) || IVA < 0) {
    alert("Precio o IVA no válidos");
} else {
    const IVAAmount = price * (IVA / 100);
    const totalPrice = price + IVAAmount;
}


cosole.log("Precio del producto: " + price);
console.log("IVA aplicado: " + IVAAmount);
console.log("Precio total con IVA: " + totalPrice);







