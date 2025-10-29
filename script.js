// Navigation toggle for mobile
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }
            
            // Create mailto link
            const subject = `Coffee Inquiry from ${name}`;
            const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
            
            window.location.href = `mailto:Sales@ethiopiancoffeesupply.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Feature animation on scroll
    const features = document.querySelectorAll('.feature');
    
    function checkFeatures() {
        features.forEach(feature => {
            const featureTop = feature.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (featureTop < windowHeight * 0.9) {
                feature.classList.add('visible');
            }
        });
    }
    
    // Initial check
    checkFeatures();
    
    // Check on scroll
    window.addEventListener('scroll', checkFeatures);
    
    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    
    function updateNavbar() {
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'var(--dark-green)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.backgroundColor = 'rgba(26, 60, 52, 0.9)';
            navbar.style.boxShadow = 'none';
        }
    }
    
    // Initial check
    updateNavbar();
    
    // Check on scroll
    window.addEventListener('scroll', updateNavbar);
    
    // Add fade-in animation to elements on scroll
    const fadeElements = document.querySelectorAll('.who-we-are, .why-choose-us, .company-overview, .values-section, .vision-section, .mission-section');
    
    function fadeInOnScroll() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.8) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    // Initial check
    fadeInOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', fadeInOnScroll);
});