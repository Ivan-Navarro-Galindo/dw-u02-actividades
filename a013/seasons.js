let month = prompt("Ingrese el mes: ");
alert(getSeason(month));



function getSeason(month) {
    switch (month) {
        case "Enero":
        case "Febrero":
        case "Marzo":
            return "Invierno";
        case "Abril":
        case "Mayo":
        case "Junio":
            return "Primavera";
        case "Julio":
        case "Agosto":
        case "Septiembre":
            return "Verano";
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
            return "Otoño";
        default:
            return "Mes no válido";
    }
}