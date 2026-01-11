const btnNo = document.querySelector("#btnNo");
const btnSi = document.querySelector("#btnSi");
const gif = document.querySelector("#gif");
const contenedorTexto = document.querySelector("#contenido");
const musica = document.getElementById("musicaFondo");

// --- LÓGICA DE MÚSICA PARA CELULARES ---

function desbloquearMusica() {
    musica.play().then(() => {
        console.log("Música iniciada");
        // Una vez que suena, eliminamos los eventos para no reiniciar la canción
        document.removeEventListener("click", desbloquearMusica);
        document.removeEventListener("touchstart", desbloquearMusica);
    }).catch(error => {
        console.log("El navegador bloqueó el audio, esperando interacción real...");
    });
}

// Escucha el primer toque en cualquier parte de la pantalla
document.addEventListener("click", desbloquearMusica);
document.addEventListener("touchstart", desbloquearMusica);


// --- LÓGICA DEL BOTÓN "NO" ---

function moverBoton() {
    // Calculamos el espacio disponible restando el tamaño del botón
    const width = window.innerWidth - btnNo.offsetWidth;
    const height = window.innerHeight - btnNo.offsetHeight;

    // Generamos posiciones aleatorias seguras
    const x = Math.random() * (width - 20); 
    const y = Math.random() * (height - 20);

    // Usamos position 'fixed' para que no afecte el scroll en móviles
    btnNo.style.position = "fixed";
    btnNo.style.left = x + "px";
    btnNo.style.top = y + "px";
    
    // Intentar reproducir música también aquí por si acaso
    desbloquearMusica();
}

// El botón escapa al tocarlo (celular) o pasar el mouse (PC)
btnNo.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Evita el clic fantasma en móviles
    moverBoton();
});
btnNo.addEventListener("mouseover", moverBoton);


// --- LÓGICA DEL BOTÓN "SÍ" ---

btnSi.addEventListener("click", () => {
    // 1. Borramos el texto largo de la propuesta
    contenedorTexto.innerHTML = `
        <h1 style="color: #d63384; font-size: 1.8rem; line-height: 1.3;">
            ¡SÍ! Me haces el hombre más feliz del mundo, Ivania. 👫💖
        </h1>
    `;
    
    // 2. Cambiamos el GIF a uno de celebración
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/c7MaBy8T8kG5V5w96d/giphy.gif";
    
    // 3. Ocultamos ambos botones
    btnNo.style.display = "none";
    btnSi.style.display = "none";
    
    // Aseguramos que la música suene si no ha sonado antes
    desbloquearMusica();
});
