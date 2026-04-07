// ============================================
// PRIVANTA - CUSTOM JAVASCRIPT
// ============================================

// Technology Details Database
const techDatabase = {
    'Java EE': {
        title: 'Java EE (Enterprise Edition)',
        icon: '🔨',
        description: `Java EE is our go-to technology for enterprise-level backend systems. We use it to build:
        <ul class="mt-3">
            <li><strong>Large-scale enterprise applications</strong> with high reliability and performance</li>
            <li><strong>RESTful APIs</strong> that power mobile and web applications</li>
            <li><strong>Microservices architectures</strong> using technologies like Spring Cloud</li>
            <li><strong>Complex business logic systems</strong> with data persistence and transaction management</li>
            <li><strong>Real-time systems</strong> with WebSocket support for live updates</li>
        </ul>
        <p class="mt-3"><strong>Why we choose it:</strong> Industry-proven, highly scalable, excellent community support, and perfect for mission-critical systems.</p>`
    },
    'Spring Boot': {
        title: 'Spring Boot',
        icon: '🌱',
        description: `Spring Boot simplifies Java development and is the foundation of our modern backend services. We develop:
        <ul class="mt-3">
            <li><strong>Rapid application development</strong> with minimal configuration</li>
            <li><strong>RESTful web services</strong> with built-in data validation and error handling</li>
            <li><strong>Microservices</strong> with containerization and orchestration support</li>
            <li><strong>Database-driven applications</strong> using Spring Data JPA</li>
            <li><strong>Secure applications</strong> with Spring Security for authentication and authorization</li>
        </ul>
        <p class="mt-3"><strong>Why we choose it:</strong> Speeds up development, provides excellent ecosystem, and integrates seamlessly with existing Java systems.</p>`
    },
    'Python Django': {
        title: 'Python Django',
        icon: '🐍',
        description: `Django is our framework of choice for rapid web development and data-driven applications. We build:
        <ul class="mt-3">
            <li><strong>Content management systems</strong> with powerful admin panels</li>
            <li><strong>Web applications</strong> with built-in ORM and database migrations</li>
            <li><strong>Data APIs</strong> for complex business intelligence systems</li>
            <li><strong>Rapid prototypes</strong> to validate business ideas quickly</li>
            <li><strong>Admin dashboards</strong> for system management and monitoring</li>
        </ul>
        <p class="mt-3"><strong>Why we choose it:</strong> "Batteries included" philosophy, rapid development, excellent documentation, and great security features out of the box.</p>`
    },
    'Python Flask': {
        title: 'Python Flask',
        icon: '⚗️',
        description: `Flask is our lightweight framework for flexible and custom backend applications. We use it for:
        <ul class="mt-3">
            <li><strong>Microservices</strong> that need to be lightweight and efficient</li>
            <li><strong>APIs</strong> with custom business logic and workflows</li>
            <li><strong>Real-time applications</strong> using WebSockets and async support</li>
            <li><strong>Quick prototypes</strong> with minimal overhead</li>
            <li><strong>Serverless functions</strong> deployed on cloud platforms</li>
        </ul>
        <p class="mt-3"><strong>Why we choose it:</strong> Minimal and flexible, easy to learn, perfect for building exactly what you need without bloat.</p>`
    },
    'PHP': {
        title: 'PHP',
        icon: '🐘',
        description: `PHP powers many of our server-side applications and integrations. We develop:
        <ul class="mt-3">
            <li><strong>Dynamic web applications</strong> with server-side rendering</li>
            <li><strong>Legacy system integrations</strong> and migrations</li>
            <li><strong>Server-side scripts</strong> for automation and data processing</li>
            <li><strong>CMS customization</strong> and plugin development</li>
            <li><strong>Real-time communication systems</strong> with WebSocket support</li>
        </ul>
        <p class="mt-3"><strong>Why we choose it:</strong> Widespread hosting support, fast execution, easy to deploy, and excellent for rapid development.</p>`
    },
    'Laravel': {
        title: 'Laravel Framework',
        icon: '✨',
        description: `Laravel is our modern PHP framework for elegant and productive development. We build:
        <ul class="mt-3">
            <li><strong>Full-featured web applications</strong> with beautiful syntax</li>
            <li><strong>RESTful APIs</strong> with comprehensive documentation</li>
            <li><strong>Real-time applications</strong> using Laravel Echo and WebSockets</li>
            <li><strong>Scalable SaaS platforms</strong> with multi-tenancy support</li>
            <li><strong>Job queues and background processing</strong> for async operations</li>
        </ul>
        <p class="mt-3"><strong>Why we choose it:</strong> Clean syntax, rich ecosystem, powerful ORM (Eloquent), great for modern PHP development.</p>`
    },
    'MySQL': {
        title: 'MySQL Database',
        icon: '🗄️',
        description: `MySQL is our primary relational database for most applications. We use it for:
        <ul class="mt-3">
            <li><strong>ACID-compliant transactions</strong> ensuring data integrity</li>
            <li><strong>Web applications</strong> storing user data and content</li>
            <li><strong>Business systems</strong> with complex relationships and queries</li>
            <li><strong>High-availability setups</strong> with replication and clustering</li>
            <li><strong>Real-time analytics</strong> and reporting systems</li>
        </ul>
        <p class="mt-3"><strong>Why we choose it:</strong> Reliable, fast, open-source, and widely supported across hosting platforms.</p>`
    },
    'PostgreSQL': {
        title: 'PostgreSQL Database',
        icon: '🐘',
        description: `PostgreSQL is our choice for advanced database requirements. We leverage it for:
        <ul class="mt-3">
            <li><strong>Complex data types</strong> including JSON, arrays, and custom types</li>
            <li><strong>Advanced queries</strong> with powerful join capabilities</li>
            <li><strong>Full-text search</strong> capabilities for content discovery</li>
            <li><strong>Geospatial data</strong> with PostGIS extension</li>
            <li><strong>Enterprise applications</strong> requiring maximum reliability</li>
        </ul>
        <p class="mt-3"><strong>Why we choose it:</strong> Most advanced open-source database, excellent data integrity, rich features, and superior performance.</p>`
    },
    'Flutter': {
        title: 'Flutter Mobile Development',
        icon: '📱',
        description: `Flutter enables us to build beautiful, native mobile applications for both iOS and Android. We create:
        <ul class="mt-3">
            <li><strong>Cross-platform mobile apps</strong> from a single codebase</li>
            <li><strong>High-performance applications</strong> with smooth animations</li>
            <li><strong>Feature-rich user interfaces</strong> with Material and Cupertino designs</li>
            <li><strong>Real-time applications</strong> with live data updates</li>
            <li><strong>Offline-capable apps</strong> with local data storage</li>
        </ul>
        <p class="mt-3"><strong>Why we choose it:</strong> Single codebase for multiple platforms, exceptional performance, beautiful UI by default.</p>`
    },
    'JavaFX': {
        title: 'JavaFX Desktop Development',
        icon: '🖥️',
        description: `JavaFX is our framework for building modern desktop applications with rich UIs. We develop:
        <ul class="mt-3">
            <li><strong>Cross-platform desktop applications</strong> that run anywhere Java runs</li>
            <li><strong>Data visualization applications</strong> with charts and graphs</li>
            <li><strong>Business tools</strong> with responsive and interactive interfaces</li>
            <li><strong>Enterprise applications</strong> requiring desktop deployment</li>
            <li><strong>Media-rich applications</strong> with audio and video support</li>
        </ul>
        <p class="mt-3"><strong>Why we choose it:</strong> Modern Java UI toolkit, hardware-accelerated graphics, and excellent for cross-platform desktop apps.</p>`
    },
    'Bootstrap 5': {
        title: 'Bootstrap 5 Framework',
        icon: '🎨',
        description: `Bootstrap 5 is the foundation of our responsive and beautiful frontend designs. We use it for:
        <ul class="mt-3">
            <li><strong>Responsive web design</strong> that looks great on all devices</li>
            <li><strong>Pre-built components</strong> including buttons, forms, and navigation</li>
            <li><strong>Rapid prototyping</strong> with ready-made utilities</li>
            <li><strong>Consistent branding</strong> across all projects</li>
            <li><strong>Accessibility compliance</strong> out of the box</li>
        </ul>
        <p class="mt-3"><strong>Why we choose it:</strong> Industry-standard framework, huge community, extensive documentation, and excellent customization options.</p>`
    },
    'Ubuntu': {
        title: 'Ubuntu Operating System',
        icon: '🐧',
        description: `Ubuntu is our primary operating system for servers and development machines. We use it for:
        <ul class="mt-3">
            <li><strong>Server deployments</strong> for web applications and APIs</li>
            <li><strong>Development environments</strong> with tools and libraries</li>
            <li><strong>Docker containers</strong> and containerized applications</li>
            <li><strong>CI/CD pipelines</strong> for automated testing and deployment</li>
            <li><strong>Cloud infrastructure</strong> on major cloud providers</li>
        </ul>
        <p class="mt-3"><strong>Why we choose it:</strong> Reliability, security updates, excellent package management, and strong community support.</p>`
    },
    'Debian': {
        title: 'Debian Operating System',
        icon: '🐴',
        description: `Debian is our choice for stable, long-term production environments. We deploy on Debian for:
        <ul class="mt-3">
            <li><strong>Mission-critical servers</strong> requiring maximum stability</li>
            <li><strong>Production environments</strong> with long support cycles</li>
            <li><strong>Legacy system support</strong> with proven reliability</li>
            <li><strong>Minimal resource systems</strong> with lean configurations</li>
            <li><strong>High-security deployments</strong> with minimal attack surface</li>
        </ul>
        <p class="mt-3"><strong>Why we choose it:</strong> Unmatched stability, security focus, long LTS (Long Term Support), and conservative approach to updates.</p>`
    },
    'SQLite': {
        title: 'SQLite Database',
        icon: '📱',
        description: `SQLite is our lightweight, embedded database solution for applications requiring portability and offline functionality. We use it for:
        <ul class="mt-3">
            <li><strong>Mobile applications</strong> that need local data storage</li>
            <li><strong>Desktop applications</strong> with self-contained databases</li>
            <li><strong>IoT devices</strong> and embedded systems with limited resources</li>
            <li><strong>Offline-first applications</strong> that sync when connectivity is restored</li>
            <li><strong>Prototyping and testing</strong> with minimal setup overhead</li>
        </ul>
        <p class="mt-3"><strong>Why we choose it:</strong> Zero-configuration, cross-platform, ACID-compliant, perfect for mobile and embedded applications, and excellent for development/testing.</p>`
    }
};

// Services Details Database
const servicesDatabase = {
    'Software Services': {
        icon: '💻',
        description: `Comprehensive software development services covering web applications, mobile apps, and desktop software. We build scalable solutions tailored to your business needs.
        <h6 class="mt-4 fw-bold">Web Applications:</h6>
        <ul class="mt-2">
            <li><strong>Custom web development</strong> with modern frameworks and responsive design</li>
            <li><strong>E-commerce platforms</strong> with secure payment processing</li>
            <li><strong>Business portals</strong> and content management systems</li>
            <li><strong>Real-time collaboration tools</strong> for team productivity</li>
        </ul>
        <h6 class="mt-4 fw-bold">Mobile Applications:</h6>
        <ul class="mt-2">
            <li><strong>Cross-platform mobile apps</strong> for iOS and Android</li>
            <li><strong>Native-quality performance</strong> with optimized code</li>
            <li><strong>Offline-capable applications</strong> with data sync</li>
            <li><strong>Real-time connectivity</strong> and business productivity apps</li>
        </ul>
        <h6 class="mt-4 fw-bold">Desktop Applications:</h6>
        <ul class="mt-2">
            <li><strong>Data visualization tools</strong> with charts and analytics</li>
            <li><strong>Business software</strong> for operations and management</li>
            <li><strong>Scientific and engineering applications</strong></li>
            <li><strong>Modern UI desktop clients</strong> with rich interfaces</li>
        </ul>`
    },
    'Video Editing': {
        icon: '🎬',
        description: `Professional video editing services using industry-leading tools to create compelling visual content for your brand.
        <h6 class="mt-4 fw-bold">Our Services Include:</h6>
        <ul class="mt-2">
            <li><strong>Marketing videos</strong> for social media and advertising campaigns</li>
            <li><strong>Corporate videos</strong> for company presentations and training</li>
            <li><strong>Product demonstrations</strong> showcasing features and benefits</li>
            <li><strong>Animation and motion graphics</strong> for dynamic content</li>
            <li><strong>Color grading and effects</strong> for professional polish</li>
        </ul>
        <h6 class="mt-4 fw-bold">Our Process:</h6>
        <p class="mt-2">We create compelling visual stories that engage your audience. Every project includes concept development, editing, effects, and revision cycles until you're satisfied.</p>`
    },
    'Photo Editing': {
        icon: '📸',
        description: `Expert photo editing and retouching services to enhance your visual content and create professional imagery.
        <h6 class="mt-4 fw-bold">What We Offer:</h6>
        <ul class="mt-2">
            <li><strong>Product photography retouching</strong> for e-commerce and catalogs</li>
            <li><strong>Portrait enhancement</strong> for professional headshots</li>
            <li><strong>Background removal and replacement</strong> for clean compositions</li>
            <li><strong>Color correction and grading</strong> for consistent visual style</li>
            <li><strong>Batch editing</strong> for large photo collections</li>
        </ul>
        <h6 class="mt-4 fw-bold">Our Process:</h6>
        <p class="mt-2">We transform ordinary photos into extraordinary visual assets using professional techniques. We maintain all original files and provide multiple format exports.</p>`
    },
    'Logo Design': {
        icon: '🎨',
        description: `Creative logo design services that capture your brand identity and make your business memorable.
        <h6 class="mt-4 fw-bold">Our Design Process:</h6>
        <ul class="mt-2">
            <li><strong>Brand discovery</strong> - understanding your vision, values, and target audience</li>
            <li><strong>Concept development</strong> - creating multiple design directions</li>
            <li><strong>Refinement</strong> - iterating on selected concepts with your feedback</li>
            <li><strong>Finalization</strong> - delivering files in all formats</li>
            <li><strong>Brand guidelines</strong> - usage rules for consistency across materials</li>
        </ul>
        <h6 class="mt-4 fw-bold">Deliverables:</h6>
        <p class="mt-2">You'll receive a versatile logo that works on business cards, websites, signage, and social media. We provide unlimited revisions until your design is perfect.</p>`
    },
    'Tarp and Banners Custom Design': {
        icon: '🚩',
        description: `Professional custom tarp and banner design services for events, advertising, promotions, and branding.
        <h6 class="mt-4 fw-bold">What We Create:</h6>
        <ul class="mt-2">
            <li><strong>Event banners</strong> for conferences, trade shows, and special occasions</li>
            <li><strong>Advertising tarps</strong> for high visibility and brand awareness</li>
            <li><strong>Building wraps</strong> and signage for commercial spaces</li>
            <li><strong>Promotional materials</strong> for sales, launches, and marketing campaigns</li>
            <li><strong>Custom sizes and formats</strong> tailored to your specific needs</li>
        </ul>
        <h6 class="mt-4 fw-bold">Design Features:</h6>
        <p class="mt-2">High-quality graphics, professional typography, and eye-catching designs. We consider weather resistance, visibility from distance, and printing requirements to ensure your banners make maximum impact.</p>`
    },
    'CCTV Installations': {
        icon: '📹',
        description: `Comprehensive security surveillance solutions with professional installation, configuration, and maintenance services.
        <h6 class="mt-4 fw-bold">Our Services:</h6>
        <ul class="mt-2">
            <li><strong>System design</strong> - assessing your security needs and recommending optimal coverage</li>
            <li><strong>Installation</strong> - professional setup with proper cable routing and placement</li>
            <li><strong>Configuration</strong> - settings for recording, alerts, and remote access</li>
            <li><strong>Maintenance</strong> - regular checks and technical support</li>
            <li><strong>Monitoring setup</strong> - integration with security centers for 24/7 surveillance</li>
        </ul>
        <h6 class="mt-4 fw-bold">Technology:</h6>
        <p class="mt-2">We install high-resolution HD systems with cloud backup and night vision capabilities. Your footage is secure and accessible from anywhere, anytime.</p>`
    },
    'Server Setup': {
        icon: '🖥️',
        description: `Professional server deployment, configuration, and management for reliable, secure business operations.
        <h6 class="mt-4 fw-bold">Server Services:</h6>
        <ul class="mt-2">
            <li><strong>Physical/cloud server setup</strong> - on-premises or cloud-based solutions</li>
            <li><strong>Operating system configuration</strong> - robust and secure systems</li>
            <li><strong>Application deployment</strong> - hosting your applications and services</li>
            <li><strong>Database setup</strong> - configuration and optimization</li>
            <li><strong>Backup and disaster recovery</strong> - protecting your critical data</li>
        </ul>
        <h6 class="mt-4 fw-bold">Security & Maintenance:</h6>
        <p class="mt-2">We implement security hardening, regular patching, and proactive monitoring for maximum uptime and performance. Your infrastructure stays secure and efficient.</p>`
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    animateOnLoad();
    
    // Initialize tooltips and popovers
    initializeBootstrapComponents();
    
    // Handle contact form submission
    setupContactForm();
    
    // Setup background carousel
    setupBackgroundCarousel();
    
    // Add fade-in animation on scroll
    setupScrollAnimation();
    
    // Smooth scroll spy for navigation
    setupNavigation();
    
    // Add parallax effect
    setupParallaxEffect();
    
    // Add cursor effect
    setupCursorEffect();
});

// ============================================
// Animate Elements On Load
// ============================================

function animateOnLoad() {
    const heading = document.querySelector('.hero-section h1');
    const lead = document.querySelector('.hero-section .lead');
    const buttons = document.querySelectorAll('.hero-section .btn');
    
    if (heading) heading.style.animation = 'slideInLeft 0.8s ease-out';
    if (lead) lead.style.animation = 'slideInLeft 0.8s ease-out 0.2s both';
    
    buttons.forEach((btn, index) => {
        btn.style.animation = `slideInLeft 0.8s ease-out ${0.4 + index * 0.1}s both`;
    });
}

// ============================================
// Initialize Bootstrap Components
// ============================================

function initializeBootstrapComponents() {
    // Initialize all Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
}

// ============================================
// Contact Form Handler
// ============================================

function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) {
        console.warn('Contact form not found');
        return;
    }
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        try {
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value.trim();
            
            // Validation
            if (!name || !email || !service || !message) {
                showAlert('Please fill in all fields', 'warning');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showAlert('Please enter a valid email address', 'warning');
                return;
            }
            
            // Send form data (you can integrate with a backend API here)
            const formData = {
                name,
                email,
                service,
                message,
                timestamp: new Date().toISOString()
            };
            
            console.log('Form Data:', formData);
            
            // Optional: Send to backend
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // }).catch(err => console.error('Error:', err));
            
            // Show success message with animation
            showAlert('✨ Thank you! Your message has been sent. We will get back to you soon.', 'success');
            
            // Reset form
            contactForm.reset();
            
            // Close modal after 2 seconds
            setTimeout(function() {
                const modalElement = document.getElementById('contactModal');
                const modal = bootstrap.Modal.getInstance(modalElement);
                if (modal) {
                    modal.hide();
                } else {
                    // If modal instance doesn't exist, try to create one and hide it
                    const bsModal = new bootstrap.Modal(modalElement);
                    bsModal.hide();
                }
            }, 2000);
        } catch (error) {
            console.error('Form submission error:', error);
            showAlert('An error occurred. Please try again.', 'danger');
        }
    });
    
    // Also attach click handlers to all buttons that trigger the modal
    document.querySelectorAll('[data-bs-target="#contactModal"]').forEach(btn => {
        btn.addEventListener('click', function() {
            const modalElement = document.getElementById('contactModal');
            const modal = new bootstrap.Modal(modalElement);
            modal.show();
        });
    });
}

// ============================================
// Background Image Carousel
// ============================================

function setupBackgroundCarousel() {
    const heroSection = document.querySelector('.hero-section');
    
    // Images to cycle through
    const images = [
        'images/metallic-black.png',
        'images/metallic-white.png',
        'images/pale-green.png',
        'images/red.png'
    ];
    
    let currentImageIndex = 0;
    
    if (!heroSection) {
        console.error('❌ Hero section not found');
        return;
    }
    
    console.log('✅ Hero section found, initializing carousel...');
    
    // Create or update style tag for dynamic background changes
    let styleTag = document.getElementById('carousel-bg-styles');
    if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = 'carousel-bg-styles';
        document.head.appendChild(styleTag);
        console.log('✅ Style tag created');
    }
    
    // Function to update carousel background
    function updateCarouselBackground(imageUrl) {
        const screenWidth = window.innerWidth;
        let backgroundSize, backgroundPosition, opacity, backgroundAttachment;
        
        backgroundSize = 'cover';
        backgroundPosition = 'center';
        opacity = '0.6';
        backgroundAttachment = 'scroll';
        
        styleTag.textContent = `.hero-section::before { 
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: url('${imageUrl}'); 
            background-size: ${backgroundSize};
            background-position: ${backgroundPosition};
            background-repeat: no-repeat;
            background-attachment: ${backgroundAttachment};
            opacity: ${opacity};
            z-index: 0;
            transition: background-image 0.8s ease-in-out;
            pointer-events: none;
        }`;
        
        console.log(`🎠 Carousel updated to: ${imageUrl} (Screen: ${screenWidth}px)`);
    }
    
    // Set initial image
    updateCarouselBackground(images[0]);
    console.log('✅ Initial carousel image set');
    
    // Cycle through images every 5 seconds
    const carouselInterval = setInterval(function() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateCarouselBackground(images[currentImageIndex]);
    }, 5000);
    
    // Handle responsive resizing
    window.addEventListener('resize', function() {
        updateCarouselBackground(images[currentImageIndex]);
    });
    
    console.log('✅ Carousel initialized - images will cycle every 5 seconds');
}

// ============================================
// Show Alert Message with Animation
// ============================================

function showAlert(message, type = 'info') {
    // Create alert element
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.setAttribute('role', 'alert');
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    // Add to page
    const container = document.body;
    container.insertBefore(alertDiv, container.firstChild);
    
    // Add animation
    alertDiv.style.animation = 'slideInDown 0.5s ease-out';
    
    // Auto-remove after 5 seconds with animation
    setTimeout(function() {
        alertDiv.style.animation = 'fadeOut 0.3s ease-out forwards';
        setTimeout(() => alertDiv.remove(), 300);
    }, 5000);
}

// ============================================
// Scroll Animation - Staggered Appearance
// ============================================

function setupScrollAnimation() {
    const cards = document.querySelectorAll('.service-card, .tool-card, .stack-category');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered animation delay
                const delay = index * 0.1;
                entry.target.style.setProperty('--animation-delay', `${delay}s`);
                entry.target.classList.add('fade-in-up');
                
                // Add glow effect
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    cards.forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });
}

// ============================================
// Active Navigation Link Handler
// ============================================

function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const navbarToggler = document.querySelector('.navbar-toggler');
                navbarToggler.click();
            }
        });
    });
    
    // Update active link on scroll
    window.addEventListener('scroll', updateActiveLink);
}

function updateActiveLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ============================================
// Parallax Effect
// ============================================

function setupParallaxEffect() {
    const heroSection = document.querySelector('.hero-section');
    
    window.addEventListener('scroll', function() {
        if (heroSection) {
            const scrollPosition = window.scrollY;
            heroSection.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
        }
    });
}

// ============================================
// Cursor Effect - Glow Following Mouse
// ============================================

function setupCursorEffect() {
    const body = document.body;
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Add subtle glow effect to interactive elements on hover
        const elements = document.querySelectorAll('.btn, .nav-link, a, .service-card, .tool-card');
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const elX = rect.left + rect.width / 2;
            const elY = rect.top + rect.height / 2;
            
            const distance = Math.sqrt(
                Math.pow(mouseX - elX, 2) + Math.pow(mouseY - elY, 2)
            );
            
            if (distance < 100) {
                el.style.filter = 'drop-shadow(0 0 10px rgba(230, 57, 70, 0.3))';
            } else {
                el.style.filter = 'drop-shadow(0 0 0px rgba(230, 57, 70, 0))';
            }
        });
    });
}

// ============================================
// Add More CSS Animations
// ============================================

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
    
    @keyframes slideInDown {
        from {
            opacity: 0;
            transform: translateY(-30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// Show Technology Details Modal
// ============================================

function showTechDetail(techName) {
    const tech = techDatabase[techName];
    
    if (!tech) {
        console.error(`Technology "${techName}" not found in database`);
        return;
    }
    
    // Update modal title and description
    document.getElementById('techModalTitle').textContent = `${tech.icon} ${tech.title}`;
    document.getElementById('techDescription').innerHTML = tech.description;
    
    // Show the modal
    const techModal = new bootstrap.Modal(document.getElementById('techModal'));
    techModal.show();
}

// ============================================
// Show Service Details Modal
// ============================================

function showServiceDetail(serviceName) {
    const service = servicesDatabase[serviceName];
    
    if (!service) {
        console.error(`Service "${serviceName}" not found in database`);
        return;
    }
    
    // Update modal title and description
    document.getElementById('serviceModalTitle').textContent = `${service.icon} ${serviceName}`;
    document.getElementById('serviceDescription').innerHTML = service.description;
    
    // Show the modal
    const serviceModal = new bootstrap.Modal(document.getElementById('serviceModal'));
    serviceModal.show();
}

// ============================================
// How We Work Modal
// ============================================

const howWeWorkData = {
    idea: {
        title: '🗣️ 1. Tell Us Your Idea',
        description: `Every great project starts with a conversation. Reach out through the contact form, a message, or a call — whichever is most comfortable. You don't need a fully formed plan or technical knowledge.
        <h6 class="mt-4 fw-bold">What to Expect:</h6>
        <ul class="mt-2">
            <li><strong>Free initial consultation</strong> — no commitment required</li>
            <li><strong>No jargon</strong> — just describe the problem or outcome you want</li>
            <li><strong>Discovery session</strong> — we ask about users, timeline, budget, and goals</li>
            <li><strong>Confidentiality</strong> — your idea is safe with us from day one</li>
        </ul>
        <p class="mt-3">This helps us understand not just <em>what</em> you want built, but <em>why</em> it matters to your business — so we can recommend the right approach from the start.</p>`
    },
    build: {
        title: '🛠️ 2. We Plan & Build',
        description: `After the discovery phase, we put together a clear project plan — scope, milestones, deliverables, and timeline. You review and approve it before a single line of code is written.
        <h6 class="mt-4 fw-bold">During Development:</h6>
        <ul class="mt-2">
            <li><strong>Structured phases</strong> — broken into manageable milestones</li>
            <li><strong>Regular demos</strong> — see progress before it's fully done</li>
            <li><strong>Feedback loops</strong> — your input shapes the outcome at every stage</li>
            <li><strong>Transparent scope changes</strong> — discussed and agreed before proceeding</li>
        </ul>
        <p class="mt-3">We treat your input as essential, not optional. You'll never be left wondering what's happening with your project.</p>`
    },
    launch: {
        title: '🚀 3. Launch & Beyond',
        description: `When the project is ready, we handle the full deployment — servers, domains, final testing, and go-live. We don't consider a project done until it's working in the real world.
        <h6 class="mt-4 fw-bold">After Launch:</h6>
        <ul class="mt-2">
            <li><strong>Go-live support</strong> — we're on hand during and after launch</li>
            <li><strong>Post-launch bug fixes</strong> — included as standard</li>
            <li><strong>Handover documentation</strong> — so your team can manage independently</li>
            <li><strong>Ongoing support</strong> — available on request for future needs</li>
        </ul>
        <p class="mt-3">We stay reachable. Whether it's a bug, a new feature, or just a question — you won't be left on your own after delivery.</p>`
    },
    turnaround: {
        title: '⏱️ Fast Turnaround',
        description: `We respect your time. Every project has clear milestones and realistic deadlines we actually meet — and we flag potential delays early, never at the last minute.
        <h6 class="mt-4 fw-bold">How We Stay on Track:</h6>
        <ul class="mt-2">
            <li><strong>Milestone-based schedule</strong> — clear dates for every deliverable</li>
            <li><strong>Early delay warnings</strong> — you're informed before it becomes a problem</li>
            <li><strong>Rush project support</strong> — priority scheduling for urgent deadlines</li>
            <li><strong>No last-minute surprises</strong> — consistent communication throughout</li>
        </ul>
        <p class="mt-3">Whether you have a product launch, investor demo, or event deadline — we align our workflow to meet your critical dates without cutting corners.</p>`
    },
    pricing: {
        title: '💰 Transparent Pricing',
        description: `Before any work starts, you receive a detailed quote breaking down exactly what you're paying for — labor, tools, hosting, licenses. No hidden charges, ever.
        <h6 class="mt-4 fw-bold">Our Pricing Principles:</h6>
        <ul class="mt-2">
            <li><strong>Itemized quotes</strong> — you see exactly where every peso goes</li>
            <li><strong>No hidden fees</strong> — what we quote is what you pay</li>
            <li><strong>Scope change process</strong> — cost impact discussed and approved before proceeding</li>
            <li><strong>Flexible arrangements</strong> — payment terms we can work out together</li>
        </ul>
        <p class="mt-3">We'd rather have an honest conversation about budget than an awkward invoice at the end. You're always in control of what gets built and what gets spent.</p>`
    },
    partnership: {
        title: '🤝 Long-Term Partnership',
        description: `We don't treat projects as one-off transactions. We take time to understand your business — your goals, users, and constraints — so every future project is faster and smarter.
        <h6 class="mt-4 fw-bold">What Partnership Looks Like:</h6>
        <ul class="mt-2">
            <li><strong>Business context retained</strong> — no re-explaining from scratch each time</li>
            <li><strong>Priority scheduling</strong> — returning clients get first availability</li>
            <li><strong>Maintenance & growth support</strong> — we grow with you</li>
            <li><strong>Genuine investment</strong> — your success is our success</li>
        </ul>
        <p class="mt-3">Many of our clients return for follow-up projects and expansions. That's not an accident — it means we delivered something worth coming back for.</p>`
    }
};

function showHowWeWork(key) {
    const data = howWeWorkData[key];
    if (!data) return;
    document.getElementById('serviceModalTitle').textContent = data.title;
    document.getElementById('serviceDescription').innerHTML = data.description;
    new bootstrap.Modal(document.getElementById('serviceModal')).show();
}

// ============================================
// Hero Icon Click Details
// ============================================

const heroIconData = {
    web: {
        title: '💻 Web Development',
        description: `We build fast, scalable, and modern web applications tailored to your business goals.
        <h6 class="mt-4 fw-bold">What We Build:</h6>
        <ul class="mt-2">
            <li><strong>Business websites</strong> with clean, responsive design</li>
            <li><strong>Web applications</strong> using modern JS frameworks</li>
            <li><strong>E-commerce stores</strong> with secure checkout</li>
            <li><strong>Admin dashboards</strong> and internal tools</li>
            <li><strong>REST APIs</strong> and backend services</li>
        </ul>
        <h6 class="mt-4 fw-bold">Tech Stack:</h6>
        <p class="mt-2">Spring Boot, Django, Flask, PHP on the backend — Bootstrap, HTML5, CSS3, JavaScript on the frontend.</p>`
    },
    mobile: {
        title: '📱 Mobile Apps',
        description: `Cross-platform mobile apps that feel native on both iOS and Android — built with Flutter.
        <h6 class="mt-4 fw-bold">What We Deliver:</h6>
        <ul class="mt-2">
            <li><strong>Business apps</strong> for field teams, sales, and operations</li>
            <li><strong>Customer-facing apps</strong> with smooth UX and branding</li>
            <li><strong>Offline-capable apps</strong> with local data sync</li>
            <li><strong>Push notifications</strong> and real-time updates</li>
            <li><strong>App Store & Play Store</strong> deployment support</li>
        </ul>
        <h6 class="mt-4 fw-bold">Why Flutter:</h6>
        <p class="mt-2">One codebase, two platforms. Native performance and beautiful UI without doubling development cost.</p>`
    },
    media: {
        title: '🎬 Creative Media',
        description: `From raw footage to polished visuals — we handle all your photo and video production needs.
        <h6 class="mt-4 fw-bold">Services:</h6>
        <ul class="mt-2">
            <li><strong>Video editing</strong> for ads, reels, promos, and corporate content</li>
            <li><strong>Photo retouching</strong> for products, portraits, and events</li>
            <li><strong>Logo and brand identity</strong> design</li>
            <li><strong>Tarp and banner design</strong> for print and events</li>
            <li><strong>Motion graphics</strong> and animated intros</li>
        </ul>
        <h6 class="mt-4 fw-bold">Tools We Use:</h6>
        <p class="mt-2">Adobe Photoshop, Adobe Premiere Pro, Kdenlive — industry-standard tools for professional-grade output.</p>`
    },
    infrastructure: {
        title: '🖥️ Infrastructure',
        description: `Reliable server and network infrastructure so your systems run fast, secure, and uninterrupted.
        <h6 class="mt-4 fw-bold">What We Handle:</h6>
        <ul class="mt-2">
            <li><strong>Server setup</strong> — physical or cloud (VPS, dedicated)</li>
            <li><strong>CCTV installation</strong> — HD surveillance with remote access</li>
            <li><strong>Database configuration</strong> — MySQL, PostgreSQL optimization</li>
            <li><strong>Security hardening</strong> — firewalls, SSL, access control</li>
            <li><strong>Backup and recovery</strong> — automated and tested</li>
        </ul>
        <h6 class="mt-4 fw-bold">Our Approach:</h6>
        <p class="mt-2">We don't just set it up — we document it, secure it, and make sure you understand what's running.</p>`
    },
    privanta: {
        title: '⚡ Why Privanta',
        description: `We're not an agency. We're a focused tech collective that builds things that work.
        <h6 class="mt-4 fw-bold">What Sets Us Apart:</h6>
        <ul class="mt-2">
            <li><strong>No middlemen</strong> — you work directly with the people building your product</li>
            <li><strong>Full-stack capability</strong> — software, design, media, and infrastructure under one roof</li>
            <li><strong>Honest timelines</strong> — we tell you what's realistic, not what sounds good</li>
            <li><strong>Quality over quantity</strong> — we take on projects we can do well</li>
            <li><strong>Long-term thinking</strong> — we build for maintainability, not just delivery</li>
        </ul>
        <h6 class="mt-4 fw-bold">Our Promise:</h6>
        <p class="mt-2">Every project gets our full attention. We measure success by whether your business actually benefits — not just whether the deliverable was shipped.</p>`
    }
};

function showHeroDetail(key) {
    const data = heroIconData[key];
    if (!data) return;
    document.getElementById('serviceModalTitle').textContent = data.title;
    document.getElementById('serviceDescription').innerHTML = data.description;
    new bootstrap.Modal(document.getElementById('serviceModal')).show();
}

// ============================================
// Log Page Load
// ============================================

console.log('%c 🚀 Privanta Portfolio Website', 'color: #e63946; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px rgba(230, 57, 70, 0.5);');
console.log('%c ✨ Welcome to Privanta - Your Digital Solutions Partner', 'color: #ff6b6b; font-size: 12px; font-weight: bold;');
console.log('%c All animations and effects loaded successfully! 🎉', 'color: #a4161a; font-size: 11px;');
