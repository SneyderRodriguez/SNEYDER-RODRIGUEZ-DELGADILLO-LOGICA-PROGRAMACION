const prompt = require("prompt-sync")();
function calcularFactorial() {
    const num = Number(prompt("Ingrese un número: "));
    let resultado = 1;
    let operacion = "";
    for (let i = 1; i <= num; i++) {
        resultado=resultado*i;
        if (i === 1) {
            operacion = operacion+i;
        }else{
            operacion = operacion + `x${i}`;
        }
    }
    console.log(`El factorial del número ${num}! = ${operacion} = ${resultado}`);
}
calcularFactorial();