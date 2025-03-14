// ------- ANIMACION NAVBAR ---------
document.addEventListener('DOMContentLoaded', function() {
    const navbarObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añadir la clase 'animado-navbar' cuando el navbar se vuelve visible
                setTimeout(() => {
                    entry.target.classList.add('animado-navbar');
                }, 1000); // Ajusta el tiempo de retraso si lo deseas
                navbarObserver.unobserve(entry.target); // Solo se ejecuta una vez
            }
        });
    }, {
        threshold: 0.3 // El 30% del elemento tiene que ser visible
    });

    // Observamos el elemento con la clase 'navbar-content'
    navbarObserver.observe(document.querySelector('.navbar'));
});
// ------- END ANIMACION NAVBAR ---------


// ------- ANIMACION HERO ---------
document.addEventListener('DOMContentLoaded', function() {
    // Creamos el observer para la clase 'hero'
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añadir la clase 'animado-hero' cuando el elemento se vuelve visible
                setTimeout(() => {
                    entry.target.classList.add('animado-hero');
                }, 1000); // Puedes ajustar el tiempo de retraso si lo deseas
                observer.unobserve(entry.target); // Solo se ejecuta una vez
            }
        });
    }, {
        threshold: 0.3 // El 30% del elemento tiene que ser visible
    });

    // Observamos el elemento con la clase 'hero'
    observer.observe(document.querySelector('.hero'));
});
// ------- END ANIMACION HERO ---------


// ------- ANIMACION GRAFFITI IMAGE ---------
document.addEventListener('DOMContentLoaded', function() {
    const graffitiObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añadir la clase 'animado-graffiti' cuando la sección 'hero' es visible
                setTimeout(() => {
                    entry.target.classList.add('animado-graffiti');
                }, 1000); // Ajusta el tiempo de retraso si lo deseas
                graffitiObserver.unobserve(entry.target); // Solo se ejecuta una vez
            }
        });
    }, {
        threshold: 0.3 // El 30% del elemento tiene que ser visible
    });

    // Observamos el elemento con la clase 'hero'
    graffitiObserver.observe(document.querySelector('.hero'));
});
// ------- END ANIMACION GRAFFITI IMAGE ---------




// ------- ANIMACION BANNER ---------
document.addEventListener('DOMContentLoaded', function() {
    const bannerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añadir la clase 'animado-banner-hero' cuando el banner se vuelve visible
                setTimeout(() => {
                    entry.target.classList.add('animado-banner-hero');
                }, 100); // Ajusta el tiempo de retraso si lo deseas
                bannerObserver.unobserve(entry.target); // Solo se ejecuta una vez
            }
        });
    }, {
        threshold: 0.3 // El 30% del elemento tiene que ser visible
    });

    // Observamos el elemento con la clase 'banner'
    bannerObserver.observe(document.querySelector('.banner'));
});
// ------- END ANIMACION BANNER ---------




// ------- ANIMACION FILAS BENEFICIOS ---------
document.addEventListener('DOMContentLoaded', function() {
    const beneficiosObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añadir la clase 'animado-filas' cuando la sección 'beneficios-contenido' entre en vista
                setTimeout(() => {
                    entry.target.classList.add('animado-filas');
                }, 100); // Puedes ajustar el tiempo de retraso si lo deseas
                beneficiosObserver.unobserve(entry.target); // Solo se ejecuta una vez
            }
        });
    }, {
        threshold: 0.3 // El 30% del elemento tiene que ser visible
    });

    // Observamos la sección con la clase 'beneficios-contenido'
    beneficiosObserver.observe(document.querySelector('.beneficios-contenido'));
});
// ------- END ANIMACION FILAS BENEFICIOS ---------







// ------- ANIMACION ATAJOS ---------
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
            entry.target.classList.add('animado');
            }, 100);
            observer.unobserve(entry.target); // Solo se ejecuta una vez
        }
        });
    }, {
        threshold: 0.3 // Cuando el 50% del elemento sea visible
    });

    observer.observe(document.querySelector('.atajos-anim-observer'));
});

// ------- ANIMACION ATAJOS ---------













class MyAOS {
    constructor(options = {}) {
      this.elements = document.querySelectorAll('[data-animation]');
      this.options = options;
      // Configuración del IntersectionObserver, usando un umbral y margen configurable
      this.observer = new IntersectionObserver(
        this.handleIntersect.bind(this), 
        { 
          threshold: options.threshold || 0.5,
          // Aquí se extiende el área inferior del viewport 100px
          rootMargin: options.rootMargin || '0px 0px 100px 0px'
        }
      );
      this.init();
    }
    
    init() {
      this.elements.forEach(el => {
        // Aplicar retardo de transición si se define en data-delay
        const delay = el.dataset.delay || 0;
        el.style.transitionDelay = `${delay}ms`;
        this.observer.observe(el);
      });
    }
    
    handleIntersect(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Al entrar en la vista (o en el margen configurado), se añade la clase para animar el elemento
          entry.target.classList.add('animate');
          // Se deja de observar el elemento una vez animado (opcional)
          observer.unobserve(entry.target);
        }
      });
    }
  }
    
  // Inicializar la clase MyAOS una vez cargado el contenido del documento
  document.addEventListener('DOMContentLoaded', () => {
    new MyAOS({ threshold: 0.5, rootMargin: '0px 0px 800px 0px' });
  });
  
