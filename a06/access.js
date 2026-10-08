let name = prompt("Ingrese su nombre");
let age = Number(prompt("Ingrese su edad"));
const nameAnom = (name ?? "").trim() || "Anónimo";

alert(typeof nameAnom);
alert(typeof age);

if (isNaN(age) || age < 0) {
    alert("Edad no válida");
} else if (age >= 18) {
    alert("Hola " + nameAnom + ", eres legalmente mayor de edad");
} else {
    alert("Hola " + nameAnom + ", eres menor de edad");
}

console.log("Nombre: " + nameAnom);
console.log("Edad: " + age);

