const template = document.querySelector('#drone-template');
for (const [index, mount] of [...document.querySelectorAll('#hero-drone, #journey-drone')].entries()) {
  const clone = template.content.cloneNode(true);
  // Each SVG gets its own paint-server IDs.
  clone.querySelectorAll('[id]').forEach(node => { node.id += `-${index}`; });
  clone.querySelectorAll('[fill]').forEach(node => { node.setAttribute('fill', node.getAttribute('fill').replace(/url\(#([^)]+)\)/g, `url(#$1-${index})`)); });
  mount.append(clone);
}
const gallery = document.querySelector('#buoy-gallery');
const images = [ ['BUOY_2', 'Buoy assembly, alternate view'], ['PRV_1', 'Pressure relief valve'], ['PRV_2', 'Pressure relief valve, alternate view'], ['HYDROPHONE', 'Hydrophone'], ['BATTERY_PACK', '96-cell battery pack'], ['CHASSIS_1', 'Electronics chassis'], ['CHASSIS_2', 'Electronics chassis, alternate view'], ['HOUSING_1', 'Pressure housing'], ['HOUSING_2', 'Pressure housing, alternate view'], ['HOUSING_3', 'Pressure housing detail'] ];
images.forEach(([file, caption]) => {
  const button = document.createElement('button');
  button.type = 'button'; button.dataset.image = `assets/projects/glider/${file}.png`; button.dataset.caption = caption; button.setAttribute('aria-label', `Enlarge ${caption.toLowerCase()}`);
  const img = document.createElement('img'); img.src = button.dataset.image; img.alt = caption; img.loading = 'lazy'; button.append(img); gallery.append(button);
});
const viewer = document.querySelector('#image-viewer');
let lastTrigger;
document.addEventListener('click', event => {
  const trigger = event.target.closest('[data-image]');
  if (!trigger) return;
  lastTrigger = trigger;
  viewer.querySelector('img').src = trigger.dataset.image;
  viewer.querySelector('img').alt = trigger.dataset.caption;
  viewer.querySelector('p').textContent = trigger.dataset.caption;
  viewer.showModal(); document.body.style.overflow = 'hidden';
});
viewer.querySelector('button').addEventListener('click', () => viewer.close());
viewer.addEventListener('click', event => { if (event.target === viewer) { const r = viewer.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) viewer.close(); } });
viewer.addEventListener('close', () => { document.body.style.overflow = ''; lastTrigger?.focus(); });
const path = document.querySelector('.flight-path');
let pending = false;
function updateFlight() {
  const rect = path.getBoundingClientRect();
  const progress = Math.max(0, Math.min(1, (innerHeight * .5 - rect.top) / rect.height));
  document.documentElement.style.setProperty('--flight', progress.toFixed(4));
  pending = false;
}
function scheduleFlight() { if (!pending) { pending = true; requestAnimationFrame(updateFlight); } }
addEventListener('scroll', scheduleFlight, {passive:true});
addEventListener('resize', scheduleFlight);
new ResizeObserver(scheduleFlight).observe(document.querySelector('.journey'));
updateFlight();
const navLinks = [...document.querySelectorAll('nav a')];
const sections = navLinks.map(link => document.querySelector(link.getAttribute('href')));
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) navLinks.forEach(link => { const active = link.hash === `#${entry.target.id}`; link.classList.toggle('active', active); if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); }); });
}, {rootMargin:'-10% 0px -55% 0px'});
sections.forEach(section => observer.observe(section));
document.querySelector('#year').textContent = new Date().getFullYear();
