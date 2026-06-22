document.addEventListener("DOMContentLoaded", () => {
    const sizeSelect = document.getElementById("sizeSelect");
    const cartMessage = document.getElementById("cartMessage");

    if (!sizeSelect || !cartMessage) {
        return;
    }

    const carouselTrack = document.querySelector(".carouselTrack");
    const carouselSlides = document.querySelectorAll(".carouselSlide");
    const carouselDots = document.querySelectorAll(".carouselDot");
    const prevButton = document.querySelector(".carouselBtn.prev");
    const nextButton = document.querySelector(".carouselBtn.next");
    let activeIndex = 0;

    const carouselViewport = document.querySelector(".carouselViewport");

    function showSlide(index) {
        console.log("ok");
        if (!carouselTrack || carouselSlides.length === 0) return;
        activeIndex = (index + carouselSlides.length) % carouselSlides.length;
        carouselTrack.style.transform = `translateX(-${activeIndex * 100}%)`;
        carouselDots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === activeIndex));
    }

    prevButton?.addEventListener("click", () => showSlide(activeIndex - 1));
    nextButton?.addEventListener("click", () => showSlide(activeIndex + 1));
    carouselDots.forEach((dot) => {
        dot.addEventListener("click", () => showSlide(Number(dot.dataset.index)));
    });

    window.addEventListener("resize", () => showSlide(activeIndex));
});