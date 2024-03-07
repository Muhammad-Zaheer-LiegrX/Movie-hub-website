
// Slideshow
document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const images = document.querySelectorAll('.slider-image');

    function showImage(index) {
        images.forEach((image, i) => {
            if (i === index) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Initial display
    showImage(currentIndex);

    // Auto slide every 3 seconds (adjust as needed)
    setInterval(nextImage, 2000);
});


//for text showing 
document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Initial display
    showSlide(currentIndex);

    // Auto slide every 3 seconds (adjust as needed)
    setInterval(nextSlide, 2000);
});




document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.bx-menu');
    const nav = document.querySelector('nav');

    menuButton.addEventListener('click', function () {
        nav.classList.toggle('show-menu');
    });
});
