const projects = {
  weather: {
    title: 'WeatherApiWrapper', category: 'BACKEND · REST API', image: 'assets/weather-api.svg',
    description: 'Harici bir sağlayıcıdan gelen güncel, tahmini ve geçmiş hava durumu verilerini normalize eden ASP.NET Core REST API portfolyo projesi.',
    features: ['Redis ile cache-aside önbellekleme.', 'Dış HTTP çağrılarında retry, timeout ve circuit breaker politikaları.', 'Girdi doğrulama, standart hata yanıtları ve iptal yönetimi.', 'Swagger / OpenAPI dokümantasyonu; birim ve uygulama entegrasyon testleri.'],
    tags: ['.NET 10', 'ASP.NET Core', 'Redis', 'Docker', 'xUnit', 'GitHub Actions'],
    source: 'https://github.com/batuhansacofficial/WeatherApiWrapper'
  },
  unitwise: {
    title: 'Unitwise', category: 'WEB UYGULAMASI · JSON API', image: 'assets/unitwise.svg',
    description: 'Uzunluk, ağırlık, sıcaklık, alan ve hacim dönüşümleri için bir web uygulaması. Razor Pages arayüzü ile Minimal JSON API, aynı durumsuz C# dönüşüm servisini kullanır. GitHub deposunun adı UnitConverter.',
    features: ['Beş dönüşüm kategorisi; formül açıklamaları ve alan bazlı doğrulama.', 'Mutlak sıfır kontrolü ve hassas hesaplama için rasyonel ara işlemler.', 'Tarayıcıda yerel geçmiş, birim değiştirme ve sonucu kopyalama.', 'JavaScript olmadan da çalışan form; xUnit ve HTTP entegrasyon testleri.'],
    tags: ['.NET 10', 'Razor Pages', 'Minimal API', 'Docker', 'xUnit'],
    source: 'https://github.com/batuhansacofficial/UnitConverter', demo: 'https://unitwise.onrender.com/'
  }
};

const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('#mobile-nav');
function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Menüyü kapat' : 'Menüyü aç');
  mobileNav.hidden = !open;
}
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !mobileNav.hidden) { setMenu(false); menuButton.focus(); } });
window.matchMedia('(min-width: 781px)').addEventListener('change', event => { if (event.matches) setMenu(false); });

const dialog = document.querySelector('#project-dialog');
let previousFocus;
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const project = projects[button.dataset.project];
  if (!project) return;
  previousFocus = button;
  document.querySelector('#dialog-title').textContent = project.title;
  document.querySelector('#dialog-category').textContent = project.category;
  document.querySelector('#dialog-description').textContent = project.description;
  document.querySelector('#dialog-image').src = project.image;
  document.querySelector('#dialog-image').alt = project.title + ' için konsept illüstrasyon';
  document.querySelector('#dialog-source').href = project.source;
  const features = document.querySelector('#dialog-features');
  features.replaceChildren(...project.features.map(text => { const li = document.createElement('li'); li.textContent = text; return li; }));
  document.querySelector('#dialog-tags').replaceChildren(...project.tags.map(text => { const span = document.createElement('span'); span.textContent = text; return span; }));
  const demo = document.querySelector('#dialog-demo');
  demo.hidden = !project.demo;
  document.querySelector('#demo-note').hidden = !project.demo;
  if (project.demo) demo.href = project.demo; else demo.removeAttribute('href');
  dialog.showModal();
  document.body.classList.add('dialog-open');
  dialog.scrollTop = 0;
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
dialog.addEventListener('close', () => { document.body.classList.remove('dialog-open'); previousFocus?.focus({preventScroll:true}); });

const navigation = document.querySelectorAll('.desktop-nav a');
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) navigation.forEach(link => { if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
}), {rootMargin: '-20% 0px -50% 0px'});
document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
const progress = document.querySelector('.reading-progress');
let scrollQueued = false;
function updateProgress() { const total = document.documentElement.scrollHeight - window.innerHeight; progress.style.transform = 'scaleX(' + (total > 0 ? window.scrollY / total : 0) + ')'; scrollQueued = false; }
window.addEventListener('scroll', () => { if (!scrollQueued) { requestAnimationFrame(updateProgress); scrollQueued = true; } }, {passive:true});
window.addEventListener('resize', updateProgress);
document.querySelector('#year').textContent = new Date().getFullYear();
updateProgress();
