import gsap from 'gsap';

import { SplitText } from 'gsap/SplitText';
gsap.registerPlugin(SplitText);

const heroIconWeb = document.querySelector('[data-hero-web]');
const heroIconIA = document.querySelector('[data-hero-ia]');
const heroIconArrow = document.querySelector('[data-hero-arrow]');

const heroWebText = new SplitText('[data-hero-web-text]', { type: 'chars', mask: 'chars' });
const heroIAText = new SplitText('[data-hero-ia-text]', { type: 'chars', mask: 'chars' });
const heroArrowText = new SplitText('[data-hero-arrow-text]', { type: 'chars', mask: 'chars' });
const heroSubtitle = new SplitText('[data-hero-subtitle]', { type: 'chars', mask: 'chars' });


gsap.set(heroWebText.chars, { y: 200, });
gsap.set(heroIAText.chars, { y: 200, });
gsap.set(heroArrowText.chars, { y: 200, });
gsap.set(heroSubtitle.chars, { y: 200, });


gsap.set(heroIconWeb, {autoAlpha: 0})
gsap.set(heroIconIA, {x: 325, y: -100, autoAlpha: 0})
gsap.set(heroIconArrow, {x: 50, y: -300, autoAlpha: 0})

const tlHero = gsap.timeline({});

tlHero

.to(heroIconWeb, {autoAlpha: 0, x: 330, y: 100,  duration: 0.2})
.to(heroIconWeb, {autoAlpha: 1, duration: 0.3})
.to(heroIconIA, {autoAlpha: 0, x: 325, y: -100, rotate: 0, duration: 0.2},'<')
.to(heroIconIA, {autoAlpha: 1, duration: 0.3},'<=+0.1s')
.to(heroIconArrow, {autoAlpha: 0, x: 50, y: -300, rotate: 0, duration: 0.2},'<')
.to(heroIconArrow, {autoAlpha: 1, duration: 0.3},'<=+0.1s')

.to(heroIconWeb, {x: 0, y: 0, duration: 0.7, ease: 'back.out(2)'},'<+0.2s')
.to(heroIconIA, {x: 0, y: 0, duration: 0.7, ease: 'back.out(2)'},'<+0.2s')
.to(heroIconArrow, {x: 0, y: 0, duration: 0.7, rotate: 50, ease: 'back.out(2)'},'<+=0.1s')

.to(heroSubtitle.chars, { y: 0, duration: 0.3, stagger: 0.03 }, '<')
.to(heroWebText.chars, { y: 0, duration: 0.3, stagger: 0.03 }, '<+0.5s')
.to(heroIAText.chars, { y: 0, duration: 0.3, stagger: 0.03 }, '<+0.2s')
.to(heroArrowText.chars, { y: 0, duration: 0.3, stagger: 0.03 }, '<+0.3s')


