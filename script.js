AOS.init({ duration: 1000, once: true });
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const height = document.body.scrollHeight - window.innerHeight;
    const progress = (scrolled / height) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';
});

new Typed('#typed', {
    strings: ['Rust, Python & Django Developer', 'Cybersecurity & Linux Enthusiast', 'Always Building. Always Learning.'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1500,
    loop: true
});


window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const nav = document.querySelector('nav');
    if (scrolled > 20) {
        nav.classList.add('shrink');
    } else {
        nav.classList.remove('shrink');
    }

    const height = document.body.scrollHeight - window.innerHeight;
    const progress = (scrolled / height) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';
});
