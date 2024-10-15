//Declara un arreglo
var listaSuper = [];

//insertar un elemento en un indice x
listaSuper[5]= "leche";

//Mostrar el elmento Leche dara el indice que conozco
console.log(listaSuper[5]);

//mostrar todos los elementos del arreglo aqui no ocupo indice
//solo uso el arreglo como una variable
console.log(listaSuper);

//Como mostrar el tamaño del arreglo metodo lenght
console.log(listaSuper.lenght);
//Llenar las pocisiones del arreglo
listaSuper[0] = "jamon";
listaSuper[1] = "chiles";
listaSuper[2] = "queso";
listaSuper[3] = "refresco";
listaSuper[4] = "shampoo";
//mostrar todos los elementos imprimiendo el arreglo como estructura
console.log(listaSuper);
//extraer la info del arreglo y procesarla
let obtener;
for (let x = 0; x<6; x++){
    obtener = listaSuper[x];
    console.log(obtener + "producto de lista numero: " + (x + 1));
}

//Llenar las pocisiones del arreglo
listaSuper[6] = "salchicha";
listaSuper[7] = "galletas";
listaSuper[8] = "cafe";
listaSuper[9] = "chocolate";
listaSuper[10] = "atun";
//mostrar todos los elmentos usando metodo lenght
for(x = 0; x<listaSuper.length; x++){
    obtener = listaSuper[x];
    console.log(obtener + "producto de lista numero: " + (x + 1));
}

//metodos para arreglos
//como arreglar un metodo a un arreglo al final de este
//declarar de inicio elementos en arreglo
var colores = ["Rosa", "Amarillo"];
console.log(colores + "Mostrar los elementos del arreglo");
colores.push("Verde");
console.log(colores + + "Mostrar como se agrego al final el Verde");

//como agregar un elemengto al inicio del arreglo metodo unshift
colores.unshift("Rojo");
console.log(colores + "Mostrar como se agrego al inicio el Rojo");

//como eliminar el ultimo elemento agregado en el arreglo metodo pop
colores.pop();
console.log(colores + "Mostrar como se elimino el ultimo color Verde");

//Como eliminar el primer elemento agregado en el arrreglo metodo shift
colores.shift();
console.log(colores + "Mostrar como se elimino el primer color Rojo");

//Ejemplos con include y con every para busqueda y condicion
var personas = ["jose", "pedro","maria","karla","rosa","carlos"];
//Ejemplo con include preguntar si el arrgelo contiene un dato
var incluye = personas.includes("Manuel");
console.log(personas);
console.log("esta el nombre Manuel en el arreglo: " +incluye);
var incluye = personas.includes("karla");
console.log("esta el nombre karla en el arreglo: " +incluye);

//Ejemplo con every
//Pregunta si todos los elemntos son diferentes a manuel
incluye = personas.every((respuesta) => {
    return respuesta != "manuel"
});
console.log("ninguno de los elementos es igual a manuel: " +incluye);

//Pregunta si algun elemento es igual a Carlos
incluye = personas.every((respuesta) => {
    return respuesta != "carlos"
});
console.log("todos los elementos son iguales a carlos: " +incluye);
