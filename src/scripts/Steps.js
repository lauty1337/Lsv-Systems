import gsap from 'gsap'; 
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();
const buttons = document.querySelectorAll('[data-step-button]')
buttons.forEach(button => {
    button.addEventListener( 'click', ()  => {
        const wrapper = button.querySelector('[data-panel-wrapper]')
        const icon = button.querySelector('[data-icon]')
        const pulse = button.querySelector('[data-pulse]')
        const isOpen = wrapper._isOpen
        if (isOpen) {
            gsap.to(wrapper, {height: 0, duration: 0.3, ease: 'power2.inOut'})
            gsap.to(icon, {rotation: 0, duration: 0.3, ease: 'back.out(1.7)'})
            gsap.fromTo(pulse, {scale: 1.5, duration: 1, ease: 'back.out(1.7)'}, {scale: 1, duration: 0.3, ease: 'back.out(1.7)'})
            wrapper._isOpen = false
        } else {
            gsap.to(wrapper, {height: 'auto', duration: 0.3, ease: 'power2.inOut'})
            gsap.to(icon, {rotation: 180, duration: 0.3, ease: 'back.out(1.7)'})
            gsap.fromTo(pulse, {scale: 1.5, duration: 1, ease: 'back.out(1.7)'}, {scale: 1, duration: 0.3, ease: 'back.out(1.7)'})
            wrapper._isOpen = true
        }
    });
});
