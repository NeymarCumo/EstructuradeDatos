//cliente == true;
//importe = 6000;
//formapago = "efectivo";

//if(cliente == true);{
//    if 
//}
//Con operadores logicos 
//and, todas las operaciones deben ser verdaderas conjucion
//AND
function mayorYMenorYPar(num) {
	if( num > 5 && num < 10  && num  % 2 === 0 ) console.log(true);
	else console.log(false);
};
mayorYMenorYPar(7); 
mayorYMenorYPar(8); 

// or, dar alternativas disyuncion
//OR
function operadorOr(str) {
    if (str === 'Henry' || str.length < 2) console.log(true);
    else console.log(false);
 }
 operadorOr('Henry');
 operadorOr('Javascript');
 operadorOr('H');

//not, negacion, cambia el valor boleano de una variable
//NOT
function negacion(permiso) {
    permiso ? console.log('Tiene permiso') : console.log('No Tiene permiso')
 }
 negacion(true);
 negacion(false);

 //And
 // Función que verifica si un número es mayor que 10, menor que 10 y par
function mayorYMenorYPar(num) {
    if (num > 5 && num < 10 && num % 2 === 0) {
        console.log(true);  // Si cumple todas las condiciones
    } else {
        console.log(false);  // Si no cumple alguna de las condiciones
    }
}

// Ejemplos
mayorYMenorYPar(7);  // False (mayor que 5 y menor que 10, pero no es par)
mayorYMenorYPar(8);  // True (mayor que 5, menor que 10, y es par)

// Función que verifica si un número es mayor que 10 y es numero par
function mayorYPar(num) {
    if (num > 10 && num % 2 === 0) {
        console.log(true);  // Si cumple ambas condiciones
    } else {
        console.log(false);  // Si no cumple alguna de las condiciones
    }
}

// Ejemplos
mayorYPar(12);  // True (mayor que 10 y es numero par)
mayorYPar(15);  // False (mayor que 10, pero no es numero par, osea impar)
mayorYPar(8);   // False (no es mayor que 10)

//ciclo for
for (let i = 2; i < 10; i++) {
    suma = i;
    console.log("variable de iteracion: ", i);
}
console.log("Variable suma: ", suma);

//Ejemplo
for (let i = 0; i < 5; i++) {
    suma = suma + i;
    console.log('Variable de iteración: ', i);
 }
 console.log('Variable suma: ', suma);

 for(let x = 1, x < 11, x++){
    console.log( x + y)
 }
 //Ciclo anidado, un ciclo dentro de otro ciclo
 tablasdel(9, 15)
 