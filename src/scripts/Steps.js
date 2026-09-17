import gsap from 'gsap';

let mm = gsap.matchMedia();

document.addEventListener('astro:page-load', () => {
const buttons = document.querySelectorAll('[data-step-button]')
const navItems = document.querySelectorAll('[data-step-nav]')
const progressBar = document.querySelector('[data-progress-bar]')
const progressLabel = document.querySelector('[data-progress-label]')

function setProgress(index) {
    const percent = index === null ? 0 : ((index + 1) / buttons.length) * 100

    gsap.to(progressBar, {width: `${percent}%`, duration: 0.4, ease: 'power2.out'})
    progressLabel.textContent = `${Math.round(percent)}%`

    navItems.forEach((item, i) => {
        if (i === index) item.setAttribute('aria-current', 'step')
        else item.removeAttribute('aria-current')
    })
}

mm.add({isDesktop: '(min-width: 768px)', isMobile: '(max-width: 767px)'}, (context) => {
    const { isDesktop } = context.conditions
    let openIndex = null

    function setTab(button, isOpen) {
        if (isDesktop) {
            gsap.to(button, {rotationY: isOpen ? 180 : 0, duration: 1, ease: 'back.out(1.7)'})
        } else {
            const wrapper = button.querySelector('[data-panel-wrapper]')
            const icon = button.querySelector('[data-icon]')
            gsap.to(wrapper, {height: isOpen ? 'auto' : 0, duration: 0.3, ease: 'power2.inOut'})
            gsap.to(icon, {rotation: isOpen ? 180 : 0, duration: 1, ease: 'back.out(2.5)'})
        }
        button.setAttribute('aria-expanded', isOpen)
    }

    const onClick = (event) => {
        const index = Number(event.currentTarget.dataset.stepIndex)
        openIndex = openIndex === index ? null : index

        buttons.forEach((button, i) => setTab(button, i === openIndex))
        setProgress(openIndex)
    }

    gsap.set(buttons, {clearProps: 'all'})
    buttons.forEach(button => setTab(button, false))
    setProgress(null)

    buttons.forEach(button => button.addEventListener('click', onClick))
    return () => buttons.forEach(button => button.removeEventListener('click', onClick))
})
})
