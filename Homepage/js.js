
    const track = document.querySelector('.slideshow');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    const slideWidth = slides[0].offsetWidth;
    const visibleSlides = 2;
    let currentIndex = 0;

    function updateSlidePosition() {
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    nextBtn.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex > slides.length - visibleSlides) {
        currentIndex = 0;
        }
        updateSlidePosition();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
        currentIndex = slides.length - visibleSlides;
        }
        updateSlidePosition();
    });

