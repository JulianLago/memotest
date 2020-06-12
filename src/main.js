const $tablero = document.getElementById("tablero");
const $tarjetas = $tablero.querySelectorAll(".tarjeta");
const imgTarjeta = ["img-viking","img-romano","img-celta","img-chaman","img-mongol","img-monk"];
const imgTarjetaRep = imgTarjeta.concat(imgTarjeta);
const imgTarjetaBack =  "img-back";
const $intentos = document.querySelector("#intentos");
let intentos =  0;
const $primerTarjeta = null;


ocultarTarjetas();

mezclarTarjetas($tarjetas,imgTarjetaRep);
manejarInput($tablero);



