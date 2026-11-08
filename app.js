const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('#mobile-nav');
const english = document.documentElement.lang === 'en';
function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', english ? (open ? 'Close menu' : 'Open menu') : (open ? 'Menüyü kapat' : 'Menüyü aç'));
  mobileNav.hidden = !open;
}
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !mobileNav.hidden) { setMenu(false); menuButton.focus(); } });
window.matchMedia('(min-width: 781px)').addEventListener('change', event => { if (event.matches) setMenu(false); });

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

const copyEmailButton = document.querySelector('#copy-email');
const contactEmail = document.querySelector('#contact-email');
const copyEmailStatus = document.querySelector('#email-copy-status');
copyEmailButton.addEventListener('click', async () => {
  copyEmailStatus.textContent = '';
  copyEmailButton.disabled = true;
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(contactEmail.textContent.trim());
    copyEmailStatus.textContent = english ? 'Email address copied.' : 'E-posta adresi kopyalandı.';
  } catch {
    copyEmailStatus.textContent = english ? 'The address could not be copied. Select and copy the address above.' : 'Adres kopyalanamadı. Yukarıdaki adresi seçip kopyalayabilirsin.';
  } finally {
    copyEmailButton.disabled = false;
  }
});
