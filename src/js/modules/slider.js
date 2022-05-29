function sliderModule() {
    // Slider
    let slideIndex = 1;
    const slides = document.querySelectorAll(".slider-item"),
        prev = document.querySelector(".prev"),
        next = document.querySelector(".next"),
        dotsWrap = document.querySelector(".slider-dots"),
        dots = document.querySelectorAll(".dot");

    setVisibleSlide(slideIndex)


    function setVisibleSlide(slide) {

        if (slide > slides.length) {
            slideIndex = 1;
        }
        if (slide < 1) {
            slideIndex = slides.length
        }
        slides.forEach((item) => {

            item.style.display = "none";
        })
        dots.forEach((item) => {
            item.classList.remove("dot-active")
        })
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("dot-active")
    }
    function plusSlides(n) {
        setVisibleSlide(slideIndex += n)
    }
    function currentSlide(n) {
        setVisibleSlide(slideIndex = n)
    }
    prev.addEventListener("click", () => {
        plusSlides(-1)
    });
    next.addEventListener("click", () => {
        plusSlides(1)
    });
    dotsWrap.addEventListener("click", (evt) => {
        for (let i = 0; i < dots.length; i++) {
            if (evt.target.classList.contains("dot") && evt.target === dots[i]) {
                currentSlide(i + 1)
            }
        }

    })
}
export { sliderModule }