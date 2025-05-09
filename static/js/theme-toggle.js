document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.getElementById('checkbox');
  const htmlElement = document.documentElement;

  // Initial theme setup
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    // Explicitly add dark-mode class for dark theme
    htmlElement.classList.add('dark-mode');
    checkbox.checked = true;
  } else {
    // Explicitly remove dark-mode class for light theme
    htmlElement.classList.remove('dark-mode');
    checkbox.checked = false;
  }

  checkbox.addEventListener('change', () => {
    // Toggle dark mode based on checkbox state
    if (checkbox.checked) {
      // Add dark-mode class when checkbox is checked
      htmlElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      // Remove dark-mode class when checkbox is unchecked
      htmlElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  });
});