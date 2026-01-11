const btnNo = document.querySelector("#btnNo");
const btnSi = document.querySelector("#btnSi");
const gif = document.querySelector("#gif");
const contenedorTexto = document.querySelector("#contenido");
const musica = document.getElementById("musicaFondo");

// 1. FUNCIÓN PARA REPRODUCIR MÚSICA
function iniciarMusica() {
    musica.play().catch(error => {
        console.log("Esperando interacción para sonar...");
    });
}

// Escucha toques en cualquier parte (fundamental para celular)
document.addEventListener("touchstart", iniciarMusica, { once: true });
document.addEventListener("click", iniciarMusica, { once: true });


// 2. LÓGICA DEL BOTÓN "NO" (QUE ESCAPA)
function moverBoton() {
    const width = window.innerWidth - btnNo.offsetWidth;
    const height = window.innerHeight - btnNo.offsetHeight;

    // Generar posición aleatoria
    const x = Math.random() * (width - 20); // Margen de seguridad
    const y = Math.random() * (height - 20);

    btnNo.style.position = "fixed"; // Fixed ayuda en móviles
    btnNo.style.left = x + "px";
    btnNo.style.top = y + "px";
}

// Eventos para que el botón escape
btnNo.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moverBoton();
    iniciarMusica(); // También intenta activar música aquí
});

btnNo.addEventListener("mouseover", moverBoton);


// 3. LÓGICA DEL BOTÓN "SÍ"
btnSi.addEventListener("click", () => {
    // Borrar el texto largo e Ivania leerá la confirmación
    contenedorTexto.innerHTML = "<h1 style='color: #d63384; font-size: 1.8rem;'>¡SÍ! Me haces el hombre más feliz del mundo. 👫💖</h1>";
    
    // Cambiar el gif por uno de celebración
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/c7MaBy8T8kG5V5w96d/giphy.gif";
    
    // Ocultar botones
    btnNo.style.display = "none";
    btnSi.style.display = "none";
});
