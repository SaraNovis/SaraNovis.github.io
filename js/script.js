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
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const delayBetweenWords = 1500;

    function type() {
        const word = words[wordIndex];
        if (isDeleting) {
            currentWord = word.substring(0, letterIndex--); 
        } else {
            currentWord = word.substring(0, letterIndex++); 
        }

        typewriterElement.textContent = currentWord;

        if (!isDeleting && letterIndex === word.length) {
            isDeleting = true;
            setTimeout(type, delayBetweenWords); 
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
        }
    }

    type();

    secciones.forEach(seccion => seccion.classList.remove('visible'));

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', (event) => {
            event.preventDefault();
            const sectionId = enlace.getAttribute('data-section');

            secciones.forEach(seccion => seccion.classList.remove('visible'));
            homeContainer.style.display = 'none';

            const nuevaSeccion = document.getElementById(sectionId);
            if (nuevaSeccion) {
                nuevaSeccion.classList.add('visible');
            }
        });
    });

    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            secciones.forEach(seccion => seccion.classList.remove('visible'));
            homeContainer.style.display = 'flex';
        });
    });
});
