'use strict'
// <    >  =>

window.addEventListener('DOMContentLoaded', () => {
    console.log('Funcionando!');

    const form = document.getElementById('form');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;

        if (!email.value.trim()) {
            emailError.textContent = 'This field is required';
            errorInputs();
            isValid = false;
        } else if(!isValidEmail(email.value.trim())) {
            emailError.textContent = 'Invalid email';
        } else {
            emailError.textContent = '';
        };

        if (!password.value.trim()) {
            passwordError.textContent = 'This field is required';
        } else if(!isValidPassword(password.value.trim())) {
            passwordError.textContent = 'Invalid password';
        } else {
            passwordError.textContent = '';
        };
    });

    const errorInputs = () => {
        email.style.border = '1px solid red';
        password.style.border = '1px solid red';
    };

        const resetErrors = () => {
        email.style.border = ''; 
        emailError.textContent = '';
        password.style.border = ''; 
        passwordError.textContent = ''; 
    };

    email.addEventListener('change', resetErrors);
    password.addEventListener('change', resetErrors);

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    function isValidPassword(password) {
        const passwordRegex = /^[a-zA-Z0-9\s.,!?'"()&$%]+$/;
        return passwordRegex.test(password);
    };

    /* Efectos */
    // Configuración base de ScrollReveal
    const sr = ScrollReveal({
        reset: true,           // No repetir animaciones
        mobile: true,           // Habilitar en dispositivos móviles
        duration: 1500,         // Duración base de las animaciones
        delay: 200,             // Retraso base
        easing: 'cubic-bezier(0.5, 0, 0, 1)', // Curva de aceleración suave
        distance: '30px',       // Distancia de desplazamiento
        opacity: 0,             // Comenzar con opacidad 0
        scale: 0.95             // Escala inicial ligeramente reducida
    });

    // Función para crear configuraciones 3D personalizadas
    function create3DConfig(origin = 'bottom', delay = 0, rotate = { x: 0, y: 0, z: 0 }) {
        return {
            reset: true,
            origin: origin,
            distance: '50px',
            duration: 1500,
            delay: delay,
            opacity: 0,
            scale: 0.95,
            rotate: rotate,
            easing: 'cubic-bezier(0.5, 0, 0, 1)'
        };
    }

    // ===== HEADER =====
    sr.reveal('.container-header', create3DConfig('top', 100));

    // ===== SECCIÓN TRADING =====
    // Título con efecto desde la izquierda
    sr.reveal('.description-trading h1', create3DConfig('left', 200, { x: 0, y: 10, z: 0 }));
    
    // Beneficios con efecto escalonado
    sr.reveal('.benefit:nth-child(1)', create3DConfig('left', 300, { x: 5, y: 0, z: 0 }));
    sr.reveal('.benefit:nth-child(2)', create3DConfig('left', 400, { x: 5, y: 0, z: 0 }));
    sr.reveal('.benefit:nth-child(3)', create3DConfig('left', 500, { x: 5, y: 0, z: 0 }));
    
    // Botón con efecto desde abajo
    sr.reveal('.description-trading a', create3DConfig('bottom', 600));
    
    // Imagen con efecto 3D desde la derecha
    sr.reveal('.img-trading', create3DConfig('right', 300, { x: 10, y: -10, z: 0 }));
    
    // Icono de scroll
    sr.reveal('.scroll', create3DConfig('bottom', 700, { x: 0, y: 0, z: 10 }));

    // ===== SECCIÓN MAKING =====
    // Título con efecto desde arriba
    sr.reveal('.title-making', create3DConfig('top', 200));
    
    // Tarjetas con efecto escalonado desde abajo
    const cards = document.querySelectorAll('.card-making');
    cards.forEach((card, index) => {
        sr.reveal(card, create3DConfig('bottom', 300 + (index * 100), { x: 10, y: 0, z: 0 }));
    });

    // ===== SECCIÓN MINUTES =====
    // Título con efecto desde arriba
    sr.reveal('.title-minutes', create3DConfig('top', 200));
    sr.reveal('.title-minutes p', create3DConfig('top', 300));
    
    // Imagen con efecto 3D desde abajo
    sr.reveal('.img-minutes', create3DConfig('bottom', 400, { x: 15, y: 0, z: 0 }));

    // ===== SECCIÓN DEPOSITS =====
    // Título con efecto desde arriba
    sr.reveal('.title-deposits', create3DConfig('top', 200));
    sr.reveal('.title-deposits p', create3DConfig('top', 300));
    
    // Tarjetas de depósitos con efecto en cascada
    const depositCards = document.querySelectorAll('.card-deposits');
    depositCards.forEach((card, index) => {
        const row = Math.floor(index / 3);
        const col = index % 3;
        const delay = 300 + (row * 100) + (col * 50);
        
        sr.reveal(card, create3DConfig('bottom', delay, { x: 0, y: 0, z: 5 }));
    });

    // ===== SECCIÓN ACCOUNT =====
    // Título con efecto desde arriba
    sr.reveal('.title-account', create3DConfig('top', 200));
    sr.reveal('.title-account p', create3DConfig('top', 300));
    
    // Formulario con efecto 3D
    sr.reveal('.container-form', create3DConfig('bottom', 400, { x: 15, y: 0, z: 0 }));
    
    // Imágenes laterales
    sr.reveal('.phone', create3DConfig('left', 500, { x: 0, y: 10, z: 0 }));
    sr.reveal('.camera', create3DConfig('right', 500, { x: 0, y: -10, z: 0 }));

    // ===== FOOTER =====
    // Logo y texto
    sr.reveal('.description-footer img', create3DConfig('bottom', 200));
    sr.reveal('.description-footer h3, .description-footer p, .description-footer span', 
        create3DConfig('bottom', 300));
    
    // Redes sociales con efecto en cascada
    const socialIcons = document.querySelectorAll('.networks-footer svg');
    socialIcons.forEach((icon, index) => {
        sr.reveal(icon, create3DConfig('bottom', 400 + (index * 50), { x: 0, y: 0, z: 10 }));
    });
    
    // Marcas de pie de página
    sr.reveal('.marking-footer', create3DConfig('bottom', 500));

    // Efecto 3D sutil para el icono de scroll sin modificar su comportamiento original
    const scrollIcon = document.querySelector('.scroll');
    if (scrollIcon) {
        // Añadimos una clase para aplicar perspectiva 3D sin modificar la animación original
        scrollIcon.classList.add('scroll-3d-effect');
        
        // Añadimos un estilo para la clase
        const style = document.createElement('style');
        style.textContent = `
            .scroll-3d-effect {
                transform-style: preserve-3d;
                perspective: 1000px;
            }
            @keyframes float3D {
                0% {
                    transform: translateX(-50%) translateY(0) rotateY(5deg);
                }
                50% {
                    transform: translateX(-50%) translateY(-10px) rotateY(-5deg);
                }
                100% {
                    transform: translateX(-50%) translateY(0) rotateY(5deg);
                }
            }
            .scroll-3d-effect {
                animation: float3D 3s ease infinite !important;
            }
        `;
        document.head.appendChild(style);
    };

});