document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mainNav = document.getElementById('main-nav');
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    const navLogo = document.querySelector('.nav-logo');

    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', function () {
            mainNav.classList.toggle('mobile-active');
            
            // Toggle icon between bars and times
            const icon = mobileMenuBtn.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when a link is clicked
        const navLinks = mainNav.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('mobile-active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            });
        });
    }

    // Shared smooth scroll function
    function scrollToTop(e) {
        if (e) e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Scroll to top button functionality
    if (scrollToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('is-visible');
            } else {
                scrollToTopBtn.classList.remove('is-visible');
            }
        });

        // Add smooth scroll listener
        scrollToTopBtn.addEventListener('click', scrollToTop);
    }

    // Header logo scroll-to-top functionality
    if (navLogo) {
        navLogo.addEventListener('click', scrollToTop);
    }
});
