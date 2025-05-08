document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const htmlElement = document.documentElement;

    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        htmlElement.classList.add('dark-mode');
    }

    themeToggle.addEventListener('click', () => {
        htmlElement.classList.toggle('dark-mode');

        // Save theme preference
        const currentTheme = htmlElement.classList.contains('dark-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', currentTheme);
    });
});