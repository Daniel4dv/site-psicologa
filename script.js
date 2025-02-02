document.addEventListener('DOMContentLoaded', () => {
    // Activate Feather Icons
    feather.replace();

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Section animation
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.setProperty('--section-delay', index);
    });

    // Form submission handler
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        Swal.fire({
            icon: 'success',
            title: 'Mensagem Enviada!',
            text: 'Obrigado pelo seu contato. Retornaremos em breve.',
            confirmButtonColor: '#3a7ca5'
        });
        contactForm.reset();
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255,255,255,0.95)';
            header.style.boxShadow = '0 6px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.backgroundColor = 'white';
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
        }
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        header.classList.toggle('menu-open');
        
        // Improve accessibility
        if (header.classList.contains('menu-open')) {
            nav.setAttribute('aria-hidden', 'false');
            menuToggle.setAttribute('aria-expanded', 'true');
        } else {
            nav.setAttribute('aria-hidden', 'true');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Close menu when a nav link is clicked
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            header.classList.remove('menu-open');
            nav.setAttribute('aria-hidden', 'true');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
});