// Interacciones de navegación y habilidades
document.addEventListener('DOMContentLoaded', () => {
    const encabezado = document.querySelector('.contenedor-encabezado');
    const botonMenu = document.querySelector('.navegacion-responsive');
    const navegacion = document.querySelector('#navegacion');
    const seccionHabilidades = document.querySelector('#habilidades');

    document.querySelector('#anio').textContent = new Date().getFullYear();

    window.addEventListener('scroll', () => {
        encabezado.classList.toggle('con-sombra', window.scrollY > 10);
    }, { passive: true });

    botonMenu.addEventListener('click', () => {
        const abierto = navegacion.classList.toggle('abierto');
        botonMenu.setAttribute('aria-expanded', abierto);
        botonMenu.innerHTML = abierto ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });

    navegacion.querySelectorAll('a').forEach((enlace) => {
        enlace.addEventListener('click', () => {
            navegacion.classList.remove('abierto');
            botonMenu.setAttribute('aria-expanded', 'false');
            botonMenu.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
    });

    const observadorHabilidades = new IntersectionObserver((entradas) => {
        if (!entradas[0].isIntersecting) return;
        seccionHabilidades.classList.add('animadas');
        seccionHabilidades.querySelectorAll('.habilidad').forEach((habilidad, indice) => {
            setTimeout(() => {
                habilidad.querySelector('.progreso').style.width = `${habilidad.dataset.nivel}%`;
            }, indice * 100);
        });
        observadorHabilidades.disconnect();
    }, { threshold: 0.25 });

    observadorHabilidades.observe(seccionHabilidades);
});



particlesJS("particles-js", {
    particles: {
        number: {
            value: 355,
            density: {
                enable: true,
                value_area: 789.15
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.3,
            random: false,
            anim: {
                enable: true,
                speed: 0.25,
                opacity_min: 0,
                sync: false
            }
        },
        size: {
            value: 2.5,
            random: true,
            anim: {
                enable: true,
                speed: 0.333,
                size_min: 0,
                sync: false
            }
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 0.9,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "bubble"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 83.9,
                size: 1,
                duration: 3,
                opacity: 1,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});