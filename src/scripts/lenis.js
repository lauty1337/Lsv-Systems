import Lenis from 'lenis'

const DEV_SCROLL_KEY = 'lsv-dev-scroll'

let lenis
let rafId

function saveDevScroll() {
  if (!import.meta.env.DEV) return
  sessionStorage.setItem(
    DEV_SCROLL_KEY,
    JSON.stringify({
      y: lenis?.scroll ?? window.scrollY,
      path: location.pathname,
    }),
  )
}

function restoreDevScroll() {
  if (!import.meta.env.DEV) return

  const raw = sessionStorage.getItem(DEV_SCROLL_KEY)
  if (!raw) return

  sessionStorage.removeItem(DEV_SCROLL_KEY)

  try {
    const { y, path } = JSON.parse(raw)
    if (path !== location.pathname || !Number.isFinite(y) || y <= 0) return

    lenis.scrollTo(y, { immediate: true })
    window.scrollTo(0, y)
  } catch {
    // ignore corrupt session data
  }
}

document.addEventListener('astro:page-load', () => {
  if (rafId) cancelAnimationFrame(rafId)
  if (lenis) lenis.destroy()

  lenis = new Lenis({
    duration: 2,
    smoothWheel: true,
    wheelMultiplier: 0.75,
    touchMultiplier: 1.2,
  })

  function raf(time) {
    lenis.raf(time)
    rafId = requestAnimationFrame(raf)
  }
  rafId = requestAnimationFrame(raf)

  restoreDevScroll()
})

if (import.meta.env.DEV) {
  window.addEventListener('pagehide', saveDevScroll)

  if (import.meta.hot) {
    import.meta.hot.on('vite:beforeFullReload', saveDevScroll)
  }
}
