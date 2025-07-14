// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Theme toggle functionality
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const toggleBtn = document.querySelector('.theme-toggle');
    toggleBtn.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
}

// Add dark theme styles
const darkThemeStyles = `
    .dark-theme {
        --primary-color: #ecf0f1;
        --secondary-color: #3498db;
        --accent-color: #e74c3c;
        --text-color: #ecf0f1;
        --text-light: #bdc3c7;
        --bg-color: #1a1a1a;
        --bg-secondary: #2c2c2c;
        --border-color: #34495e;
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = darkThemeStyles;
document.head.appendChild(styleSheet);

// Article card click handlers
document.querySelectorAll('.article-card').forEach(card => {
    card.addEventListener('click', function() {
        // In a real implementation, this would navigate to the full article
        console.log('Navigate to article:', this.querySelector('.article-title').textContent);
    });
});

// Newsletter form submission
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    if (email) {
        alert('Thank you for subscribing!');
        this.reset();
    }
});