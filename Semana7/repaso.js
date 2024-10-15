//Declaracion de variables
//Forma !: var, las variables pueden cambiar sus valores, como los tipos de datos
console.log("ejemplos de variables con var");
var numero;
console.log(numero);
numero= 10;
console.log(numero);
numero= "Saludo";
console.log(numero);
numero= 34.6;
console.log(numero);

//Forma 2: let
console.log("ejemplos de variables con let");
let numero2;
console.log(numero2);
numero2 = 10;
console.log(numero2);
numero2 = "Saludos";
console.log(numero2);
numero2 = 10.67;
console.log(numero2);

//Forma 3: asignacion
console.log("ejemplos de variables por asignacion");
numero3 = undefined;
console.log(numero3);
numero3 = 10;
console.log(numero3);
numero3 = "Saludos";
console.log(numero3);

//operaciones aritmeticas
var num1, num2, res;
//suma
console.log("");
console.log("Operaciones basicas");
num1 = 10;
num2 = 20;
res = num1 + num2;
console.log("El resultado de la suma es: "+ res);

//resta
num1 = 10;
num2 = 20;
res = num1 - num2;
console.log("El resultado de la resta es: "+ res);

//Multiplicacion
num1 = 10;
num2 = 20;
res = num1 * num2;
console.log("El resultado de la multiplicacion es: "+ res);

//Division
num1 = 10;
num2 = 20;
res = num1 / num2;
console.log("El resultado de la division es: "+ res);

console.log("");
console.log("Operaciones basicas %mod");
num1 = 10;
num2 = 20;
res = num1 % num2;
console.log("El resultado de mod es: "+ res);

console.log("");
console.log("Operaciones basicas");
console.log("2x+3y - 90");
x= 10;
y = 20;
res = 2*x+3*y-90;
console.log(res);

//Funciones en JS
console.log("ecuacion es 3x + y / z +7");
function eq1(x,y,z) {
    x = (3*x + y) / z +7;
    console.log(x);
}
eq1(4,6,8);

//console.log("ecuacion es 3x + y / z +7");
//function eq1(x,y,z) {
//    x = (3*x + y) / (z +7);
//    console.log(x);
//}
//eq1(4,6,8);

function areacirculo(radio){
    return 3.1416 * (radio * radio);
}
areaC = areacirculo(25);
console.log(areaC + " u2 ");

//bucle while
let incremento = 1;
while(incremento < 3){
    console.log("Valor de incremento: " + incremento);
    incremento++;
}   

//Genera numeros hasta que valga 3
let min = 1;
let max = 10;
let randomIntegerInRange = 1;
randomIntegerInRange = Math.random();
console.log("valor aleatorio generado: " + randomIntegerInRange);
randomIntegerInRange = Math.floor(randomIntegerInRange * (max - min + 1) + min);
console.log("Vallor aleatorio con floor y rango: " + randomIntegerInRange);
randomIntegerInRange = Math.floor(randomIntegerInRange);
console.log("Vallor aleatorio con floor: " + randomIntegerInRange);



while(randomIntegerInRange != 6){
    randomIntegerInRange= Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("Valores aleatorios " + randomIntegerInRange); //Ejemplo: 8
}

