/*
 * Main JavaScript for portfolio site
 *
 * Handles mobile navigation toggling and simple interactive behavior.
 * Vibe: calm + minimal with friendly touches.
 */

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (!hamburger || !mobileMenu) return;

  // Ensure ARIA attributes exist for accessibility
  hamburger.setAttribute('role', 'button');
  hamburger.setAttribute('aria-label', 'Open navigation menu');
  hamburger.setAttribute('aria-expanded', 'false');

  const openClass = 'open';

  const openMenu = () => {
    mobileMenu.classList.add(openClass);
    hamburger.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    mobileMenu.classList.remove(openClass);
    hamburger.setAttribute('aria-expanded', 'false');
  };

  const toggleMenu = () => {
    const isOpen = mobileMenu.classList.contains(openClass);
    isOpen ? closeMenu() : openMenu();
  };

  // Click to toggle
  hamburger.addEventListener('click', toggleMenu);

  // Keyboard friendly: Enter / Space toggles
  hamburger.addEventListener('keydown', (e) => {
    const key = e.key || e.code;
    if (key === 'Enter' || key === ' ' || key === 'Spacebar') {
      e.preventDefault();
      toggleMenu();
    }
  });

  // Close when clicking any link in the mobile menu (friendly UX)
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // Close on outside click (but not when clicking the hamburger)
  document.addEventListener('click', (e) => {
    const clickedInsideMenu = mobileMenu.contains(e.target);
    const clickedHamburger = hamburger.contains(e.target);
    if (!clickedInsideMenu && !clickedHamburger) {
      closeMenu();
    }
  });
});
