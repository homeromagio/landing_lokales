document.addEventListener('DOMContentLoaded', () => {
    const textos = [
        "COMMUNITY EVENTS",
        "EXPERT INSTRUCTORS",
        "BEGINNER-FRIENDLY ENVIRONMENT",
        "INNOVATIVE TRAINING FACILITIES",
        ""
    ];

    const translations = {
        "COMMUNITY EVENTS": { en: "COMMUNITY EVENTS", es: "EVENTOS COMUNITARIOS" },
        "EXPERT INSTRUCTORS": { en: "EXPERT INSTRUCTORS", es: "INSTRUCTORES EXPERTOS" },
        "BEGINNER-FRIENDLY ENVIRONMENT": { en: "BEGINNER-FRIENDLY ENVIRONMENT", es: "AMBIENTE AMIGABLE PARA PRINCIPIANTES" },
        "INNOVATIVE TRAINING FACILITIES": { en: "INNOVATIVE TRAINING FACILITIES", es: "INSTALACIONES DE ENTRENAMIENTO INNOVADORAS" },
        "": {en: "", es: ""}
    };

    const container = document.getElementById('bannerContainer');

    const svgSeparador = `
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.4272 32.9074C24.4864 36.1422 22.1394 37.6 20 37.6C17.8605 37.6 15.5136 36.1422 13.5727 32.9074C11.6605 29.7204 10.4 25.1626 10.4 20C10.4 14.8373 11.6605 10.2796 13.5727 7.09266C15.5136 3.8579 17.8605 2.4 20 2.4C22.1394 2.4 24.4864 3.8579 26.4272 7.09266C28.3394 10.2796 29.6 14.8373 29.6 20C29.6 25.1626 28.3394 29.7204 26.4272 32.9074ZM40 20C40 8.9543 31.0456 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0456 8.9543 40 20 40C31.0456 40 40 31.0456 40 20ZM2.4 20C2.4 21.0824 2.4977 22.1419 2.68476 23.1703C3.45876 27.4253 8 24.3248 8 20C8 15.6752 3.45875 12.5748 2.68476 16.8298C2.4977 17.8581 2.4 18.9177 2.4 20ZM37.6 20C37.6 21.0823 37.5023 22.1419 37.3152 23.1702C36.5413 27.4252 32 24.3248 32 20C32 15.6752 36.5413 12.5749 37.3152 16.8298C37.5023 17.8582 37.6 18.9177 37.6 20ZM20 22.2C21.215 22.2 22.2 21.215 22.2 20C22.2 18.785 21.215 17.8 20 17.8C18.785 17.8 17.8 18.785 17.8 20C17.8 21.215 18.785 22.2 20 22.2Z" fill="#E87E22"/>
        </svg>`;

    // Function to create and duplicate the content
    const createContent = (lang) => {
        container.innerHTML = ''; // Clear existing content
        textos.forEach((texto, index) => {
            const h4 = document.createElement('h4');
            h4.textContent = translations[texto][lang] || texto; // Use translation or default
            container.appendChild(h4);

            if (index !== textos.length - 1) {
                const separador = document.createElement('div');
                separador.className = 'separador';
                separador.innerHTML = svgSeparador;
                container.appendChild(separador);
            }
        });
        // Duplicate content for infinite effect
        textos.forEach((texto, index) => {
            const h4 = document.createElement('h4');
            h4.textContent = translations[texto][lang] || texto; // Use translation or default
            container.appendChild(h4);

            if (index !== textos.length - 1) {
                const separador = document.createElement('div');
                separador.className = 'separador';
                separador.innerHTML = svgSeparador;
                container.appendChild(separador);
            }
        });
    };

    // Variables de control
    let contentWidth = 0;
    let translateX = 0;
    let paused = false;
    let animationFrameId;
    let lastTime;
    const speed = 50; // píxeles por segundo

    // Calcular el ancho de un ciclo de contenido
    const calculateWidth = () => {
        contentWidth = container.scrollWidth / 2;
        container.style.width = (contentWidth * 2) + 'px';
    };

    // Función de animación
    const animate = (timestamp) => {
        if (!lastTime) lastTime = timestamp;
        const deltaTime = (timestamp - lastTime) / 1000;

        if (!paused) {
            translateX += speed * deltaTime;
            // Usamos el operador módulo para asegurar la continuidad infinita
            translateX = translateX % contentWidth;
            container.style.transform = `translateX(-${translateX}px)`;
        }

        lastTime = timestamp;
        animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize language based on localStorage or default
    let currentLanguage = localStorage.getItem('language') || 'es';
    currentLanguage = currentLanguage === 'es' ? 'es' : 'en'; // Ensure valid language

    createContent(currentLanguage); // Initialize the banner

    // Start the animation
    calculateWidth();
    animate();

    // Pausar/resumir al interactuar con el banner
    container.addEventListener('mouseenter', () => paused = true);
    container.addEventListener('mouseleave', () => paused = false);
    container.addEventListener('touchstart', () => paused = true);
    container.addEventListener('touchend', () => paused = false);

    // Limpiar el animationFrame al salir
    window.addEventListener('beforeunload', () => {
        cancelAnimationFrame(animationFrameId);
    });

    // Select and configure the language toggle switch
    const languageToggle = document.getElementById('language-toggle');
    const switchLanguage = (isSpanish) => {
        const lang = isSpanish ? 'es' : 'en';
        createContent(lang);
        calculateWidth();
        translateX = 0; // Reset translateX for smooth transition
        animationFrameId = requestAnimationFrame(animate);
    };

    // Listen for language changes
    document.getElementById('language-toggle').addEventListener('change', function () {
  
        switchLanguage(this.checked);
    });

    // Ajustar en caso de redimensionar la ventana
    window.addEventListener('resize', () => {
        calculateWidth();
        translateX = translateX % contentWidth;
    });
});
