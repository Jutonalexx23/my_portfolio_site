// =========================================================
// DARK / LIGHT THEME TOGGLE
// =========================================================

const root = document.documentElement;
const button = document.getElementById('theme');

// Load saved theme
const saved = localStorage.getItem('theme');

if (saved) {
  root.dataset.theme = saved;
}


// Update theme button icon
function updateThemeButton() {
  button.textContent =
    root.dataset.theme === 'dark' ? '☀' : '☾';
}


// Toggle theme
button.onclick = () => {

  root.dataset.theme =
    root.dataset.theme === 'dark' ? 'light' : 'dark';

  // Save theme preference
  localStorage.setItem('theme', root.dataset.theme);

  updateThemeButton();
};


// Set initial theme icon
updateThemeButton();



// =========================================================
// BACK TO TOP ARROW
// =========================================================

const backToTop = document.querySelector('.back-to-top');

if (backToTop) {

  // -------------------------------------------------------
  // Show arrow when scrolling down
  // -------------------------------------------------------

  window.addEventListener('scroll', () => {

    if (window.scrollY > 400) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }

  });


  // -------------------------------------------------------
  // Scroll smoothly to the top when clicked
  // -------------------------------------------------------

  backToTop.addEventListener('click', () => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  });

}
