var slides = document.querySelectorAll('.slide-item');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
    slides[currentSlide].className = 'slide-item';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide-item showing';
}