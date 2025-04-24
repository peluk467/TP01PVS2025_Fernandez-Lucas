document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que se recargue la página

        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const mensaje = document.getElementById("mensaje").value;

        console.log("Nombre:", nombre);
        console.log("Correo electrónico:", email);
        console.log("Mensaje:", mensaje);
    });
});
