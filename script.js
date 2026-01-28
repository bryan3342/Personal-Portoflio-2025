// Theme Toggle
function toggleTheme() {
    var html = document.documentElement;
    var current = html.getAttribute('data-theme');
    var next = current === 'light' ? 'dark' : 'light';
    if (next === 'dark') {
        html.removeAttribute('data-theme');
        localStorage.removeItem('theme');
    } else {
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    }
    updateThemeIcon();
}

function updateThemeIcon() {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    var isLight = document.documentElement.getAttribute('data-theme') === 'light';
    btn.innerHTML = isLight ? '&#9728;' : '&#9790;';
}

// Apply saved theme icon on load
(function() {
    updateThemeIcon();
})();

function toggleMenu() {
    const menu = document.querySelector(".content-links");
    const icon = document.querySelector(".content-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


function openPdf() {
    window.open(pdfPath, '_blank');
}


// Carousel Functionality
let currentSlide = 0;
const totalSlides = 3;

function updateCarousel() {
    const slides = document.querySelector('.carousel-slides');
    const dots = document.querySelectorAll('.dot');

    if (slides) {
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function moveSlide(direction) {
    currentSlide += direction;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

// Auto-advance carousel every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);