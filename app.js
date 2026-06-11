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
