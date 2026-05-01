import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const serviceCard = document.querySelectorAll('[data-service]');



serviceCard.forEach((card) => {
    const title = card.querySelector('[data-service-title]');
    const image = card.querySelector('[data-service-image]');
    const description = card.querySelector('[data-service-description]');
    const price = card.querySelector('[data-service-price]');

    
    const tlService = gsap.timeline({
        scrollTrigger: {
            trigger: card,
            markers: true,
            scrub: 1,
            start: 'top bottom',
            end: 'bottom top',
        }
    })
    
    tlService
    .fromTo(title, { yPercent:-200, rotate: -5,opacity:0, filter: 'blur(3px)'}, {yPercent: 8, opacity:1, filter: 'blur(0px)', rotate: 0, duration: 0.35})
    .fromTo(description, {yPercent: 8, opacity:0, filter: 'blur(4px)'}, {yPercent: 0, opacity: 1, filter: 'blur(0px)', duration: 0.2}, '<+=0.1s')
    .fromTo(image, { scale: 0.7}, {scale: 1, duration: 0.6}, '<')
    .fromTo(price, { yPercent:8, opacity:0, filter: 'blur(4px)'}, {yPercent: 0, opacity:1, filter: 'blur(0px)', duration: 0.2}, '<+=0.1s')
});

