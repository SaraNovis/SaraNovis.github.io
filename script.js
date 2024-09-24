document.addEventListener("DOMContentLoaded", function () {
    const nameElement = document.getElementById('svg-name');

    // Añadir el contenido SVG para el nombre
    nameElement.innerHTML = `
        <svg viewBox="0 0 500 150" preserveAspectRatio="xMidYMid slice" class="svg-text">
            <text x="50%" y="40%" dy=".20em" text-anchor="middle" class="text">
                <tspan class="letter l1">S</tspan>
                <tspan class="letter l2">a</tspan>
                <tspan class="letter l3">r</tspan>
                <tspan class="letter l4">a</tspan>
                <tspan> </tspan>
                <tspan class="letter l5">N</tspan>
                <tspan class="letter l6">o</tspan>
                <tspan class="letter l7">v</tspan>
                <tspan class="letter l8">i</tspan>
                <tspan class="letter l9">s</tspan>
            </text>
        </svg>
    `;

    // Añadir animación de trazo SVG
    const svgStyle = document.createElement('style');
    svgStyle.textContent = `
        .svg-text text {
            fill: none;
            stroke: #6ACFC7;
            stroke-width: 2px;
            font-size: 60px;
            font-family: "Handjet", sans-serif;
            stroke-dasharray: 500;
            stroke-dashoffset: 500;
            animation: draw 25s ease forwards;
        }

        @keyframes draw {
            to {
                stroke-dashoffset: 0;
            }
        }
    `;
    document.head.appendChild(svgStyle);

    // Selección de letras aleatorias
    const letters = document.querySelectorAll('.letter');
    let filledLetters = [];
    while (filledLetters.length < 3) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        if (!filledLetters.includes(randomIndex)) {
            letters[randomIndex].classList.add('fill-black');
            filledLetters.push(randomIndex);
        }
    }

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
});
