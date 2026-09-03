document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

document.querySelectorAll('.nav-menu-panel a').forEach((link) => {
  link.addEventListener('click', () => {
    link.closest('details')?.removeAttribute('open');
  });
});
