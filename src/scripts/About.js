import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    gsap.registerPlugin(ScrollTrigger);

    document.addEventListener('astro:page-load', () => {
        const contador = document.querySelector('[data-about-number]');
        const section = document.querySelector('#about');
        if (!contador || !section) return;

        const contadorObj = { num: 99 };
        gsap.to(contadorObj, {
        num: 1,
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: 'bottom 50%',
                scrub: 1,
            },
            onUpdate: () => {
                contador.textContent = String(Math.round(contadorObj.num));
            },
        });
        const blocks = document.querySelectorAll('[data-about-block]')

        blocks.forEach(block => {
            gsap.fromTo(block, {opacity: 0, y: 100}, {
                opacity: 1, y: 0,  ease: 'power2.inOut', scrollTrigger: {
                    trigger: block,
                    start: 'top 90%',
                    end: 'bottom 30%',
                    scrub: 1,
                }
            })
        })
    });