const btnNo = document.querySelector("#btnNo");
const btnSi = document.querySelector("#btnSi");
const h1 = document.querySelector("#pregunta");
const gif = document.querySelector("#gif");

function moverBoton() {
    // Calculamos el ancho y alto disponible en la pantalla del celular
    const width = window.innerWidth - btnNo.offsetWidth;
    const height = window.innerHeight - btnNo.offsetHeight;

    // Generamos posiciones aleatorias
    const x = Math.random() * width;
    const y = Math.random() * height;

    btnNo.style.left = x + "px";
    btnNo.style.top = y + "px";
}

// Se activa al tocar en el celular
btnNo.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Evita que el celular haga "clic" normal
    moverBoton();
});

// También para mouse por si lo abre en PC
btnNo.addEventListener("mouseover", moverBoton);

btnSi.addEventListener("click", () => {
    h1.innerHTML = "¡Sabía que dirías que sí! 🥰";
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueGZueCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/c7MaBy8T8kG5V5w96d/giphy.gif";
    btnNo.style.display = "none";
});