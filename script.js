// Carrusel de imágenes
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 3000); // Cambia cada 3 segundos// Cambia cada 5 segundos

// Efecto de confeti al hacer clic
document.getElementById('confettiBtn').addEventListener('click', () => {
    const confettiSettings = { 
        particleCount: 150, 
        spread: 70, 
        origin: { y: 0.6 } 
    };
    
    if (typeof confetti === 'function') {
        confetti(confettiSettings);
    } else {
        alert("¡Feliz Cumpleaños! 🎉"); // Por si no carga la librería
    }
});

// Cargar librería de confeti dinámicamente
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js';
document.head.appendChild(script);