document.addEventListener("DOMContentLoaded", function () {
    const enlaces = document.querySelectorAll('.navigation a');
    const secciones = document.querySelectorAll('.section-content');
    const homeContainer = document.querySelector('.container'); // Home (imagen y presentación)
    const backButtons = document.querySelectorAll('.back-to-home'); // Botones para volver a la home
    const typewriterElement = document.querySelector(".typewriter");
    const words = ["Sara Novis", "Desarrolladora Web", "Community Manager", "Especialista en Marketing"];
    let wordIndex = 0;
    let letterIndex = 0;
    let currentWord = "";
    let isDeleting = false;
    const typingSpeed = 150; // Velocidad de escritura
    const deletingSpeed = 100; // Velocidad de borrado
    const delayBetweenWords = 1500; // Pausa entre palabras completas

    // Función para el efecto de escribir/borrar palabras
    function type() {
        const word = words[wordIndex];
        if (isDeleting) {
            currentWord = word.substring(0, letterIndex--); // Borrar letras
        } else {
            currentWord = word.substring(0, letterIndex++); // Escribir letras
        }

        typewriterElement.textContent = currentWord;

        if (!isDeleting && letterIndex === word.length) {
            isDeleting = true;
            setTimeout(type, delayBetweenWords); // Pausa al final de la palabra
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Cambiar a la siguiente palabra
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
        }
    }

    // Iniciar el efecto de escribir
    type();

    // Ocultar todas las secciones al cargar la página
    secciones.forEach(seccion => seccion.classList.remove('visible'));

    // Muestra la sección seleccionada y oculta las demás
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (event) => {
            event.preventDefault();
            const sectionId = enlace.getAttribute('data-section');

            // Ocultar todas las secciones y la Home
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
