let num1 =  Number(prompt("Ingrese un número"));
let num2 =  Number(prompt("Ingrese otro número"));

num1 += num2;
alert(num1);

num1 -= num2;
alert(num1);

num1 *= num2;
alert(num1);

num1 /= num2;
alert(num1);

num1 %= num2;
alert(num1);




if (num1 % 2 == 0) {
    alert("El numero es par");
} else {
    alert("El numero es impar");
}

if (num2 === 0) {
    alert("No se puede dividir entre 0");
}


if (num1 >= num2) {
    alert("El primer número es mayor o igual que el segundo");
} else {
    alert("El primer número es menor que el segundo");
}