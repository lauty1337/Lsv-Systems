import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    gsap.registerPlugin(ScrollTrigger);

    document.addEventListener('astro:page-load', () => {
        const contador = document.querySelector('[data-about-number]');
        const section = document.querySelector('#about');
        if (!contador || !section) return;

        ScrollTrigger.getAll().forEach((st) => {
            if (st.trigger === section) st.kill();
        });

        const contadorObj = { num: 99 };

        gsap.to(contadorObj, {
            num: 1,
            duration: 20,
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
            },
            onUpdate: () => {
                contador.textContent = String(Math.round(contadorObj.num));
            },
        });
    });