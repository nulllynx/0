document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    
    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.style.opacity = '0';
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500);
        }, 1000);
    });
    // Sample reports data (extended to 25 for demo)
const reportsData = [
    // First 6 reports (always visible)
    {
        platform: "HackerOne",
        platformIcon: "assets/images/hackerone.png",
        title: "Remote Code Execution via File Upload",
        description: "Discovered a critical vulnerability allowing unauthenticated users to upload malicious files leading to RCE on the target server.",
        severity: "critical",
        bounty: "$10,000",
        date: "2023-05-15",
        url: "#"
    },
    {
        platform: "Bugcrowd",
        platformIcon: "assets/images/bugcrowd.png",
        title: "SQL Injection in User Profile Endpoint",
        description: "Found a SQL injection vulnerability in the user profile endpoint that could lead to database compromise.",
        severity: "high",
        bounty: "$5,000",
        date: "2023-04-22",
        url: "#"
    },
    {
        platform: "Intigriti",
        platformIcon: "assets/images/intigriti.jpg",
        title: "Cross-Site Scripting (XSS) in Search Functionality",
        description: "Discovered a persistent XSS vulnerability in the search functionality affecting all users.",
        severity: "medium",
        bounty: "$2,500",
        date: "2023-03-10",
        url: "#"
    },
    {
        platform: "Private Program",
        platformIcon: "assets/images/Private.jpg",
        title: "Authentication Bypass via API Endpoint",
        description: "Identified a flaw in the authentication mechanism allowing unauthorized access to sensitive data.",
        severity: "high",
        bounty: "Confidential",
        date: "2023-02-28",
        url: "#"
    },
    {
        platform: "HackerOne",
        platformIcon: "assets/images/hackerone.png",
        title: "CSRF Leading to Account Takeover",
        description: "Found a CSRF vulnerability that could lead to full account compromise when combined with other flaws.",
        severity: "medium",
        bounty: "$3,000",
        date: "2023-01-15",
        url: "#"
    },
    {
        platform: "Bugcrowd",
        platformIcon: "assets/images/bugcrowd.png",
        title: "Server-Side Request Forgery (SSRF)",
        description: "Identified an SSRF vulnerability allowing internal network scanning and metadata access.",
        severity: "high",
        bounty: "$4,500",
        date: "2022-12-05",
        url: "#"
    },
    // Additional reports (shown when "See More" clicked)
    {
        platform: "HackerOne",
        platformIcon: "assets/images/hackerone.png",
        title: "Information Disclosure via API Response",
        description: "Discovered sensitive information being exposed in API responses without proper authorization checks.",
        severity: "medium",
        bounty: "$1,500",
        date: "2022-11-20",
        url: "#"
    },
    // Add more reports up to 25...
    // (In a real implementation, you would have 25+ reports)
];

// Reports Section Functionality
const reportsGrid = document.querySelector('.reports-grid');
const seeMoreBtn = document.getElementById('seeMoreBtn');
const showLessBtn = document.getElementById('showLessBtn');

function createReportCard(report) {
    return `
        <div class="report-card">
            <div class="report-header">
                <div class="report-platform">
                    <img src="${report.platformIcon}" alt="${report.platform}">
                    <span>${report.platform}</span>
                </div>
                <h3 class="report-title">${report.title}</h3>
                <div class="report-meta">
                    <span>Bounty: ${report.bounty}</span>
                    <span class="report-severity severity-${report.severity}">${report.severity}</span>
                </div>
            </div>
            <div class="report-body">
                <p class="report-desc">${report.description}</p>
            </div>
            <div class="report-footer">
                <span class="report-date">${report.date}</span>
                <a href="${report.url}" class="report-link" target="_blank">View Details <i class="fas fa-external-link-alt"></i></a>
            </div>
        </div>
    `;
}

function loadReports(count) {
    reportsGrid.innerHTML = '';
    const reportsToShow = count === 6 ? reportsData.slice(0, 6) : reportsData.slice(0, 25);
    
    reportsToShow.forEach(report => {
        reportsGrid.innerHTML += createReportCard(report);
    });
    
    seeMoreBtn.style.display = count === 6 ? 'inline-block' : 'none';
    showLessBtn.style.display = count === 6 ? 'none' : 'inline-block';
}

// Initialize with 6 reports
loadReports(6);

seeMoreBtn.addEventListener('click', () => {
    loadReports(25);
    // Smooth scroll to maintain context
    setTimeout(() => {
        reportsGrid.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
});

showLessBtn.addEventListener('click', () => {
    loadReports(6);
    // Smooth scroll to top of section
    setTimeout(() => {
        document.getElementById('reports').scrollIntoView({ behavior: 'smooth' });
    }, 100);
});

    // Typing Animation
    const typingText = document.querySelector('.typing-text');
    const cursor = document.querySelector('.cursor');
    const texts = [
        "Bug Bounty Hunter",
        "Penetration Tester",
        "Ethical Hacker",
        "CTF Player",
        "Security Researcher"
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isEnd = false;

    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isEnd = true;
            setTimeout(() => {
                isDeleting = true;
            }, 1500);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            isEnd = false;
            textIndex = (textIndex + 1) % texts.length;
        }

        const typingSpeed = isDeleting ? 50 : 100;
        setTimeout(type, isEnd ? typingSpeed * 2 : typingSpeed);
    }

    setTimeout(type, 1000);

    // Cursor Blink Animation
    setInterval(() => {
        cursor.classList.toggle('active');
    }, 500);

    // Header Scroll Effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Skills Category Tabs
    const categories = document.querySelectorAll('.category');
    const skillsGrids = document.querySelectorAll('.skills-grid');
    
    categories.forEach(category => {
        category.addEventListener('click', function() {
            // Remove active class from all categories
            categories.forEach(cat => cat.classList.remove('active'));
            
            // Add active class to clicked category
            this.classList.add('active');
            
            // Get category name from data attribute
            const categoryName = this.getAttribute('data-category');
            
            // Hide all skills grids
            skillsGrids.forEach(grid => {
                grid.classList.remove('show');
            });
            
            // Show the selected skills grid
            document.querySelector(`.skills-grid.${categoryName}`).classList.add('show');
        });
    });

    // Animate Skill Bars on Scroll
    const skillBars = document.querySelectorAll('.skill-progress');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            if (isElementInViewport(bar)) {
                bar.style.width = width;
            }
        });
    }
    
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    window.addEventListener('scroll', animateSkillBars);
    animateSkillBars(); // Run once on page load

    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });

    // Set Current Year in Footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Form Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Here you would typically send the form data to a server
            // For demonstration, we'll just log it and show an alert
            console.log({ name, email, subject, message });
            
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }

    // Initialize Particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS.load('particles-js', 'particles.json', function() {
            console.log('Particles.js loaded');
        });
    }
});
