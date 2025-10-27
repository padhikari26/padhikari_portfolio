/*
 * Main JavaScript for portfolio site
 *
 * Handles mobile navigation toggling and any additional interactive behaviour.
 */

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('show');
    });
  }
});