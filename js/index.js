const contenedorTarjetas = document.querySelector("#contenedor-jugadores");
const contenedorContenedores = document.querySelector("#container");


function crearTarjetaJugadores(campeonesElegidos){

    contenedorTarjetas.innerHTML=""
    campeonesElegidos.forEach(jugador => {
        const nuevoJugador = document.createElement("div");
        nuevoJugador.classList ="jugador-campeon";
        nuevoJugador.innerHTML=`
        <img src="./assets/jugadores/${jugador.id}.jpg" alt=${jugador.nombre} draggable="true" ondragstart="drag(event)" id=${jugador.id}>
        <h3>${jugador.nombre}</h3>
        <p class="posicion"></p>
        `
        contenedorTarjetas.appendChild(nuevoJugador)
    });
}
function crearContendoresDeTarjetas(jugadores){
    jugadores.forEach(jugador =>{
        const nuevoContenedor = document.createElement("div");
        nuevoContenedor.classList=`figura ${jugador.posicion}`
        nuevoContenedor.innerHTML=`
        <div class="box " id="${jugador.id}" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
                </div>
        `
        contenedorContenedores.appendChild(nuevoContenedor)
    })}



const botonesCampeones = document.querySelectorAll(".botones-campeones");

botonesCampeones.forEach(boton =>{
    boton.addEventListener("click",(e)=>{
        reiniciarArreglo()
    const jugadorCampeon =jugadores.filter(jugadores => jugadores.campeon.id ===e.currentTarget.id)
    for(i=0; i<jugadorCampeon.length; i++){

        console.log(jugadorCampeon[i].id)
    }
    crearTarjetaJugadores(jugadorCampeon)
    crearContendoresDeTarjetas(jugadorCampeon)
    })
})