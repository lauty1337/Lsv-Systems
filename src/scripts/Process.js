import gsap from 'gsap'; 
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

const processContainer = document.querySelector('[data-process-container]');



