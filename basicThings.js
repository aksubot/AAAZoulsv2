//lenis

document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(() => {
    const isMobile = window.matchMedia("(pointer: coarse)").matches || window.innerWidth <= 768;
    if (isMobile) {
      window.lenis = new Lenis({
        autoRaf: true,
        autoToggle: true,
        anchors: true,
        allowNestedScroll: true,
        naiveDimensions: true,
        stopInertiaOnNavigate: true,
        touchMultiplier: 0.6,
        syncTouch: true
      });
    } else {
      window.lenis = new Lenis({
        autoRaf: true,
        autoToggle: true,
        anchors: true,
        allowNestedScroll: true,
        naiveDimensions: true,
        stopInertiaOnNavigate: true
      });
    }
  });
});

// NAV
const navMenu = document.querySelector(".navMenu");
const navLinks = document.querySelector(".nav-links");
const navScreen = document.querySelector(".menuScreen");
if (navMenu && navLinks) {
  navMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    navMenu.classList.toggle("active");
    navScreen.classList.toggle("active");
  });
}

// LOADER
const loader = document.querySelector(".loader");
const loaderH1 = document.querySelector(".loaderH1");
let loaded = false;
setTimeout(() => {
  load();
}, 3000);
setTimeout(() => {
  loaderH1.classList.add("loaderH1-hidden");
}, 2500);
function load() {
  if (loaded == true) loader.classList.add("loader-hidden");else load();
}
window.addEventListener("load", () => {
  loaded = true;
  // Lisätään luokka, joka aktivoi CSS-häivytyksen
});

// Loader H1 animation

var interval = setInterval(() => IncreaseLoader(), 20);
let h1Value = 0;
function IncreaseLoader() {
  loaderH1.innerHTML = h1Value + "%";
  h1Value++;
  if (h1Value > 100) clearInterval(interval);
}