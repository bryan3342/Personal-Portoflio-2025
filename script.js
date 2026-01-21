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
const totalSlides = 4;

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