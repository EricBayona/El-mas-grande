let arreglo =["","","","","","","","","","",""];


function allowDrop(ev){
    ev.preventDefault();
}


function drag(ev){
    ev.dataTransfer.setData("text", ev.target.id);
}


function drop(ev){
    if(arreglo[parseInt(ev.target.id)]==""){
        var data = ev.dataTransfer.getData("text");
        arreglo[parseInt(ev.target.id)]=data;
        ev.target.appendChild(document.getElementById(data));
    }
}

const boton = document.querySelector("#controlar");
boton.onclick=controlar;

function controlar(){
    let controlar = true;
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i]==i) {
          controlar=true
      }else{
          controlar= false
          break;
        }
    }
    if(controlar == true){
        document.querySelector("h4").innerHTML="MUY BIEN"
    }
    else{
        document.querySelector("h4").innerHTML="Intenta de nuevo"
    }
  }


const botonReiniciar = document.querySelector("#reiniciar");
botonReiniciar.onclick = reiniciar;

function reiniciar(){
    location. reload()
}