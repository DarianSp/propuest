const btnNo = document.querySelector("#btnNo");
const btnSi = document.querySelector("#btnSi");
const gif = document.querySelector("#gif");
const contenedorTexto = document.querySelector("#contenido");
const musica = document.getElementById("musicaFondo");

// Función para asegurar que la música suene en el celular
function iniciarMusica() {
    musica.play().catch(e => console.log("Esperando toque"));
}

// Activar música al primer toque en la pantalla
document.addEventListener("click", iniciarMusica, { once: true });
document.addEventListener("touchstart", iniciarMusica, { once: true });

function moverBoton() {
    const width = window.innerWidth - btnNo.offsetWidth;
    const height = window.innerHeight - btnNo.offsetHeight;
    const x = Math.random() * (width - 20);
    const y = Math.random() * (height - 20);

    btnNo.style.position = "fixed";
    btnNo.style.left = x + "px";
    btnNo.style.top = y + "px";
}

btnNo.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moverBoton();
});

btnNo.addEventListener("mouseover", moverBoton);

btnSi.addEventListener("click", () => {
    contenedorTexto.innerHTML = "<h1 style='color: #d63384; font-size: 1.8rem;'>¡SÍ! Me haces el hombre más feliz del mundo, Ivania. 👫💖</h1>";
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/c7MaBy8T8kG5V5w96d/giphy.gif";
    btnNo.style.display = "none";
    btnSi.style.display = "none";
});
