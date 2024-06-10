const contenedorTarjetas = document.querySelector("#contenedor-jugadores");
const contenedorContenedores = document.querySelector("#container");


function crearTarjetaJugadores(jugadores){
    jugadores.forEach(jugador => {
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
    })
}
crearTarjetaJugadores(jugadores);
crearContendoresDeTarjetas(jugadores)