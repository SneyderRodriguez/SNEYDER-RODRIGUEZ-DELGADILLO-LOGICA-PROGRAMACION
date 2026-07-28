/*PRÁCTICA DE LOGICA COMPARANDO NUMEROS */
const prompt = require("prompt-sync")();

let unitemp = prompt("selecciona la unidad de temperatura a convertir (F), (K):  ").toUpperCase();
if (unitemp != "F" && unitemp != "K") {
    console.log("💢 Unidad de temperatura invalida")
    process.exit(0);
}
const celsius = Number(prompt("Ingresa un número:  "));
if (isNaN(celsius)) {
    console.log("⚠  Debes ingresar un número");
} else {
    switch (unitemp) {
        case "F":
            const F = (celsius * 9 / 5) + 32;
            console.log(`°C: ${celsius} = °F ${F}`);
            break;
        case "K":
            const K = celsius + 273.15;
            console.log(`°C: ${celsius} = °K ${K}`);
        default:
            break;
    }
}