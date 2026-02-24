document.addEventListener('DOMContentLoaded', () => {
    // Tab Switching Logic for Installation Guide
    const tabs = document.querySelectorAll('.tab');
    const tabContent = document.querySelector('.tab-content code');

    const content = {
        'Installation': `# Clone and Install\ngit clone https://github.com/shyam/codecli\ncd codecli\nnpm install && npm install -g .\n\n# Run first time\ncodecli`,
        'Configuration': `# Configuration\ncodecli config set provider gemini\ncodecli config set model gemini-2.0-flash\n\n# Or use .env\nCODECLI_PROVIDER=azure-openai`,
        'Usage': `# Interactive Mode\ncodecli\n\n# Single Prompt\ncodecli "Refactor this file"\n\n# Resume Session\ncodecli -r <session-id>`
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');
            // Update content
            tabContent.textContent = content[tab.textContent];
        });
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple Reveal Animation on Scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .split-layout, .terminal-guide').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });

    // Hero Terminal Typing Effect Mock
    const terminalBody = document.querySelector('.terminal-body');
    // In a real app, you could add more dynamic typing here
});
