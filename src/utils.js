function ocultarTarjetas(tarjeta){
    
        tarjeta.classList.remove("transicion");
        tarjeta.classList.add("img-back");
        
    }

function mostrarTarjeta(tarjeta){
        tarjeta.classList.add("transicion");
        tarjeta.classList.remove("img-back");

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


function sumarIntento(){
    document.getElementById("intentos").innerHTML="Intentos: " + intentos;
}
function bloquearInput(){
    $tablero.onclick=function(){};
}
function desbloquearInput(){
    manejarInput($tablero);
}

function manejarEleccion(tarjeta){
    mostrarTarjeta(tarjeta);  

    if($primerTarjeta===null){
        $primerTarjeta = tarjeta;
        setTimeout(function(){desbloquearInput()},500);
    }
        
    if($primerTarjeta===tarjeta){
        setTimeout(function(){desbloquearInput()},500);
            return;
        }

    if(tarjetasIguales($primerTarjeta,tarjeta)){
        
        eliminarTarjetas(tarjeta);
        eliminarTarjetas($primerTarjeta);
        $primerTarjeta=null;
            
        setTimeout(function(){desbloquearInput()},500);
    }
        else{
            setTimeout(function(){
                
                ocultarTarjetas(tarjeta);
                ocultarTarjetas($primerTarjeta);
                $primerTarjeta=null;
                intentos++;
            },1000)
            setTimeout(function(){desbloquearInput()},500);
        }
        sumarIntento();
        
        
    }
    
    
function eliminarTarjetas(tarjeta){
    setTimeout(function(){ tarjeta.classList.remove("transicion");
    tarjeta.classList.add("img-win");
    tarjeta.classList.remove("img-back");},500);
          
        }

function tarjetasIguales(primertarjeta,segundatarjeta){
    return primertarjeta.className===segundatarjeta.className;
}



function manejarInput($ta){
    
    $ta.onclick=function(e){
        const $tarjetaElegida = e.target;
       
        if($tarjetaElegida.classList.contains("tarjeta")){
           bloquearInput();
            manejarEleccion($tarjetaElegida);
          
        }
      
        
    }
}
