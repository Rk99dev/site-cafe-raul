const mobileBtn = document.querySelector('.btn-mobile');
const navLinks = document.getElementById('nav-links');

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    mobileBtn.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    const header = document.getElementById('header');

    if (window.scrollY > 0) {
        header.style.boxShadow = '0 40px 100px rgba(245, 197, 24, 0.2)';
    } else {
        header.style.boxShadow = 'none';
    }
});

const elementsToReveal = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.1
});

elementsToReveal.forEach((element) => {
    observer.observe(element);
});





