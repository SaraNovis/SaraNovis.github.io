document.addEventListener("DOMContentLoaded", function () {
    const nameElement = document.getElementById('svg-name');
    const enlaces = document.querySelectorAll('.navigation a');
    const secciones = document.querySelectorAll('.section-content');
    const homeContainer = document.querySelector('.container'); // Home (la imagen y presentación)
    const backButtons = document.querySelectorAll('.back-to-home'); // Botones para volver a la home

    // Añadir el contenido para el nombre con letras que se irán mostrando
    const nombre = 'Sara Novis';
    nameElement.innerHTML = `<span id="nombre-animado"></span>`;
    const nombreAnimado = document.getElementById('nombre-animado');
    
    // Función para mostrar las letras una por una
    let i = 0;
    function escribirNombre() {
        if (i < nombre.length) {
            nombreAnimado.innerHTML += nombre.charAt(i);
            i++;
            setTimeout(escribirNombre, 150); // Velocidad de escritura
        }
    }

    // Iniciar la escritura del nombre
    escribirNombre();

    // Oculta todas las secciones al cargar la página
    secciones.forEach(seccion => seccion.classList.remove('visible'));

    // Muestra la sección seleccionada y oculta las demás
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (event) => {
            event.preventDefault();
            const sectionId = enlace.getAttribute('data-section');

            // Ocultar todas las secciones
            secciones.forEach(seccion => seccion.classList.remove('visible'));
            homeContainer.style.display = 'none';

            // Mostrar la sección seleccionada
            const nuevaSeccion = document.getElementById(sectionId);
            if (nuevaSeccion) {
                nuevaSeccion.classList.add('visible');
            }
        });
    });

    // Funcionalidad del botón "Volver a la Home"
    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Ocultar todas las secciones
            secciones.forEach(seccion => seccion.classList.remove('visible'));

            // Mostrar la Home nuevamente
            homeContainer.style.display = 'flex';
        });
    });
});

