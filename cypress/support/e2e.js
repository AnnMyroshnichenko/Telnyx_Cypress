import './commands'

Cypress.on('window:before:load', (win) => {
  const style = win.document.createElement('style');

  style.innerHTML = `
    *,
    *::before,
    *::after {
      transition: none !important;
      animation: none !important;
      scroll-behavior: auto !important;
    }
  `;

  win.document.head.appendChild(style);
});