const VALID_USER = "admin";
const VALID_PASSWORD = "1234";
 

let user = prompt("Ingrese su usuario:");
let password = prompt("Ingrese su contraseña:");

const isBlocked = false;

if (isBlocked == true) {
    alert("Acceso denegado: cuenta bloqueada");
} 




if (user === "" || password === "") {
    alert("Por favor, complete todos los campos");

} else if (user === VALID_USER && password === VALID_PASSWORD) {
    alert("Acceso concedido");

} else if (user !== VALID_USER) {
    alert("Usuario incorrecto");

} else if (password !== VALID_PASSWORD) {
    alert("Contraseña incorrecta");

} else {
    alert("Acceso denegado");
}