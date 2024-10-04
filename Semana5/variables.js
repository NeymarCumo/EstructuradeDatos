//Ejercicio de variable de js"

//Declaracion de variable con var//

//variable de tipo string no hay diferencia si uso comilla simple o //
var nombre = "felipe"
var ciudad = "Ajalpan"

//Variable de tipo numero
var entero = 60;
var negativo = -120;
var decimal = 10.67;

//variable de tipo boleano
var verdad = true;
var mentira = false;

//variable de tipo Undifine
var noseeltipo;

//Variable Null
var nula = null

//operadores matematicos
//suma
console.log(50 + 5)
var num1 = 50;
console.log(num1 + 5)
//resta
var num2 = 20;
console.log(num1 - num2)
//division
console.log(250/num1)
console.log(num1/num2)
//modulo
console.log(num1%num2)
//metodo de procedencia
// *, /, + y -//
console.log(3 + 5 * 2 - 8 * 5 / 2);
console.log(3 / 2 + 5 * 4 - 3 + 100 / 2 * 4);
// 1.5 + 20 - 3 + 50 * 4
// 1.5 + 20 - 3 + 200
// 21.5- 3 + 200
// 21.5 - 197
// 218.5

//Operadores de comparacion o relaciones
// ejemplo mayor que (>), menor que (<), mayor o igual (>=), menor o igual (<=), igual == (se representa con doble igual)  y distinto de (!=).
console.log (4 < 7); 
console.log (4 < 1 );
console.log (4 > 4); 
console.log (4 == 7);
console.log("4 es mayor que 7: ", 4 > 7);
console.log("4 es menor que 7: ", 4 < 7);
console.log("4 es mayor  o menor que 7: ", 4 >= 7);
console.log("4 es menor o igual que 7: ", 4 <= 7);
console.log("4 es igual que 7: ", 4 == 7);
console.log("4 es diferente a 7: ", 4 != 7);

//operadoes de asignacio o igualdad
// === estricta (verifica el tipo de dato y el valor)
// == igualdad (verifica el valor)
console.log("igualdad estricta");
console.log("BOB ESPONJA");
console.log(0 == "0");
console.log(0 == []);
console.log("0" == []);
console.log(3===3);
console.log(3==="3");
console.log(3==3);
console.log(3=="3");
console.log("ejemplos");
console.log(true == 1);
console.log("Estrella",false === 0);

//Actividades
var a = 20;
var b = 22;
var c = (a = b) + 60;
console.log(a);
console.log(b);
console.log(c);
//Nota las operaciones +,/,- etc son de izquierda a derecha
//Nota las comparaciones <,>,<=,>= y !, etc son de derecha a izquierda

//Funciones en JS
//Ejemplo 1
console.log("Funciones");
function sumaTres(x){
    console.log(x + 3);
}
sumaTres(5);

//Ejemplos
function saludar(){
    console.log("Hola, usaste la funcion saludar");
}

//Ejemplo 1 usando la funcion
saludar();

//Ejemplo 2 encapsular los ejercicios antriores
function operacionesComparacion(){
    console.log("4 es mayor que 7: ", 4 > 7);
    console.log("4 es menor que 7: ", 4 < 7);
    console.log("4 es mayor o igual que 7: ", 4 >= 7);
    console.log("4 es nemor o igual que 7: ", 4 <= 7);
    console.log("4 es igual que 7: ", 4 == 7);
    console.log("4 es diferente a 7: ", 4 != 7);
}

operacionesComparacion();

function igualdadExtricta(){
    console.log("Igualdad extricta");
    console.log(3 == 3);
    console.log(3 === 3);
    console.log(3 == "3");
    console.log(3 === "3");
    console.log("BOB ESPONJA");
    console.log(0 == "0");
    console.log(0 == []);
    console.log("0" == []);
    console.log(true == 1);
    console.log("Estrella",false === 0);
}

igualdadExtricta();

function suma(a, b) {
    return a + b;
}

var sumaDos = (x, y) => {
    return x + y;
  }

var rsuma = suma(10,9);
console.log(rsuma);

var rsuma2 = sumaDos(50,60);
console.log(rsuma2);










//Function es una palabra reservada y sumaTres es el nombre de la funcion 
// dentro del () va a estar el argumento o parametro
// {} son el cuerpo de la funcion

//Primero
//function sumaTres(x){
//    return x + 3;
//}

//Segundo
//var sumaTres = function(x){
//    return x + 3;
//}

//Tercero
//var sumaTres = (x) => {
//    return x +3;
//}

