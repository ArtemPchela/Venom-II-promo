const sliderPlugin = (activeSlide) => {
    const slides = document.querySelectorAll('.slide')

    slides[activeSlide].classList.add('active')

    for (let slide of slides) {
        slide.addEventListener("click", () => {
            removeActive()
            slide.classList.add('active')
        })
    }

//remove active class
    function removeActive() {
        slides.forEach(slide => slide.classList.remove('active'))
    }
}

sliderPlugin(1)