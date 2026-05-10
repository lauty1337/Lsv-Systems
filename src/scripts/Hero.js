import gsap from 'gsap';

import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger);

const hero = document.querySelector('[data-hero]');
const heroBtn = document.querySelectorAll('[data-hero-btn]');

const heroIconWeb = document.querySelector('[data-hero-web]');
const heroIconIA = document.querySelector('[data-hero-ia]');
const heroIconArrow = document.querySelector('[data-hero-arrow]');

const heroWebText = new SplitText('[data-hero-web-text]', { type: 'chars', mask: 'chars' });
const heroIAText = new SplitText('[data-hero-ia-text]', { type: 'chars', mask: 'chars' });
const heroArrowText = new SplitText('[data-hero-arrow-text]', { type: 'chars', mask: 'chars' });
const heroSubtitle = new SplitText('[data-hero-subtitle]', { type: 'chars', mask: 'chars' });

gsap.set(heroIconWeb, {autoAlpha: 0})
gsap.set(heroIconIA, {x: 400, y: -100, autoAlpha: 0})
gsap.set(heroIconArrow, {x: 50, y: -300, autoAlpha: 0})
gsap.set(hero, { autoAlpha: 1 })

const tlHero = gsap.timeline({
    defaults: {
        duration: 0.5
    }
});

tlHero

.fromTo(heroIconWeb, {autoAlpha: 0, x: 330, y: 100,  }, {autoAlpha: 1, duration: 0.3})
.fromTo(heroIconIA, {autoAlpha: 0, x: 270, y: -100, rotate: 0, }, {autoAlpha: 1, duration: 0.3}, '<')
.fromTo(heroIconArrow, {autoAlpha: 0, x: 50, y: -300, rotate: 0, }, {autoAlpha: 1, duration: 0.3}, '<')

.to(heroIconWeb, {x: 0, y: 0, duration: 0.6,  ease: 'back.out(2)'},'<+0.2s')
.to(heroIconIA, {x: 0, y: 0, duration: 0.6,  ease: 'back.out(2)'},'<+0.2s')
.to(heroIconArrow, {x: 0, y: 0, duration: 0.6,  rotate: 50, ease: 'back.out(2)'},'<+=0.1s')

.fromTo(heroSubtitle.chars, { y: 200, },  {y: 0, stagger: 0.03, duration: 0.3}, '<')
.fromTo(heroWebText.chars, { y: 200, },  {y: 0, stagger: 0.03, duration: 0.3}, '<=0.7s')
.fromTo(heroIAText.chars, { y: 200, },  {y: 0, stagger: 0.03, duration: 0.3}, '<+0.2s')
.fromTo(heroArrowText.chars, { y: 200, },  {y: 0, stagger: 0.03, duration: 0.3}, '<+0.3s')

.fromTo(heroBtn, {y: 200, autoAlpha: 0}, {y: 0, autoAlpha: 1, stagger: 0.2, clearProps: 'transform,opacity'}, '<+0.1s')


const tlScroll = gsap.timeline({
    scrollTrigger: {
        trigger: hero,
        start: '40% top',
        end: 'bottom top',
        scrub: 1,
    },
})

tlScroll 
.to(hero, { scale: 0.95, filter: 'blur(2 px)', ease: 'none' })





