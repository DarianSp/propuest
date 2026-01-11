
const musica = document.getElementById("musicaFondo");

function iniciarMusica() {
    musica.play();
    // Quitamos los listeners para que no intente sonar cada vez que toque
    document.removeEventListener("click", iniciarMusica);
    document.removeEventListener("touchstart", iniciarMusica);
}

document.addEventListener("click", iniciarMusica);
document.addEventListener("touchstart", iniciarMusica);


const btnNo = document.querySelector("#btnNo");
const btnSi = document.querySelector("#btnSi");
const gif = document.querySelector("#gif");
const contenedorTexto = document.querySelector("#contenido"); // Seleccionamos todo el bloque de texto

function moverBoton() {
    const width = window.innerWidth - btnNo.offsetWidth;
    const height = window.innerHeight - btnNo.offsetHeight;

    const x = Math.random() * width;
    const y = Math.random() * height;

    btnNo.style.position = "absolute";
    btnNo.style.left = x + "px";
    btnNo.style.top = y + "px";
}

btnNo.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moverBoton();
});

btnNo.addEventListener("mouseover", moverBoton);

btnSi.addEventListener("click", () => {
    // 1. Borramos todo el texto de la propuesta
    contenedorTexto.innerHTML = "<h1 style='color: #d63384;'>¡SÍ! Me haces el más feliz. 👫💖</h1>";
    
    // 2. Cambiamos el GIF por uno de celebración (puedes buscar uno de besos o corazones)
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/c7MaBy8T8kG5V5w96d/giphy.gif";
    
    // 3. Escondemos el botón No definitivamente
    btnNo.style.display = "none";
    btnSi.style.display = "none"; // También escondemos el botón Sí para que quede limpio
});

