import Lenis from 'lenis'

document.addEventListener('astro:page-load', () => {

const lenis = new Lenis({
  duration: 2,
  smoothWheel: true,
  wheelMultiplier: 0.75,
  touchMultiplier: 1.2,
})
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

});
