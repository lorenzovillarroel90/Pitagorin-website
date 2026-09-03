document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

document.querySelectorAll('.nav-menu-panel a').forEach((link) => {
  link.addEventListener('click', () => {
    link.closest('details')?.removeAttribute('open');
  });
});

const revealTargets = document.querySelectorAll(
  '.section-heading, .card, .screen-card, .trust-item, .path-step, .policy-section, .cta-panel'
);

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  revealTargets.forEach((element, index) => {
    element.classList.add('reveal', `reveal-delay-${index % 4}`);
  });

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  revealTargets.forEach((element) => revealObserver.observe(element));
}
