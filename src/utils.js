function ocultarTarjetas(){
    $tarjetas.forEach(function(tarjeta){
        tarjeta.classList.remove();
        tarjeta.classList.add(imgTarjetaBack);
        
        })
}


function empezarJuego(){
    intentos=0;
    $primerTarjeta=null;
    
}

function mezclarTarjetas(tarjetas,imgTargetaRep){
    let imgRandom=imgTargetaRep.sort(function(){
        return 0.5 - Math.random();
    })
    
    imgRandom.forEach(function(img,i){
        tarjetas[i].classList.add(img);
    })
}

function mostrarTarjeta(tarjeta){
    
        tarjeta.classList.remove(imgTarjetaBack);
    
}
function manejarEleccion(tarjeta){
    mostrarTarjeta(tarjeta);

    if($primerTarjeta==null){
        $primerTarjeta=tarjeta;
        intentos++;
        $intentos.innerText="Intentos: " + intentos;
    }
   else{
        if($primerTarjeta===tarjeta){
        return;
        }
        if(tarjetasIguales($primerTarjeta,tarjeta)){
        eliminarTarjetas(tarjeta);
        eliminarTarjetas($primerTarjeta);
        }
        else{
            ocultarTarjetas();
            $primerTarjeta=null;
        }
    }}
        function eliminarTarjetas(tarjeta){
            
            tarjeta.classList.add("img-win");

        }
function tarjetasIguales(primertarjeta,segundatarjeta){
    return primertarjeta.className===segundatarjeta.className;
}



function manejarInput($tablero){
    
    $tablero.onclick=function(e){
        
        const $tarjetaElegida = e.target;
        
        if($tarjetaElegida.classList.contains("tarjeta")){
            manejarEleccion($tarjetaElegida);
        }
        
    }
}
