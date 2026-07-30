import gsap from 'gsap'; 
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

const processContainer = document.querySelector('[data-process-container]');


function TimelineProcess(eje) {
    const steps = processContainer.querySelectorAll('[data-step]');
    const progressBar = document.querySelector('[data-progress-bar]');

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: processContainer,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
        }
    });
    tl.to(progressBar, {[eje]: 1, ease: 'none'}, 0);
    
    steps.forEach((step, i) => {
        tl.to(step, { opacity: 1, duration: 0.1 }, i / steps.length);
      });
}

mm.add("(max-width: 767px)", () => crearTimelineSteps('scaleY'));
mm.add("(min-width: 768px)", () => crearTimelineSteps('scaleX'));
