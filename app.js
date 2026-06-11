const btns = document.querySelectorAll(".mallistoBtn")
const images = document.querySelectorAll(".mallistotCont img")
let activeIndex = 0
let autoAdvanceTimer = null

function activateMallisto(index) {
  activeIndex = index

  btns.forEach((btn, btnIndex) => {
    const isActive = btnIndex === index

    btn.style.width = isActive ? "60px" : "30px"
  })

  images.forEach((img, imgIndex) => {
    const isActive = imgIndex === index
    const diff = imgIndex - index
    const spacing = 150
    const offset = -50 + diff * spacing

    img.style.left = "50%"
    img.style.opacity = isActive ? "1" : "0.35"
    img.style.transform = `translate(${offset}%) scale(${isActive ? 1.02 : 1})`
  })

}

function startAutoAdvance() {
  if (autoAdvanceTimer) {
    clearInterval(autoAdvanceTimer)
  }

  autoAdvanceTimer = setInterval(() => {
    const nextIndex = (activeIndex + 1) % btns.length
    activateMallisto(nextIndex)
  }, 5000)
}

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    activateMallisto(index)
    startAutoAdvance()
  })
})

if (btns.length > 0) {
  activateMallisto(0)
  startAutoAdvance()
}


const navMenu = document.querySelector(".navMenu")
const navLinks = document.querySelector(".nav-links")
const navScreen = document.querySelector(".menuScreen")

let scroll = true;

if (navMenu && navLinks) {
  navMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active")
    navMenu.classList.toggle("active")
    navScreen.classList.toggle("active")
    
  })
}


const loader = document.querySelector(".loader");
const loaderH1 = document.querySelector(".loaderH1")
let loaded = false;

setTimeout(() => {
  load();
}, 3000);
setTimeout(() => {
  loaderH1.classList.add("loaderH1-hidden")
}, 2500);



function load(){
  if(loaded == true) loader.classList.add("loader-hidden");
  else load();
}

window.addEventListener("load", () => {
    loaded = true;
    // Lisätään luokka, joka aktivoi CSS-häivytyksen
});


// Loader H1 animation


var interval = setInterval(() => IncreaseLoader(), 20);

let h1Value = 0;

function IncreaseLoader(){
  loaderH1.innerHTML = h1Value + "%";
  h1Value++;

  if (h1Value > 100) clearInterval(interval);
}








//lenis

const isMobile = window.matchMedia("(pointer: coarse)").matches || window.innerWidth <= 768

if(isMobile) {
  const lenis = new Lenis({ 
  // Nykyiset työpöytäasetuksesi:
  autoRaf: true, 
  autoToggle: true, 
  anchors: true, 
  allowNestedScroll: true, 
  naiveDimensions: true, 
  stopInertiaOnNavigate: true,

  // Uudet lisäykset mobiilin hidastamiseen:
  touchMultiplier: 0.9, // Mobiilissa vauhti puoliksi (0.5), työpöydällä normaali (1)
  syncTouch: true                      // Synkronoi kosketusliikkeen tasaisesti
});
}
else{
  new Lenis({ autoRaf: true, autoToggle: true, 
        anchors: true, allowNestedScroll: true, naiveDimensions: true, 
        stopInertiaOnNavigate: true })
}

