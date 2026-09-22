const slides = document.querySelectorAll('.carousel__slide');
const prevButton = document.querySelector('.carousel__button--prev');
const nextButton = document.querySelector('.carousel__button--next');

let currentIndex = 0;

function showSlide(index) {
    slides[currentIndex].classList.remove('carousel__slide--active');
    currentIndex = index;
    slides[currentIndex].classList.add('carousel__slide--active');
}

function showNextSlide() {
    if (currentIndex === slides.length - 1) {
        showSlide(0);
    } else {
        showSlide(currentIndex + 1);
    }
}

function showPreviousSlide() {
    if (currentIndex === 0) {
        showSlide(slides.length - 1);
    } else {
        showSlide(currentIndex - 1);
    }
}

nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPreviousSlide);