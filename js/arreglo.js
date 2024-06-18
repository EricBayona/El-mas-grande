let arreglo =["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];

function reiniciarArreglo(){
    arreglo =["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
}
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
    console.log(arreglo)
}

const boton = document.querySelector("#controlar");
boton.onclick=controlar;

let contador = 0;

function controlar(){
    let controlar = true;
    contador = 0;
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i]==i) {
          controlar=true
          contador++
          console.log(contador)
      }else{
          controlar= false
        }
    }
    if(contador >= 11){
        document.querySelector("h4").innerHTML="MUY BIEN"
    }
    else{
        document.querySelector("h4").innerHTML="Intenta de nuevo"
    }
    console.log("contador: "+ contador);
  }

const botonReiniciar = document.querySelector("#reiniciar");
botonReiniciar.onclick = reiniciar;

function reiniciar(){
    location.reload()
}