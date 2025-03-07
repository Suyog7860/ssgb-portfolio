// Main JavaScript for Portfolio Website

// DOM Elements
const navbar = document.getElementById('navbar');
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const typedTextElement = document.querySelector('.typed-text');
const sections = document.querySelectorAll('section');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.getElementById('contactForm');

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Show loader
    const loader = document.createElement('div');
    loader.classList.add('loader');
    loader.innerHTML = `
        <div class="loader-inner">
            <div class="loader-circle"></div>
            <div class="loader-circle"></div>
            <div class="loader-circle"></div>
        </div>
    `;
    document.body.appendChild(loader);

    // Hide loader after page is loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            setTimeout(() => {
                loader.remove();
                initializeAnimations();
            }, 500);
        }, 1500);
    });

    // Initialize all scripts
    initializeNavbar();
    initializeTyping();
    initializeMobileMenu();
    initializeProjectFilters();
    initializeContactForm();
    initializeCustomCursor();
    initializeParallaxEffect();
    
    // Add cursor toggle in corner
    addCursorToggle();
    
    // Initialize theme switcher
    initializeThemeSwitcher();
    
    // Initialize image modal
    initializeImageModal();
});

// Initialize animations with IntersectionObserver
function initializeAnimations() {
    const elements = document.querySelectorAll('.skill-card, .project-card, .section-heading, .about-image-container, .contact-form');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fadeIn');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        observer.observe(element);
    });
}

// Navbar scroll effect
function initializeNavbar() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (mobileMenu.classList.contains('show')) {
                    mobileMenu.classList.remove('show');
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Highlight active section in navbar
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 250)) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('#navbar a').forEach(link => {
            link.classList.remove('text-white');
            link.classList.add('text-gray-300');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.remove('text-gray-300');
                link.classList.add('text-white');
            }
        });
    });
}

// Typing animation for hero section
function initializeTyping() {
    if (!typedTextElement) return;
    
    const phrases = [
        'Web Developer',
        'UI/UX Designer',
        'Mobile App Developer',
        'Freelancer'
    ];
    
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentPhrase = phrases[currentPhraseIndex];

        if (isDeleting) {
            typedTextElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
            currentCharIndex--;
            typingSpeed = 50;
        } else {
            typedTextElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && currentCharIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 1000; // Pause at end of phrase
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pause before typing next phrase
        }

        setTimeout(type, typingSpeed);
    }

    setTimeout(type, 1000);
}

// Mobile menu toggle
function initializeMobileMenu() {
    if (!menuBtn || !mobileMenu) return;
    
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target) && mobileMenu.classList.contains('show')) {
            mobileMenu.classList.remove('show');
        }
    });
}

// Project filter functionality
function initializeProjectFilters() {
    if (!filterBtns.length || !projectCards.length) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = 1;
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = 0;
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Contact form handling
function initializeContactForm() {
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Validate form data
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // You would typically send this data to a server here
        // For demo purposes, we'll just show a success message
        
        // Clear form
        contactForm.reset();
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.classList.add('bg-green-500', 'text-white', 'p-4', 'rounded', 'mb-4');
        successMessage.innerHTML = 'Thank you for your message! I will get back to you soon.';
        
        contactForm.parentNode.insertBefore(successMessage, contactForm);
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    });
}

// Add cursor toggle button
function addCursorToggle() {
    // Create toggle button
    const cursorToggle = document.createElement('button');
    cursorToggle.innerHTML = `<i class="fas fa-mouse-pointer"></i>`;
    cursorToggle.classList.add('cursor-toggle', 'fixed', 'bottom-4', 'right-4', 'bg-gray-800', 'text-white', 'p-3', 'rounded-full', 'shadow-lg', 'z-50');
    cursorToggle.title = "Toggle custom cursor";
    
    // Check if user preference for custom cursor exists
    const customCursorEnabled = localStorage.getItem('customCursor') === 'enabled';
    
    // Apply state based on preference
    if (customCursorEnabled) {
        document.body.classList.add('custom-cursor');
        cursorToggle.classList.add('active');
    }
    
    // Add toggle functionality
    cursorToggle.addEventListener('click', () => {
        document.body.classList.toggle('custom-cursor');
        
        if (document.body.classList.contains('custom-cursor')) {
            localStorage.setItem('customCursor', 'enabled');
            cursorToggle.classList.add('active');
        } else {
            localStorage.setItem('customCursor', 'disabled');
            cursorToggle.classList.remove('active');
        }
    });
    
    document.body.appendChild(cursorToggle);
}

// Custom cursor implementation
function initializeCustomCursor() {
    if (window.matchMedia("(max-width: 768px)").matches) {
        return; // Don't initialize on mobile
    }
    
    const cursorDot = document.createElement('div');
    cursorDot.classList.add('cursor-dot');
    
    const cursorDotOutline = document.createElement('div');
    cursorDotOutline.classList.add('cursor-dot-outline');
    
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorDotOutline);
    
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        
        if (document.body.classList.contains('custom-cursor')) {
            cursorDot.style.opacity = 1;
            cursorDotOutline.style.opacity = 1;
        } else {
            cursorDot.style.opacity = 0;
            cursorDotOutline.style.opacity = 0;
        }
        
        // Cursor dot position
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        
        // Cursor dot outline follows with delay
        cursorDotOutline.style.left = `${posX}px`;
        cursorDotOutline.style.top = `${posY}px`;
    });
    
    // Add hover effect to interactive elements
    document.querySelectorAll('a, button, input, textarea, .project-card, .skill-card').forEach(el => {
        el.addEventListener('mouseenter', () => {
            if (document.body.classList.contains('custom-cursor')) {
                cursorDot.style.transform = 'translate(-50%, -50%) scale(0.7)';
                cursorDotOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorDotOutline.style.backgroundColor = 'rgba(139, 92, 246, 0.2)';
            }
        });
        
        el.addEventListener('mouseleave', () => {
            if (document.body.classList.contains('custom-cursor')) {
                cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorDotOutline.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorDotOutline.style.backgroundColor = 'rgba(139, 92, 246, 0.1)';
            }
        });
    });
    
    // Hide cursor when leaving window
    document.addEventListener('mouseout', (e) => {
        if (e.relatedTarget === null) {
            cursorDot.style.opacity = 0;
            cursorDotOutline.style.opacity = 0;
        }
    });
    
    // Show cursor when entering window
    document.addEventListener('mouseover', () => {
        if (document.body.classList.contains('custom-cursor')) {
            cursorDot.style.opacity = 1;
            cursorDotOutline.style.opacity = 1;
        }
    });
}

// Parallax effect for hero section
function initializeParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.parallax');
    if (!parallaxElements.length) return;
    
    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        const percentX = mouseX / windowWidth - 0.5;
        const percentY = mouseY / windowHeight - 0.5;
        
        parallaxElements.forEach(el => {
            const speed = el.getAttribute('data-speed') || 20;
            const moveX = percentX * speed;
            const moveY = percentY * speed;
            
            el.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
        });
    });
}

// Add parallax effect to hero elements
document.addEventListener('DOMContentLoaded', () => {
    const heroImage = document.querySelector('.hero-image-inner');
    if (heroImage) {
        heroImage.classList.add('parallax');
        heroImage.setAttribute('data-speed', '30');
    }
});

// Theme switcher functionality
function initializeThemeSwitcher() {
    // Create theme switcher container
    const themeSwitcher = document.createElement('div');
    themeSwitcher.classList.add('theme-switcher');
    
    // Create theme options
    const themeOptions = [
        { name: 'dark', icon: 'fa-moon', label: 'Dark Theme' },
        { name: 'light', icon: 'fa-sun', label: 'Light Theme' },
        { name: 'purple', icon: 'fa-palette', label: 'Purple Theme' }
    ];
    
    // Add theme buttons
    themeOptions.forEach(theme => {
        const themeBtn = document.createElement('div');
        themeBtn.classList.add('theme-option', `theme-${theme.name}`);
        themeBtn.setAttribute('data-theme', theme.name);
        themeBtn.setAttribute('title', theme.label);
        themeBtn.innerHTML = `<i class="fas ${theme.icon}"></i>`;
        
        themeBtn.addEventListener('click', () => {
            setTheme(theme.name);
        });
        
        themeSwitcher.appendChild(themeBtn);
    });
    
    document.body.appendChild(themeSwitcher);
    
    // Check for saved theme
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
        setTheme(savedTheme);
    }
}

// Set active theme
function setTheme(themeName) {
    // Remove all theme classes
    document.body.classList.remove('light-theme', 'dark-theme', 'purple-theme');
    
    // Add selected theme class
    if (themeName !== 'dark') {
        document.body.classList.add(`${themeName}-theme`);
    }
    
    // Save to localStorage
    localStorage.setItem('portfolio-theme', themeName);
    
    // Update cursor colors if needed
    if (document.body.classList.contains('custom-cursor')) {
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorDotOutline = document.querySelector('.cursor-dot-outline');
        
        if (cursorDot && cursorDotOutline) {
            if (themeName === 'light') {
                cursorDot.style.background = 'linear-gradient(45deg, var(--color-primary), var(--color-secondary))';
                cursorDotOutline.style.borderColor = 'rgba(139, 92, 246, 0.5)';
            } else if (themeName === 'purple') {
                cursorDot.style.background = 'linear-gradient(45deg, #a855f7, #ec4899)';
                cursorDotOutline.style.borderColor = 'rgba(168, 85, 247, 0.5)';
            } else {
                cursorDot.style.background = 'linear-gradient(45deg, var(--color-primary), var(--color-secondary))';
                cursorDotOutline.style.borderColor = 'rgba(139, 92, 246, 0.5)';
            }
        }
    }
}

// Image modal functionality
function initializeImageModal() {
    // Create modal elements
    const modal = document.createElement('div');
    modal.classList.add('img-modal');
    
    const modalImg = document.createElement('img');
    modalImg.classList.add('img-modal-content');
    
    const closeBtn = document.createElement('span');
    closeBtn.classList.add('img-modal-close');
    closeBtn.innerHTML = '&times;';
    
    modal.appendChild(modalImg);
    modal.appendChild(closeBtn);
    document.body.appendChild(modal);
    
    // Add click handlers to all images
    const images = document.querySelectorAll('.hero-image-inner img, .about-image-container img, .project-image img');
    
    images.forEach(img => {
        img.style.cursor = 'pointer';
        
        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = img.src;
        });
    });
    
    // Close modal on X click
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // Close modal on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Close modal on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
        }
    });
} 