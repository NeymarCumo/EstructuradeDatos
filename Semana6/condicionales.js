function viaje(destino) {
    if(destino === "Brazil"){
        console.log("gire a la derecha");
    }else if(destino === "Argentina"){
        console.log("gire a la izquierda");
    }else {
        console.log("Nos perdimos");
    }
}
viaje("BRAZIL");

function puedeManejar(edad){
    if(edad <= 18){
        console.log("Puede manejar");
    }else {
        console.log("No puede manejar");
    }
}
puedeManejar(18);