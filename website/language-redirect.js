(() => {
  const supported = ['en', 'es', 'de', 'fr', 'it'];
  let saved = null;
  try {
    const stored = localStorage.getItem('pitagorin-language');
    if (supported.includes(stored)) saved = stored;
  } catch (_) {
    // Browser storage is optional; language detection still works without it.
  }
  const preferred = saved || navigator.languages?.find((language) =>
    supported.includes(language.toLowerCase().split('-')[0])
  )?.toLowerCase().split('-')[0] || 'en';

  if (preferred === 'en') return;

  const path = window.location.pathname;
  const isIndexFile = path.endsWith('/index.html');
  const isRoot = path === '/' || path.endsWith('/Pitagorin-website/') || isIndexFile;
  if (!isRoot) return;

  const rootPath = isIndexFile ? path.slice(0, -'index.html'.length) : path;
  const target = `${rootPath}${preferred}/${window.location.search}${window.location.hash}`;
  window.location.replace(target);
})();
