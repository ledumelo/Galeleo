// Galeleo Landing Page JavaScript
(function() {
    'use strict';

    // Initialize AOS (Animate On Scroll)
    document.addEventListener('DOMContentLoaded', function() {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    });

    // Smooth scrolling for anchor links
    document.addEventListener('DOMContentLoaded', function() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(26, 31, 58, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(26, 31, 58, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Language switcher functionality
    document.addEventListener('DOMContentLoaded', function() {
        const languageLinks = document.querySelectorAll('.dropdown-menu a');
        
        languageLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const url = new URL(window.location);
                const langParam = this.getAttribute('href').split('lang=')[1];
                
                if (langParam) {
                    url.searchParams.set('lang', langParam);
                    window.location.href = url.toString();
                }
            });
        });
    });

    // Form validation and submission
    document.addEventListener('DOMContentLoaded', function() {
        const contactForm = document.querySelector('.contact-form');
        
        if (contactForm) {
            const nameInput = contactForm.querySelector('#name');
            const emailInput = contactForm.querySelector('#email');
            const subjectSelect = contactForm.querySelector('#subject');
            const messageTextarea = contactForm.querySelector('#message');
            const submitButton = contactForm.querySelector('button[type="submit"]');
            
            // Real-time validation
            function validateField(field, validator) {
                const isValid = validator(field.value);
                
                if (isValid) {
                    field.classList.remove('is-invalid');
                    field.classList.add('is-valid');
                } else {
                    field.classList.remove('is-valid');
                    field.classList.add('is-invalid');
                }
                
                return isValid;
            }
            
            // Validation functions
            const validators = {
                name: (value) => value.trim().length >= 2,
                email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
                subject: (value) => value.trim().length > 0,
                message: (value) => value.trim().length >= 10 && value.trim().length <= 1000
            };
            
            // Add event listeners for real-time validation
            if (nameInput) {
                nameInput.addEventListener('blur', () => validateField(nameInput, validators.name));
                nameInput.addEventListener('input', () => {
                    if (nameInput.classList.contains('is-invalid')) {
                        validateField(nameInput, validators.name);
                    }
                });
            }
            
            if (emailInput) {
                emailInput.addEventListener('blur', () => validateField(emailInput, validators.email));
                emailInput.addEventListener('input', () => {
                    if (emailInput.classList.contains('is-invalid')) {
                        validateField(emailInput, validators.email);
                    }
                });
            }
            
            if (subjectSelect) {
                subjectSelect.addEventListener('change', () => validateField(subjectSelect, validators.subject));
            }
            
            if (messageTextarea) {
                messageTextarea.addEventListener('blur', () => validateField(messageTextarea, validators.message));
                messageTextarea.addEventListener('input', () => {
                    // Character counter
                    const charCount = messageTextarea.value.length;
                    const maxChars = 1000;
                    const helpText = messageTextarea.parentNode.querySelector('.form-text');
                    
                    if (helpText) {
                        helpText.textContent = `${charCount}/${maxChars} caracteres`;
                        
                        if (charCount > maxChars) {
                            helpText.classList.add('text-danger');
                        } else {
                            helpText.classList.remove('text-danger');
                        }
                    }
                    
                    if (messageTextarea.classList.contains('is-invalid')) {
                        validateField(messageTextarea, validators.message);
                    }
                });
            }
            
            // Form submission
            contactForm.addEventListener('submit', function(e) {
                const isNameValid = !nameInput || validateField(nameInput, validators.name);
                const isEmailValid = !emailInput || validateField(emailInput, validators.email);
                const isSubjectValid = !subjectSelect || validateField(subjectSelect, validators.subject);
                const isMessageValid = !messageTextarea || validateField(messageTextarea, validators.message);
                
                if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
                    e.preventDefault();
                    
                    // Scroll to first invalid field
                    const firstInvalid = contactForm.querySelector('.is-invalid');
                    if (firstInvalid) {
                        firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        firstInvalid.focus();
                    }
                } else {
                    // Show loading state
                    if (submitButton) {
                        const originalText = submitButton.innerHTML;
                        submitButton.innerHTML = '<span class="loading"></span> Enviando...';
                        submitButton.disabled = true;
                        
                        // Re-enable after 5 seconds (fallback)
                        setTimeout(() => {
                            submitButton.innerHTML = originalText;
                            submitButton.disabled = false;
                        }, 5000);
                    }
                }
            });
        }
    });

    // Card hover effects
    document.addEventListener('DOMContentLoaded', function() {
        const cards = document.querySelectorAll('.service-card, .case-card, .blog-post-card, .contact-info-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    });

    // FAQ accordion enhancements
    document.addEventListener('DOMContentLoaded', function() {
        const accordionButtons = document.querySelectorAll('.accordion-button');
        
        accordionButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Add smooth transition
                const targetCollapse = document.querySelector(this.getAttribute('data-bs-target'));
                
                if (targetCollapse) {
                    targetCollapse.addEventListener('shown.bs.collapse', function() {
                        // Scroll to view if needed
                        if (window.innerHeight < this.scrollHeight + this.offsetTop) {
                            this.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                        }
                    });
                }
            });
        });
    });

    // Statistics counter animation
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.textContent.replace(/\D/g, ''));
            const suffix = counter.textContent.replace(/\d/g, '');
            let current = 0;
            const increment = target / 100;
            const duration = 2000; // 2 seconds
            const stepTime = duration / 100;
            
            const timer = setInterval(() => {
                current += increment;
                
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                
                counter.textContent = Math.floor(current) + suffix;
            }, stepTime);
        });
    }

    // Intersection Observer for counter animation
    document.addEventListener('DOMContentLoaded', function() {
        const statsSection = document.querySelector('.experience-section');
        
        if (statsSection) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounters();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(statsSection);
        }
    });

    // Image lazy loading enhancement
    document.addEventListener('DOMContentLoaded', function() {
        const images = document.querySelectorAll('img');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        
                        // Check if image is already loaded (cached)
                        const isImageLoaded = img.complete && img.naturalWidth > 0;
                        
                        if (isImageLoaded) {
                            // Image is already loaded - show it immediately
                            img.style.opacity = '1';
                            img.style.transform = 'scale(1)';
                            img.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                        } else {
                            // Image not loaded yet - add loading transition
                            img.addEventListener('load', function() {
                                this.style.opacity = '1';
                                this.style.transform = 'scale(1)';
                            });
                            
                            img.style.opacity = '0';
                            img.style.transform = 'scale(0.95)';
                            img.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                        }
                        
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        }
    });

    // Mobile menu enhancements
    document.addEventListener('DOMContentLoaded', function() {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        
        if (navbarToggler && navbarCollapse) {
            // Close mobile menu when clicking on a link
            const navLinks = navbarCollapse.querySelectorAll('.nav-link');
            
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                        toggle: false
                    });
                    bsCollapse.hide();
                });
            });
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', function(e) {
                const isClickInsideNav = navbarCollapse.contains(e.target) || navbarToggler.contains(e.target);
                
                if (!isClickInsideNav && navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                        toggle: false
                    });
                    bsCollapse.hide();
                }
            });
        }
    });

    // Search functionality (if needed in the future)
    function initializeSearch() {
        const searchInput = document.querySelector('#searchInput');
        
        if (searchInput) {
            let searchTimeout;
            
            searchInput.addEventListener('input', function() {
                clearTimeout(searchTimeout);
                
                searchTimeout = setTimeout(() => {
                    const query = this.value.toLowerCase();
                    // Implement search functionality here
                    console.log('Searching for:', query);
                }, 300);
            });
        }
    }

    // Performance monitoring
    window.addEventListener('load', function() {
        // Log performance metrics
        if ('performance' in window) {
            const loadTime = performance.now();
            console.log(`Page loaded in ${Math.round(loadTime)}ms`);
        }
    });

    // Error handling for external resources
    window.addEventListener('error', function(e) {
        if (e.target.tagName === 'IMG') {
            // Handle image loading errors
            e.target.style.display = 'none';
            console.warn('Image failed to load:', e.target.src);
        }
    }, true);

    // Back to Top Button functionality
    document.addEventListener('DOMContentLoaded', function() {
        const backToTopBtn = document.getElementById('back-to-top-btn');
        
        if (backToTopBtn) {
            // Show/hide button based on scroll position
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
                    backToTopBtn.classList.add('show');
                } else {
                    backToTopBtn.classList.remove('show');
                }
            });
            
            // Scroll to top when clicked
            backToTopBtn.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    });

    // Initialize all modules
    document.addEventListener('DOMContentLoaded', function() {
        initializeSearch();
        
        // Add any additional initialization code here
        console.log('Galeleo website initialized successfully');
    });

})();
