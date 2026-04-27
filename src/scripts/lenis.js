
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

export function initLenis() {
  const lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}