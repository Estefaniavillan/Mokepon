//Variables Globales
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
const sectionReiniciar = document.getElementById("reiniciar");
const botonMascotaJugador = document.getElementById("boton-mascota");
sectionReiniciar.style.display = "none";
const botonReiniciar = document.getElementById("boton-reiniciar");
const sectionSeleccionarMascota = document.getElementById(
"seleccionar-mascota");
const spanMascotaJugador = document.getElementById("mascota-jugador");
const spanMascotaEnemigo = document.getElementById("mascota-enemigo");
const spanVidasJugador = document.getElementById("vidas-jugador");
const spanVidasEnemigo = document.getElementById("vidas-enemigo");
const imagenMascotaEnemigo = document.getElementById("imagen-mascota-enemigo");
const sectionMensajes = document.getElementById("resultado");
const ataquesDelJugador = document.getElementById("ataques-del-jugador");
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo");
const contenedorTarjetas = document.getElementById("contenedorTarjetas");
const contenedorAtaques = document.getElementById("contenedorAtaques");

const sectionVerMapa = document.getElementById("ver-mapa");
const mapa = document.getElementById("mapa");

//variables locales
let jugadorId = null;
let mokepones = [];
let ataqueEnemigo = [];
let ataqueJugador = [];
let opcionDeMokepones;
let mascotaJugador;
let mascotaJugadorObjeto;
let inputBelfegor;
let inputKrampus;
let inputAsmodeo;
let inputLeviatan;
let inputBadmouse;
let inputCervero;
let botonFuego;
let botonAgua;
let botonTierra;
let botonHielo;
let botonTornado;
let botonTrueno;
let indexAtaqueJugador;
let indexAtaqueEnemigo;
let ataquesMokeponEnemigo;
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let botones = [];
let ataquesMokepon;
let lienzo = mapa.getContext("2d"); //usar el lienzo para dibujar dentro de canvas
let intervalo;
let mapaBackground = new Image();
mapaBackground.src = "./assets/maipa.png";
let alturaQueBuscamos;
let vidaImagen = new Image();
imagenVida.src = "./assets/vidas.png";
let anchoDelMapa = window.innerWidth - 20;
let fotoMascota = [
  "./assets/leviatan.png",
  "./assets/rata.png",
  "./assets/cervero.png",
  "./assets/Krampus.png",
  "./assets/Asmodeo.png",
  "./assets/Belfegor.png",
];

alturaQueBuscamos = (anchoDelMapa * 600) / 800;
const anchoMaximoDelMapa = 350;

if (anchoDelMapa > anchoMaximoDelMapa) {
  anchoDelMapa = anchoMaximoDelMapa - 50;
  alturaQueBuscamos = (anchoMaximoDelMapa * 900) / 900;
}
mapa.whidth = anchoDelMapa;
mapa.height = alturaQueBuscamos;

//Clases inician con mayusculas
class Mokepon {
  constructor(nombre, foto, vida,  fotoMapa) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
   
    this.ataques = [];
    this.ancho = 40; 
    this.alto = 80;
    this.x = aleatorio(0, mapa.whidth - this.ancho);
    this.y = aleatorio(0, mapa.height - this.alto);
    this.mapaFoto = new Image();
    this.mapaFoto.src = fotoMapa;
    this.velocidadX = 0;
    this.velocidadY = 0;
  }
  pintarMokepon() {
    lienzo.drawImage(
      //crea un rectangulo dentro del canvas
      this.mapaFoto,
      this.x,
      this.y,
      this.ancho,
      this.alto
    );
  }
}

let leviatan = new Mokepon("Leviatan",  "./assets/leviatan.png",  6,  "./assets/leviatan.png", );
let badmouse = new Mokepon( "Badmouse","./assets/rata.png", 6 ,"./assets/rata.png");
let cervero = new Mokepon("Cervero","./assets/cervero.png",6,"./assets/cervero.png");
let krampus = new Mokepon("Krampus","./assets/Krampus.png",6,"./assets/Krampus.png");
let asmodeo = new Mokepon("Asmodeo","./assets/Asmodeo.png",6,"./assets/Asmodeo.png");
let belfegor = new Mokepon("Belfegor","./assets/Belfegor.png",6,"./assets/Belfegor.png");
let leviatanEnemigo  = new Mokepon("Leviatan",  "./assets/leviatan.png",  6,  "./assets/leviatan.png");
let badmouseEnemigo = new Mokepon( "Badmouse","./assets/rata.png", 6 ,"./assets/rata.png");
let cerveroEnemigo  = new Mokepon("Cervero","./assets/cervero.png",6,"./assets/cervero.png");
let krampusEnemigo  = new Mokepon("Krampus","./assets/Krampus.png",6,"./assets/Krampus.png");
let asmodeoEnemigo  = new Mokepon("Asmodeo","./assets/Asmodeo.png",6,"./assets/Asmodeo.png");
let belfegorEnemigo  = new Mokepon("Belfegor","./assets/Belfegor.png",6,"./assets/Belfegor.png");


  
//tenemos un arreglo con objetos con diferentes ataques
leviatan.ataques.push(
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌪️", id: "boton-tornado" }
)
leviatanEnemigo.ataques.push(
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌪️", id: "boton-tornado" }
)


badmouse.ataques.push(
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌪️", id: "boton-tornado" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" }
);
badmouseEnemigo.ataques.push(
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌪️", id: "boton-tornado" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" }
);

cervero.ataques.push(
{ nombre: "🧊", id: "boton-hielo" },
{ nombre: "🧊", id: "boton-hielo" },
{ nombre: "🧊", id: "boton-hielo" },
{ nombre: "⚡", id: "boton-trueno" },
{ nombre: "💧", id: "boton-agua" },
{ nombre: "🌱", id: "boton-tierra" }
);

cerveroEnemigo.ataques.push(
  { nombre: "🧊", id: "boton-hielo" },
  { nombre: "🧊", id: "boton-hielo" },
  { nombre: "🧊", id: "boton-hielo" },
  { nombre: "⚡", id: "boton-trueno" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🌱", id: "boton-tierra" }
  );

  krampus.ataques.push(
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "💧", id: "boton-agua" },
    { nombre: "🌱", id: "boton-tierra" },
    { nombre: "🧊", id: "boton-hielo" }
  );
  krampusEnemigo.ataques.push(
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "🔥", id: "boton-fuego" },
    { nombre: "💧", id: "boton-agua" },
    { nombre: "🌱", id: "boton-tierra" },
    { nombre: "🧊", id: "boton-hielo" }
  );


asmodeo.ataques.push(
  { nombre: "🌪️", id: "boton-tornado" },
{ nombre: "🌪️", id: "boton-tornado" },
{ nombre: "🌪️", id: "boton-tornado" },
{ nombre: "⚡", id: "boton-trueno" },
{ nombre: "💧", id: "boton-agua" },
{ nombre: "🌱", id: "boton-tierra" }
);

asmodeoEnemigo.ataques.push(
  { nombre: "🌪️", id: "boton-tornado" },
{ nombre: "🌪️", id: "boton-tornado" },
{ nombre: "🌪️", id: "boton-tornado" },
{ nombre: "⚡", id: "boton-trueno" },
{ nombre: "💧", id: "boton-agua" },
{ nombre: "🌱", id: "boton-tierra" }
);


belfegor.ataques.push(
{ nombre: "⚡", id: "boton-trueno" },
{ nombre: "⚡", id: "boton-trueno" },
{ nombre: "⚡", id: "boton-trueno" },
{ nombre: "💧", id: "boton-agua" },
{ nombre: "🌱", id: "boton-tierra" },
{ nombre: "🌪️", id: "boton-tornado" }
);

belfegorEnemigo.ataques.push(
 { nombre: "⚡", id: "boton-trueno" },
 { nombre: "⚡", id: "boton-trueno" },
 { nombre: "⚡", id: "boton-trueno" },
 { nombre: "💧", id: "boton-agua" },
 { nombre: "🌱", id: "boton-tierra" },
 { nombre: "🌪️", id: "boton-tornado" }
 );



mokepones.push(leviatan, badmouse, cervero,krampus, asmodeo, belfegor );


function iniciarJuego() {
 
  sectionSeleccionarAtaque.style.display = "none";
  sectionVerMapa.style.display = "none";
  

  //por cada mokepon que existe en el arreglo, inyecta lo del html
  // forEach es la forma de iterar cuantos mokepones
  // ESTAMOS INYECTANDO EL NOMBRE Y FOTO (VALOR Y ESTRUCTURA)
  mokepones.forEach((mokepon) => {
    //templateliterarios
    opcionDeMokepones = `
      <input type="radio" name="mascota" id=${mokepon.nombre} />
      <label class="tarjeta-de-mokepon" for=${mokepon.nombre} >
      <p>${mokepon.nombre} </p>
      <img src=${mokepon.foto} alt=${mokepon.nombre}>
      </label>
      
    `;
    contenedorTarjetas.innerHTML += opcionDeMokepones;

    inputLeviatan = document.getElementById("Leviatan");
    inputBadmouse = document.getElementById("Badmouse");
    inputCervero = document.getElementById("Cervero");
    inputKrampus = document.getElementById("Krampus");
    inputAsmodeo = document.getElementById("Asmodeo");
    inputBelfegor = document.getElementById("Belfegor");

  });
  
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
  botonReiniciar.addEventListener("click", reiniciarJuego);
 
  reproducirSonido("./sound/inicio.mp3"); 

    
}
function reproducirSonido(ruta) {
  const audio = new Audio(ruta);
  audio.play();
}
  function pausarSonido() {
    audio.pause();
  }
  
  function detenerSonido() {
    audio.pause();
    audio.currentTime = 0.1;
  }
  
  // Establecer el tiempo de reproducción (en segundos)
  function establecerTiempo(tiempo) {
    audio.currentTime = tiempo;
  }
  unirseAlJuego();


function unirseAlJuego() {
  fetch("http://10.28.26.166:8080/unirse")
      .then(function (res) {
          if (res.ok) {
              res.text()
                  .then(function (respuesta) {
                      console.log(respuesta)
                      jugadorId = respuesta
                  })
          }
      })
}
//Se selecciona la mascota
let imagenMascotaJugador = document.getElementById("imagen-mascota-jugador");

function obtenerRutaImagen(mascota) {
  const nombreMascota = mascota.toLowerCase();
  const indexMascota = mokepones.findIndex(
    (m) => m.nombre.toLowerCase() === nombreMascota
    
  );
  /*

findIndex:para encontrar el índice del primer elemento en el array que cumple con la condición dada por la función de retorno de llamada (callback).
(m => m.nombre.toLowerCase() === nombreMascota): Esta es la función de retorno de llamada (callback).
m: Representa cada elemento del array mokepones.
m.nombre: Accede a la propiedad nombre del objeto m.
m.nombre.toLowerCase(): Convierte la cadena nombre a minúsculas para asegurarse de que la comparación sea insensible a mayúsculas y minúsculas.
m.nombre.toLowerCase() === nombreMascota: Compara si el nombre de la mascota en el array coincide exactamente con el nombre de la mascota seleccionada por el jugador.
const indexMascota: Almacena el índice del primer elemento que cumple con la condición en la variable indexMascota*/

  if (indexMascota !== -1) {
    const rutaImagen = fotoMascota[indexMascota];
    console.log("Ruta de la imagen:", rutaImagen);

    // Asigna la ruta de la imagen al src del elemento de imagen
    imagenMascotaJugador.src = rutaImagen;

    imagenMascotaJugador.style.width = "100px";
    imagenMascotaJugador.style.height = "auto";
    

    return rutaImagen;
  } else {
    console.log("Mascota no encontrada");
    return "./assets/leviatan.png";
  }
}


function seleccionarMascotaJugador() {

  if (inputLeviatan.checked) {
    spanMascotaJugador.innerHTML = inputLeviatan.id;
    mascotaJugador = inputLeviatan.id;
    reproducirSonido("./sound/elegido.mp3"); // Ruta al sonido de empate
  } else if (inputBadmouse.checked) {
    spanMascotaJugador.innerHTML = inputBadmouse.id;
    mascotaJugador = inputBadmouse.id;
    reproducirSonido("./sound/elegido.mp3"); // Ruta al sonido de empate
  } else if (inputCervero.checked) {
    spanMascotaJugador.innerHTML = inputCervero.id;
    mascotaJugador = inputCervero.id;
    reproducirSonido("./sound/elegido.mp3"); // Ruta al sonido de empate
  } else if (inputKrampus.checked) {
    spanMascotaJugador.innerHTML = inputKrampus.id;
    mascotaJugador = inputKrampus.id;
    reproducirSonido("./sound/elegido.mp3"); // Ruta al sonido de empate
  } else if (inputAsmodeo.checked) {
    spanMascotaJugador.innerHTML = inputAsmodeo.id;
    mascotaJugador = inputAsmodeo.id;
    reproducirSonido("./sound/elegido.mp3"); // Ruta al sonido de empate
  } else if (inputBelfegor.checked) {
    spanMascotaJugador.innerHTML = inputBelfegor.id;
    reproducirSonido("./sound/elegido.mp3"); // Ruta al sonido de empate
    mascotaJugador = inputBelfegor.id;
    reproducirSonido("./sound/elegido.mp3"); // Ruta al sonido de empate
  } else {
    alert("No has elegido ninguna mascota");
    return
  }

  
  sectionSeleccionarMascota.style.display = "none";

  seleccionarMokepon(mascotaJugador);

  extraerAtaques(mascotaJugador);
  obtenerRutaImagen(mascotaJugador);

  sectionVerMapa.style.display = "flex";
  iniciarMapa();
  
}

function seleccionarMokepon(mascotaJugador) { //definimos la funcion 

  fetch(`http://10.28.26.166:8080/mokepon/${jugadorId}`, {
    method: "post", //metodo post
    headers: {//metadatos
      "Content-Type": "application/json"
    },
    body: JSON.stringify({//valor que vamos a enviar, y lo convertimos en cadena de texto stringify
      mokepon: mascotaJugador  //enviamos el nombre del mokepon
    })
  });
 }
//variables internas
function extraerAtaques(mascotaJugador) {
  let ataques;
  //variable index (i) es igual a 0 el arreglo que queremos iterar sera mokepones,e incremeta 1 valo
  // i = 0 i menor a 3 debe valer 1 punto mas (mokepones equivale a 6)
  for (let i = 0; i < mokepones.length; i++) {
    //longitud del arreglo
    if (mascotaJugador === mokepones[i].nombre) {
      // mientras mascotaJugador sea igual a leviatan nos devuelve un ataque
      ataques = mokepones[i].ataques;

    }
  }

  mostrarAtaques(ataques);
}
//definimos una funcion, que toma un parámetro llamado ataques, este parámetro es una lista de objetos que representan diferentes ataques.
function mostrarAtaques(ataques) {

  //Se utiliza el método forEach para iterar sobre cada elemento en la lista de ataques. El parámetro ataque representa cada elemento individual en la iteración.
  ataques.forEach((ataque) => {
    ataquesMokepon = `
      <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
      `;
    contenedorAtaques.innerHTML += ataquesMokepon;
  });
  // incluirá todos los botones de ataque que se han creado en el bucle forEach.
  botonFuego = document.getElementById("boton-fuego");
  botonAgua = document.getElementById("boton-agua");
  botonTierra = document.getElementById("boton-tierra");
  botonHielo = document.getElementById("boton-hielo");
  botonTornado = document.getElementById("boton-tornado");
  botonTrueno = document.getElementById("boton-trueno");
  botones = document.querySelectorAll(".BAtaque");

}

function secuenciaAtaque() {
  reproducirSonido("./sound/batalla.mp3"); // Ruta al sonido de empate
  //para iterar sobre cada botón en la lista de botones  que fue seleccionada anteriormente.
  botones.forEach((boton) => {
    //  Cuando un botón es clicado, se ejecutará la función anónima proporcionada como segundo argumento.
    boton.addEventListener("click", (e) => {
      if (e.target.textContent === "🔥") {
        //obtener el contenido de texto del elemento en el que se hizo clic. se está utilizando para obtener el texto del botón que se hizo clic
        ataqueJugador.push("FUEGO");
        alert("Jugador ataco con FUEGO")
        reproducirSonido("./sound/ataque.mp3"); 
        console.log(ataqueJugador);
        boton.style.background = "#112f58";
        //Se deshabilita el botón para evitar clics adicionales
        boton.disabled = true;
      } else if (e.target.textContent === "💧") {
        ataqueJugador.push("AGUA");
        alert("Jugador ataco con AGUA");
        reproducirSonido("./sound/ataque.mp3"); 
        console.log(ataqueJugador);
        boton.style.background = "#112f58";
        boton.disabled = true;
      } else if (e.target.textContent === "🧊") {
        ataqueJugador.push("HIELO");
        alert("Jugador ataco con HIELO");
        reproducirSonido("./sound/ataque.mp3");
        console.log(ataqueJugador);
        boton.style.background = "#112f58";
        boton.disabled = true;
      } else if (e.target.textContent === "🌪️") {
        ataqueJugador.push("TORNADO");
        alert("Jugador ataco con TORNADO");
        reproducirSonido("./sound/ataque.mp3");
        console.log(ataqueJugador);
        boton.style.background = "#112f58";
        boton.disabled = true;
      } else if (e.target.textContent === "⚡") {
        ataqueJugador.push("TRUENO");
        alert("Jugador ataco con TRUENO");
        reproducirSonido("./sound/ataque.mp3"); 
        console.log(ataqueJugador);
        boton.style.background = "#112f58";
        boton.disabled = true;
      } else {
        ataqueJugador.push("TIERRA");
        alert("Jugador ataco con TIERRA");
        reproducirSonido("./sound/ataque.mp3"); 
        console.log(ataqueJugador);
        boton.style.background = "#112f58";
        boton.disabled = true;
      }

      ataqueAleatorioEnemigo(); //llamamos la funcion para que se active

      //esta función establece un listener de clic para cada botón de ataque. Cuando un botón es clicado, se ejecuta la lógica correspondiente al tipo de ataque, actualiza la interfaz y llama a una función para manejar el ataque del enemigo.
    });
  });
}

function seleccionarMascotaEnemigo() {
  let mascotaAleatoria = aleatorio(0, mokepones.length - 1);
  let rutaImagen = fotoMascota[mascotaAleatoria];
  // Obtén la referencia al elemento img del enemigo

  // Asigna la ruta de la imagen al src
  imagenMascotaEnemigo.src = rutaImagen;

  imagenMascotaEnemigo.style.width = "100px";
  imagenMascotaEnemigo.style.height = "auto";

  spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre;
  ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques;
  secuenciaAtaque();
}

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length - 1);

  if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
    ataqueEnemigo.push("FUEGO");
    alert("Enemigo ataco con FUEGO")
  } else if (ataqueAleatorio == 2 || ataqueAleatorio == 3) {
    ataqueEnemigo.push("AGUA");
    alert("Enemigo ataco con AGUA")
  } else if (ataqueAleatorio == 4 || ataqueAleatorio == 5) {
    ataqueEnemigo.push("TORNADO");
    alert("Enemigo ataco con TORNADO")
  } else if (ataqueAleatorio == 6 || ataqueAleatorio == 7) {
    ataqueEnemigo.push("TRUENO");
    alert("Enemigo ataco con TRUENO")
  } else if (ataqueAleatorio == 8 || ataqueAleatorio == 9) {
    ataqueEnemigo.push("HIELO");
    alert("Enemigo ataco con HIELO")
  } else {
    ataqueEnemigo.push("TIERRA");
    alert("Enemigo ataco con TIERRA")

  }
  console.log(ataqueEnemigo);
  iniciarPelea()
}

function iniciarPelea() {
  if (ataqueJugador.length === 6) {
    combate();
  }
}

function indexAmbosOponentes(jugador, enemigo) {
  indexAtaqueJugador = ataqueJugador[jugador];
  indexAtaqueEnemigo = ataqueEnemigo[enemigo];
}
function combate() {
  //Utiliza un bucle for para iterar sobre cada ataque realizado por el jugador.
  for (let index = 0; index < ataqueJugador.length; index++) {
    //Compara el tipo de ataque del jugador con el tipo de ataque del enemigo.

    if (ataqueJugador[index] === ataqueEnemigo[index]) {
      indexAmbosOponentes(index, index);
      crearMensaje("EMPATE");
    } else if (
      ataqueJugador[index] === "TIERRA" &&
      ataqueEnemigo[index] === "FUEGO"
    ) {
      indexAmbosOponentes(index, index);
      crearMensaje("GANASTE");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (
      ataqueJugador[index] === "TORNADO" &&
      ataqueEnemigo[index] === "HIELO"
    ) {
      indexAmbosOponentes(index, index);
      crearMensaje("GANASTE");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (
      ataqueJugador[index] === "TRUENO" &&
      ataqueEnemigo[index] === "AGUA"
    ) {
      indexAmbosOponentes(index, index);
      crearMensaje("GANASTE");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (
      ataqueJugador[index] === "TRUENO" &&
      ataqueEnemigo[index] === "TIERRA"
    ) {
      indexAmbosOponentes(index, index);
      crearMensaje("GANASTE");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (
      ataqueJugador[index] === "FUEGO" &&
      ataqueEnemigo[index] === "AGUA"
    ) {
      indexAmbosOponentes(index, index);
      crearMensaje("GANASTE");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (
      ataqueJugador[index] === "AGUA" &&
      ataqueEnemigo[index] === "TIERRA"
    ) {
      indexAmbosOponentes(index, index);
      crearMensaje("GANASTE");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else {
      indexAmbosOponentes(index, index);
      crearMensaje("PERDISTE");
      victoriasEnemigo++;
      spanVidasEnemigo.innerHTML = victoriasEnemigo;
    }
  }
  revisarVidas();
}

function revisarVidas() {
  if (victoriasJugador === victoriasEnemigo ) {
    crearMensajeFinal("EMPATE😒\n", "./assets/empate.png");
    reproducirSonido("./sound/empate.mp3"); // Ruta al sonido de empate

  } else if (victoriasJugador > victoriasEnemigo) {
    crearMensajeFinal("GANASTE🎉!!!\n", "./assets/winner.png");
    reproducirSonido("./sound/ganaste.mp3"); // Ruta al sonido de ganaste

  } else {
    crearMensajeFinal("PERDISTE💀 !\n", "./assets/game-over.png");
   reproducirSonido("./sound/perdiste.mp3"); // Ruta al sonido de perdiste

    
}
function reproducirSonido(ruta) {
  const audio = new Audio(ruta);
  audio.play();
}
}
function crearMensajeFinal(resultadoFinal, imagenSrc) {
  sectionMensajes.innerHTML = resultadoFinal;
  // Crear elemento de imagen
  const imagenResultado = document.createElement("img");
  imagenResultado.src = imagenSrc;
  imagenResultado.alt = resultadoFinal;

  imagenResultado.style.width = "100px"; 
  imagenResultado.style.height = "auto"; 

  // Adjuntar la imagen al DOM
  sectionMensajes.appendChild(imagenResultado);
  
  

  sectionReiniciar.style.display = "block";
}

function crearMensaje(resultado) {
  //Toma un parámetro resultado, que sera el mensaje que se mostrará.

  let nuevoAtaqueDelJugador = document.createElement("p");
  let nuevoAtaqueDelEnemigo = document.createElement("p");
  sectionMensajes.innerHTML = resultado;
  nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador;
  nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo;
  ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
 

  //esta función se encarga de mostrar mensajes en la interfaz del juego relacionados con los ataques realizados por el jugador y el enemigo.
}

function reiniciarJuego() {
  location.reload();
}
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function pintarCanvas() {
  //Actualiza las coordenadas de la mascota del jugador en función de su velocidad actual
  mascotaJugadorObjeto.x =
    mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX;
  mascotaJugadorObjeto.y =
    mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY;
  //Limpia el canvas para borrar cualquier contenido anterior.
  lienzo.clearRect(0, 0, mapa.width, mapa.height);
  //Dibuja el fondo del mapa en el canvas
  lienzo.drawImage(
    mapaBackground,
    0,
    0, 
    mapa.whidth, 
    mapa.height);
  mascotaJugadorObjeto.pintarMokepon();

  enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y) 

  

  leviatanEnemigo.pintarMokepon();
  badmouseEnemigo.pintarMokepon();
  cerveroEnemigo.pintarMokepon();
  krampusEnemigo.pintarMokepon();
  asmodeoEnemigo.pintarMokepon();
  belfegorEnemigo.pintarMokepon();

  if (
    mascotaJugadorObjeto.velocidadX !== 0 ||
    mascotaJugadorObjeto.velocidadY !== 0
  ) {
    revisarColision(leviatanEnemigo);
    revisarColision(badmouseEnemigo);
    revisarColision(cerveroEnemigo);
    revisarColision(krampusEnemigo);
    revisarColision(asmodeoEnemigo);
    revisarColision(belfegorEnemigo);
  }
}

function enviarPosicion(x, y){
  fetch (`http://10.28.26.166:8080/mokepon/${jugadorId}/posicion`, {
    method: 'post',
    headers: {
      "Content-type":"application/json"
    },
    body: JSON.stringify({
      x,
      y
  })
})
}
function moverDerecha() {
  mascotaJugadorObjeto.velocidadX = 5; //se mueve 5 pixeles a la derecha
}
function moverIzquierda() {
  mascotaJugadorObjeto.velocidadX = -5;
}
function moverAbajo() {
  mascotaJugadorObjeto.velocidadY = 5;
}
function moverArriba() {
  const miMokepon = obtenerObjetoMascota();

  mascotaJugadorObjeto.velocidadY = -5;
}

function detenerMovimiento() {
  mascotaJugadorObjeto.velocidadX = 0;
  mascotaJugadorObjeto.velocidadY = 0;
}

function sePresionoUnaTecla(event) {
  //varios condicionales if juntos
  switch (event.key) {
    //casos dentro de switch, compara cada if
    case "ArrowUp":
      moverArriba();
      break;
    //swich compara los casos uno a uno , cuando hace macht con un caso , ejecuta y termina
    case "ArrowDown":
      moverAbajo();
      break;
    case "ArrowLeft":
      moverIzquierda();
      break;
    case "ArrowRight":
      moverDerecha();
      break;
    //si no entra en ningun caso
    default:
      break;
  }
}
function iniciarMapa() {
  mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador);
  console.log(mascotaJugador, mascotaJugadorObjeto);
  intervalo = setInterval(pintarCanvas, 50); //LLAMA LA FUNCION CONSTANTEMENTE ESPERANDO
  // esta función marca el inicio del juego, inicializando la mascota del jugador, estableciendo un intervalo para la actualización continua del canvas mediante pintarCanvas()

  //evento del teclado
  window.addEventListener("keydown", sePresionoUnaTecla); // se escucha cuando se presiona una tecla

  window.addEventListener("keyup", detenerMovimiento); // cuando se suelte la tecla se detiene el movimiento
}

function obtenerObjetoMascota() {
  for (let i = 0; i < mokepones.length; i++) {
    //longitud del arreglo
    if (mascotaJugador === mokepones[i].nombre) {
      // mientras mascotaJugador sea igual a leviatan nos devuelve un ataque
      return mokepones[i];
    }
  }
}
//
function revisarColision(enemigo) {
  const arribaEnemigo = enemigo.y;
  const abajoEnemigo = enemigo.y + enemigo.alto;
  const derechaEnemigo = enemigo.x + enemigo.ancho;
  const izquierdaEnemigo = enemigo.x;

  const arribaMascota = mascotaJugadorObjeto.y;
  const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto;
  const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho;
  const izquierdaMascota = mascotaJugadorObjeto.x;

  if (
    abajoMascota < arribaEnemigo ||
    arribaMascota > abajoEnemigo ||
    derechaMascota < izquierdaEnemigo ||
    izquierdaMascota > derechaEnemigo
  ) {
    return;
  }
  detenerMovimiento();
  console.log("se detecto una colision");
  clearInterval(intervalo);
  sectionSeleccionarAtaque.style.display = "flex";
  sectionVerMapa.style.display = "none";
  seleccionarMascotaEnemigo(enemigo);
  console.log("enemigo.nombre")
}
window.addEventListener("load", iniciarJuego);

/*Acciones en caso de colisión: Si hay colisión, realiza las siguientes acciones:

-Llama a la función detenerMovimiento(), que se encarga de detener el movimiento de la mascota del jugador.
-Imprime un mensaje en la consola indicando que se detectó una colisión.
-Detiene el intervalo de actualización del canvas utilizando clearInterval(intervalo).
-Modifica la visualización de secciones en tu juego, mostrando la sección para seleccionar ataque (sectionSeleccionarAtaque) y ocultando la sección del mapa (sectionVerMapa).
-Llama a la función seleccionarMascotaEnemigo(enemigo), que  esta relacionada con la selección de la mascota enemiga.
-Event Listener al cargar la ventana: Agrega un evento de carga (load) a la ventana (window) que llama a la función iniciarJuego al cargar la página. */
