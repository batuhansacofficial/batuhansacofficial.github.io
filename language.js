(() => {
  const links = document.querySelectorAll('[data-language-link]');
  const syncSection = () => {
    for (const link of links) {
      const target = new URL(link.getAttribute('href'), window.location.href);
      target.hash = window.location.hash;
      link.href = target.href;
    }
  };
  syncSection();
  window.addEventListener('hashchange', syncSection);
})();
