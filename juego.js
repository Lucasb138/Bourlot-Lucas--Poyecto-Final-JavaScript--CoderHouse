//Comenzando juego:

function revisarVida(){
if (vidaActual > personaje.vida){
    vidaActual = personaje.vida;
}
if (vidaActual <= 0){
muerte()
}}


revisarVida()
Evento1();
revisarVida();
alert ("Fin del juego");
console.log ("Prueba de poción en funcionamiento = " + vidaActual)

//demostración de variables actualizadas al final del código: 

console.table(inventario);
console.log ("Fin del juego, "+ nombrePersonaje);
console.log (vidaActual);