/* ==========================================
   DE PRINCE SCHOOL - MAIN JAVASCRIPT
   Mobile menu, shared functions
   ========================================== */

document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      navLinks.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
      if (navLinks) navLinks.classList.remove('active');
    });
  });
});
