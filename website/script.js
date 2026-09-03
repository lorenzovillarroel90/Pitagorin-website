document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const languageNames = {
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
  fr: 'Français',
  it: 'Italiano'
};

const languageLabels = {
  en: 'Language',
  es: 'Idioma',
  de: 'Sprache',
  fr: 'Langue',
  it: 'Lingua'
};

const pathParts = window.location.pathname.split('/').filter(Boolean);
const localeIndex = pathParts.findIndex((part) => ['es', 'de', 'fr', 'it'].includes(part));
const currentLocale = document.documentElement.lang.split('-')[0] || 'en';
const hasPageFile = pathParts.at(-1)?.endsWith('.html');
const currentPage = hasPageFile ? pathParts.at(-1) : 'index.html';
const baseParts = localeIndex >= 0
  ? pathParts.slice(0, localeIndex)
  : (hasPageFile ? pathParts.slice(0, -1) : pathParts);
const basePath = `/${baseParts.join('/')}${baseParts.length ? '/' : ''}`;

const languageUrl = (locale) => {
  const pagePath = currentPage === 'index.html' ? '' : currentPage;
  return locale === 'en'
    ? `${basePath}${pagePath}`
    : `${basePath}${locale}/${pagePath}`;
};

const languageLinks = (className) => Object.entries(languageNames).map(([locale, name]) => {
  const link = document.createElement('a');
  link.href = languageUrl(locale);
  link.lang = locale;
  link.hreflang = locale;
  link.textContent = name;
  link.className = className;
  if (locale === currentLocale) link.setAttribute('aria-current', 'true');
  link.addEventListener('click', () => {
    try {
      localStorage.setItem('pitagorin-language', locale);
    } catch (_) {
      // The link still changes language when browser storage is unavailable.
    }
  });
  return link;
});

const desktopLanguage = document.createElement('details');
desktopLanguage.className = 'language-menu';
const desktopSummary = document.createElement('summary');
desktopSummary.setAttribute('aria-label', languageLabels[currentLocale]);
desktopSummary.textContent = currentLocale.toUpperCase();
const desktopPanel = document.createElement('div');
desktopPanel.className = 'language-menu-panel';
languageLinks('language-option').forEach((link) => desktopPanel.append(link));
desktopLanguage.append(desktopSummary, desktopPanel);
document.querySelector('.nav')?.append(desktopLanguage);

const mobilePanel = document.querySelector('.nav-menu-panel');
if (mobilePanel) {
  const mobileLanguages = document.createElement('div');
  mobileLanguages.className = 'mobile-languages';
  const label = document.createElement('span');
  label.textContent = languageLabels[currentLocale];
  mobileLanguages.append(label, ...languageLinks('mobile-language-option'));
  mobilePanel.append(mobileLanguages);
}

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
