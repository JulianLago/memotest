const $tablero = document.getElementById("tablero");
const $tarjetas = $tablero.querySelectorAll(".tarjeta");
const imgTarjeta = ["img-viking","img-romano","img-celta","img-chaman","img-mongol","img-monk"];
const imgTarjetaRep = imgTarjeta.concat(imgTarjeta);
const $botonMezclar = document.getElementById("mezclar");
const $intentos = document.querySelector("#intentos");
let intentos =  1;
let $primerTarjeta=null;

$tarjetas.forEach(function(tarjeta){
    tarjeta.classList.add("img-back");
})

mezclarTarjetas($tarjetas,imgTarjetaRep);
desbloquearInput();

$botonMezclar.onclick=function(){  
    $tarjetas.forEach(function(tarjeta){
        tarjeta.className="tarjeta img-back";
    })
mezclarTarjetas($tarjetas,imgTarjetaRep);
desbloquearInput();
 intentos=1;
 sumarIntento();
}
