const btnNo = document.querySelector("#btnNo");
const btnSi = document.querySelector("#btnSi");
const gif = document.querySelector("#gif");
const contenedorTexto = document.querySelector("#contenido");
const musica = document.getElementById("musicaFondo");

// Función para asegurar que la música suene tras el primer toque
function iniciarMusica() {
    musica.play().then(() => {
        console.log("Música sonando");
    }).catch(err => {
        console.log("Esperando interacción...");
    });
}

// Escuchamos el primer toque o clic en cualquier parte
document.addEventListener("click", iniciarMusica, { once: true });
document.addEventListener("touchstart", iniciarMusica, { once: true });

// Lógica del botón No
function moverBoton() {
    const width = window.innerWidth - btnNo.offsetWidth;
    const height = window.innerHeight - btnNo.offsetHeight;
    const x = Math.random() * (width - 20);
    const y = Math.random() * (height - 20);
    btnNo.style.position = "fixed";
    btnNo.style.left = x + "px";
    btnNo.style.top = y + "px";
}

btnNo.addEventListener("touchstart", (e) => { e.preventDefault(); moverBoton(); });
btnNo.addEventListener("mouseover", moverBoton);

// Lógica del botón Sí
btnSi.addEventListener("click", () => {
    contenedorTexto.innerHTML = "<h1 style='color: #d63384;'>¡SÍ! Me haces el más feliz, Ivania. 👫💖</h1>";
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/c7MaBy8T8kG5V5w96d/giphy.gif";
    btnNo.style.display = "none";
    btnSi.style.display = "none";
});
