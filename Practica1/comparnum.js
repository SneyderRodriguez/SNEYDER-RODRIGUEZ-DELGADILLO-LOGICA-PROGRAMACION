/*PRÁCTICA DE LOGICA COMPARANDO NUMEROS */
const prompt = require("prompt-sync")();

let num1 = Number(prompt("Ingresa el primer número "));
let num2 = Number(prompt("Ingresa el segundo número "));
let num3 = Number(prompt("Ingresa el tercer número "));
let menor = num1;
let mayor = num1;

if(num1 == num2 && num2 == num3){
    console.log("Los números son iguales");
}
if (num2 < menor) {
    menor = num2;
}

if (num3 < menor) {
    menor = num3;
}
/*console.log("<"+menor);//mostrar cuál es el mayor*/
if (num2 > mayor) {
    mayor = num2;
}

if (num3 > mayor) {
    mayor = num3;
}
/*console.log(">"+mayor);//mostrar cuál es el mayor*/
let centro = num1 + num2 + num3 - mayor - menor;
/**Para encontrar el centro sume los 3 números y le reste el número mayor y el número menor que consegui con los if */
console.log(menor+" "+centro+" "+mayor);
console.log(mayor+" "+centro+" "+menor);