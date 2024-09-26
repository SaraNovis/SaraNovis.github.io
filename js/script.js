document.addEventListener('DOMContentLoaded', () => {

    // Lógica para mostrar y ocultar secciones
    const enlaces = document.querySelectorAll('.navigation a');
    const secciones = document.querySelectorAll('.section-content');
    const homeContainer = document.querySelector('.container'); // Home (la imagen y presentación)
    const backButtons = document.querySelectorAll('.back-to-home'); // Botones para volver a la home

    // Inicialmente, oculta todas las secciones menos la Home
    secciones.forEach(seccion => {
        seccion.classList.remove('visible');
    });

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (event) => {
            event.preventDefault();
            const sectionId = enlace.getAttribute('data-section');

            // Ocultar todas las secciones
            secciones.forEach(seccion => {
                seccion.classList.remove('visible');
            });

            // Ocultar la Home cuando se selecciona una sección
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
            secciones.forEach(seccion => {
                seccion.classList.remove('visible');
            });

            // Mostrar la Home nuevamente
            homeContainer.style.display = 'flex';
        });
    });

    // Efecto de la máquina de escribir para el nombre
    const typewriterElement = document.querySelector(".typewriter");
    const words = [ "Desarrolladora Web", "Community Manager", "Experiencia Marketing Digital"];
    let wordIndex = 0;
    let letterIndex = 0;
    let currentWord = "";
    let isDeleting = false;
    const typingSpeed = 200; // Velocidad de escritura
    const deletingSpeed = 80; // Velocidad de borrado
    const delayBetweenWords = 1500; // Pausa entre palabras completas

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

});

