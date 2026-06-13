document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const navItems = document.querySelectorAll('.nav-links a');
    const exploreBtn = document.getElementById('exploreBtn');
    const cards = document.querySelectorAll('.card, .chip, .section-header');

    // 1. Mobile Hamburger Logic
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('is-active');
        // Disable scrolling when menu is open
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
    });

    // Close menu when link is clicked
    navItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('is-active');
            document.body.style.overflow = 'auto';
        });
    });

    // 2. Smooth Scroll
    exploreBtn.addEventListener('click', () => {
        document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
    });

    // 3. Dynamic Reveal Animation
    const revealOnScroll = () => {
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight - 100;

            if (cardTop < triggerPoint) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial State for Reveal
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)';
    });

    window.addEventListener('scroll', () => {
        window.requestAnimationFrame(revealOnScroll);
    });
    
    revealOnScroll(); // Trigger once on load
});