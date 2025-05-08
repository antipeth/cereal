document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('checkbox');
  const htmlElement = document.documentElement;

  // Initial theme setup
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    htmlElement.classList.toggle('dark-mode', savedTheme === 'dark');
    checkbox.checked = savedTheme === 'dark';
  }

  checkbox.addEventListener('change', () => {
    htmlElement.classList.toggle('dark-mode');

    // Save theme preference
    const currentTheme = htmlElement.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
  });
});