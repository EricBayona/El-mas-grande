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


    //solucionar,buscar forma de optimizar el codigo
    // if( arreglo[0] != ""){
    //     if (arreglo[0] == 0 ){
    //         document.querySelector("h1").innerHTML="MUY BIEN"
    //         i++
    //     }
    //     else{
    //         document.querySelector("h1").innerHTML="INTENTA DE NUEVO"
    //     }
    // }
}
