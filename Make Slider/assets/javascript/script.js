const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let slideNumber = 1;
const length = slides.length;

const getSlideWidth = () => slides[0].clientWidth;

const nextSlide = () => {
    const width = getSlideWidth();
    slider.style.transform = `translateX(-${slideNumber * width}px)`;
    slideNumber++;
};

const prevSlide = () => {
    const width = getSlideWidth();
    slider.style.transform = `translateX(-${(slideNumber - 2) * width}px)`;
    slideNumber--;
};

const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
};

const getLastSlide = () => {
    const width = getSlideWidth();
    slider.style.transform = `translateX(-${(length - 1) * width}px)`;
    slideNumber = length;
};

right.addEventListener('click', () => {
    slideNumber < length ? nextSlide() : getFirstSlide();
});

left.addEventListener('click', () => {
    slideNumber > 1 ? prevSlide() : getLastSlide();
});


window.addEventListener('resize', () => {
    const width = getSlideWidth();

    slider.style.transition = 'none';
    slider.style.transform = `translateX(-${(slideNumber - 1) * width}px)`;
    
    setTimeout(() => {
        slider.style.transition = 'all 1s ease';
    }, 50);
});

