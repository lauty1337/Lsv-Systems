import gsap from 'gsap';

document.addEventListener('astro:page-load', () => {

const header = document.querySelector('header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY
    if (currentScrollY <= 10) {
      header.classList.remove('-translate-y-full')
      lastScrollY = currentScrollY
      return
    }
    if (currentScrollY > lastScrollY) {
      header.classList.add('-translate-y-full')
    } else {
      header.classList.remove('-translate-y-full')
    }
    lastScrollY = currentScrollY
  })

const initTheme = () => {
    
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = stored ? stored === 'dark' : prefersDark;
  document.documentElement.classList.toggle('dark', isDark);
}
initTheme();

const themeBtnDark = document.querySelector('[data-theme-btn="dark"]');
const themeBtnLight = document.querySelector('[data-theme-btn="light"]');

// Theme Toggle
themeBtnDark.addEventListener('click', () => {
    document.documentElement.classList.add('dark');
    themeBtnDark.setAttribute('data-active', 'true');
    themeBtnLight.setAttribute('data-active', 'false');
    localStorage.setItem('theme', 'dark');

});
themeBtnLight.addEventListener('click', () => {
    document.documentElement.classList.remove('dark');
    themeBtnLight.setAttribute('data-active', 'true');
    themeBtnDark.setAttribute('data-active', 'false');
    localStorage.setItem('theme', 'light');
});

// Menu Header

const nav = document.querySelector('[data-menu-header]');
const navItems = document.querySelectorAll('[data-nav-item]');
const navToggler = document.querySelector('[data-nav-toggler]');

let isOpen = false;
let isAnimating = false;


gsap.set(nav, { width: 0, height: 0, autoAlpha: 0, overflow: 'hidden', clearProps: 'visibility' });
gsap.set(navItems, { yPercent: 100, opacity: 0 });


const tl = gsap.timeline({
    paused: true,
    onComplete: () => {
        isAnimating = false;
    },
    onReverseComplete: () => {
        isAnimating = false;
    },  
})

tl
.to(nav, { width: 'auto', duration: 0.2,})
.to(nav, { height: 'auto', autoAlpha: 1, duration: 0.2, }, '<')
.to(navItems, { yPercent: 0, opacity: 1, duration: 0.2, stagger: 0.06, clearProps: 'transform,opacity'}, 0.05)

.to('[data-line-top]', {rotate: 45, y: 2, duration: 0.3, }, 0.15)
.to('[data-line-mid]', {opacity: 0, duration: 0.3, }, 0.15)
.to('[data-line-bot]', {rotate: -45, y: -2, duration: 0.3, }, 0.15)

.to('[data-label-menu]', { yPercent: -100, duration: 0.3, }, 0.15)
.to('[data-label-close]', { yPercent: -100, duration: 0.3, }, 0.15)

navToggler.addEventListener('click', () => {
    if (isAnimating) return;
    isAnimating = true;

    isOpen = !isOpen;
    navToggler.setAttribute('aria-expanded', String(isOpen));

    if(isOpen) {
        tl.play();
    } else {
        tl.reverse()
    }
})

});
