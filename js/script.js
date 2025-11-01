document.addEventListener('DOMContentLoaded', () => {
  const themeButton = document.getElementById('themeToggle');
  const html = document.documentElement; // <html> tag (root element)

  // Load saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    html.classList.add('light-theme');
    if (themeButton) themeButton.textContent = 'Dark Mode';
  }

  // Toggle theme when button is clicked
  themeButton?.addEventListener('click', () => {
    html.classList.toggle('light-theme');

    const isLight = html.classList.contains('light-theme');

    // Update button text
    themeButton.textContent = isLight ? 'Dark Mode' : 'Light Mode';

    // Save theme preference to localStorage
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });

  // Contact form functionality
  const form = document.getElementById('contactForm');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('full_name').value;
    const email = document.getElementById('email').value;
    alert(`Thanks ${name}! I’ll reach out via ${email} soon.`);
    form.reset();
  });
});
